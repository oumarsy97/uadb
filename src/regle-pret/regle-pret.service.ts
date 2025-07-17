// service/regle-pret.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RoleUser } from 'generated/prisma';
import { CreateReglePretDto, ReglePretResponseDto, UpdateReglePretDto } from './dto/create-regle-pret.dto';

@Injectable()
export class ReglePretService {
  constructor(private readonly prisma: PrismaService) {}

  // Créer une nouvelle règle de prêt
  async create(createDto: CreateReglePretDto): Promise<ReglePretResponseDto> {
    // Récupérer le premier ID d'université
    const premiereUniversite = await this.prisma.universite.findFirst({
      orderBy: {
        createdAt: 'asc', // Le premier créé
      },
    });

    if (!premiereUniversite) {
      throw new NotFoundException(`Aucune université trouvée dans le système`);
    }

    // Vérifier s'il existe déjà une règle pour cette université et ce rôle
    const existingRegle = await this.prisma.reglePret.findUnique({
      where: {
        universiteId_roleUtilisateur: {
          universiteId: premiereUniversite.id,
          roleUtilisateur: createDto.roleUtilisateur,
        },
      },
    });

    if (existingRegle) {
      throw new ConflictException(`Une règle de prêt existe déjà pour le rôle ${createDto.roleUtilisateur} dans cette université`);
    }

    const regle = await this.prisma.reglePret.create({
      data: {
        universiteId: premiereUniversite.id,
        roleUtilisateur: createDto.roleUtilisateur,
        nombreMaxOuvrages: createDto.nombreMaxOuvrages ?? 2,
        dureeEmpruntJours: createDto.dureeEmpruntJours ?? 15,
        nbRenouvellements: createDto.nbRenouvellements ?? 1,
        penaliteRetardJours: createDto.penaliteRetardJours ?? true,
        estActif: createDto.estActif ?? true,
      },
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
    });

    return this.formatResponse(regle);
  }

  // Récupérer toutes les règles de prêt
  async findAll(page?: number, limit?: number, search?: string): Promise<ReglePretResponseDto[]> {
    const where = search
      ? {
          OR: [
            // Recherche sur le nom de l'université (champ string)
            { universite: { nom: { contains: search, mode: 'insensitive' } } },
            // Recherche sur le rôle utilisateur (champ enum, on utilise equals ou in)
            { roleUtilisateur: search as RoleUser },
          ],
        }
      : {};

    const regles = await this.prisma.reglePret.findMany({
      where,
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
      ...(page && limit ? {
        skip: (page - 1) * limit,
        take: limit,
      } : {}),
    });

    return regles.map(regle => this.formatResponse(regle));
  }

  // Récupérer une règle par son ID
  async findOne(id: string): Promise<ReglePretResponseDto> {
    const regle = await this.prisma.reglePret.findUnique({
      where: { id },
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
    });

    if (!regle) {
      throw new NotFoundException(`Règle de prêt avec l'ID ${id} non trouvée`);
    }

    return this.formatResponse(regle);
  }

  // Récupérer les règles par université
  async findByUniversiteId(universiteId: string): Promise<ReglePretResponseDto[]> {
    const regles = await this.prisma.reglePret.findMany({
      where: { universiteId },
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
      orderBy: {
        roleUtilisateur: 'asc',
      },
    });

    return regles.map(regle => this.formatResponse(regle));
  }

  // Récupérer une règle par université et rôle
  async findByUniversiteAndRole(universiteId: string, roleUtilisateur: RoleUser): Promise<ReglePretResponseDto> {
    const regle = await this.prisma.reglePret.findUnique({
      where: {
        universiteId_roleUtilisateur: {
          universiteId,
          roleUtilisateur,
        },
      },
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
    });

    if (!regle) {
      throw new NotFoundException(`Aucune règle de prêt trouvée pour le rôle ${roleUtilisateur} dans l'université ${universiteId}`);
    }

    return this.formatResponse(regle);
  }

  // Récupérer les règles actives
  async findActiveRegles(): Promise<ReglePretResponseDto[]> {
    const regles = await this.prisma.reglePret.findMany({
      where: { estActif: true },
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
      orderBy: {
        roleUtilisateur: 'asc',
      },
    });

    return regles.map(regle => this.formatResponse(regle));
  }

  // Récupérer les règles inactives
  async findInactiveRegles(): Promise<ReglePretResponseDto[]> {
    const regles = await this.prisma.reglePret.findMany({
      where: { estActif: false },
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
      orderBy: {
        roleUtilisateur: 'asc',
      },
    });

    return regles.map(regle => this.formatResponse(regle));
  }

  // Mettre à jour une règle de prêt
  async update(id: string, updateDto: UpdateReglePretDto): Promise<ReglePretResponseDto> {
    // Vérifier si la règle existe
    const existingRegle = await this.prisma.reglePret.findUnique({
      where: { id },
    });

    if (!existingRegle) {
      throw new NotFoundException(`Règle de prêt avec l'ID ${id} non trouvée`);
    }

    // Si on change le rôle, vérifier qu'il n'y a pas de conflit
    if (updateDto.roleUtilisateur && updateDto.roleUtilisateur !== existingRegle.roleUtilisateur) {
      const conflictRegle = await this.prisma.reglePret.findUnique({
        where: {
          universiteId_roleUtilisateur: {
            universiteId: existingRegle.universiteId,
            roleUtilisateur: updateDto.roleUtilisateur,
          },
        },
      });

      if (conflictRegle) {
        throw new ConflictException(`Une règle de prêt existe déjà pour le rôle ${updateDto.roleUtilisateur} dans cette université`);
      }
    }

    const regle = await this.prisma.reglePret.update({
      where: { id },
      data: updateDto,
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
    });

    return this.formatResponse(regle);
  }

  // Activer une règle
  async activate(id: string): Promise<ReglePretResponseDto> {
    return this.update(id, { estActif: true });
  }

  // Désactiver une règle
  async deactivate(id: string): Promise<ReglePretResponseDto> {
    return this.update(id, { estActif: false });
  }

  // Supprimer définitivement une règle
  async remove(id: string): Promise<void> {
    const regle = await this.prisma.reglePret.findUnique({
      where: { id },
    });

    if (!regle) {
      throw new NotFoundException(`Règle de prêt avec l'ID ${id} non trouvée`);
    }

    await this.prisma.reglePret.delete({
      where: { id },
    });
  }

  // Méthode utilitaire pour formater la réponse
  private formatResponse(regle: any): ReglePretResponseDto {
    return {
      id: regle.id,
      universiteId: regle.universiteId,
      roleUtilisateur: regle.roleUtilisateur,
      nombreMaxOuvrages: regle.nombreMaxOuvrages,
      dureeEmpruntJours: regle.dureeEmpruntJours,
      nbRenouvellements: regle.nbRenouvellements,
      penaliteRetardJours: regle.penaliteRetardJours,
      estActif: regle.estActif,
      createdAt: regle.createdAt,
      updatedAt: regle.updatedAt,
      universite: regle.universite ? {
        id: regle.universite.id,
        nom: regle.universite.nom,
      } : undefined,
    };
  }
}