// service/politique-bibliotheque.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePolitiqueBibliothequeDto, PolitiqueBibliothequeResponseDto, UpdatePolitiqueBibliothequeDto } from './dto/create-politique-bibliotheque.dto';

@Injectable()
export class PolitiqueBibliothequeService {
  constructor(private readonly prisma: PrismaService) {}

  // Créer une nouvelle politique de bibliothèque
  async create(createDto: CreatePolitiqueBibliothequeDto): Promise<PolitiqueBibliothequeResponseDto> {
    // Récupérer le premier ID d'université
    const premiereUniversite = await this.prisma.universite.findFirst({
      orderBy: {
        createdAt: 'asc', // Le premier créé
      },
    });

    if (!premiereUniversite) {
      throw new NotFoundException(`Aucune université trouvée dans le système`);
    }

    // Vérifier s'il existe déjà une politique active pour cette université
    // const existingPolitique = await this.prisma.politiqueBibliotheque.findFirst({
    //   where: {
    //     universiteId: premiereUniversite.id,
    //     estActive: true,
    //   },
    // });

    // if (existingPolitique) {
    //   throw new ConflictException(`Une politique de bibliothèque active existe déjà pour cette université`);
    // }

    const politique = await this.prisma.politiqueBibliotheque.create({
      data: {
        universiteId: premiereUniversite.id,
        politiqueRetour: createDto.politiqueRetour,
        politiquePerte: createDto.politiquePerte,
        penaliteRetard: createDto.penaliteRetard,
        estActive: createDto.estActive ?? true,
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

    return this.formatResponse(politique);
  }

  // Récupérer toutes les politiques de bibliothèque
  async findAll(): Promise<PolitiqueBibliothequeResponseDto[]> {
    const politiques = await this.prisma.politiqueBibliotheque.findMany({
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
      orderBy: {
        dateMiseAJour: 'desc',
      },
    });

    return politiques.map(politique => this.formatResponse(politique));
  }

  // Récupérer une politique par son ID
  async findOne(id: string): Promise<PolitiqueBibliothequeResponseDto> {
    const politique = await this.prisma.politiqueBibliotheque.findUnique({
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

    if (!politique) {
      throw new NotFoundException(`Politique de bibliothèque avec l'ID ${id} non trouvée`);
    }

    return this.formatResponse(politique);
  }

  // Récupérer la politique de bibliothèque par université (le premier ID)
  async findByUniversiteId(universiteId: string): Promise<PolitiqueBibliothequeResponseDto> {
    // Récupérer la première politique active pour cette université
    const politique = await this.prisma.politiqueBibliotheque.findFirst({
      where: {
        universiteId,
        estActive: true,
      },
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc', // Le premier créé (1er ID)
      },
    });

    if (!politique) {
      throw new NotFoundException(`Aucune politique de bibliothèque active trouvée pour l'université ${universiteId}`);
    }

    return this.formatResponse(politique);
  }

  // Récupérer toutes les politiques d'une université
  async findAllByUniversiteId(universiteId: string): Promise<PolitiqueBibliothequeResponseDto[]> {
    const politiques = await this.prisma.politiqueBibliotheque.findMany({
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
        createdAt: 'asc',
      },
    });

    return politiques.map(politique => this.formatResponse(politique));
  }

  // Mettre à jour une politique de bibliothèque
  async update(id: string, updateDto: UpdatePolitiqueBibliothequeDto): Promise<PolitiqueBibliothequeResponseDto> {
    // Vérifier si la politique existe
    const existingPolitique = await this.prisma.politiqueBibliotheque.findUnique({
      where: { id },
    });

    if (!existingPolitique) {
      throw new NotFoundException(`Politique de bibliothèque avec l'ID ${id} non trouvée`);
    }

    const politique = await this.prisma.politiqueBibliotheque.update({
      where: { id },
      data: {
        ...updateDto,
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

    return this.formatResponse(politique);
  }

  // Désactiver une politique (soft delete)
  async deactivate(id: string): Promise<PolitiqueBibliothequeResponseDto> {
    const politique = await this.prisma.politiqueBibliotheque.update({
      where: { id },
      data: {
        estActive: false,
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

    if (!politique) {
      throw new NotFoundException(`Politique de bibliothèque avec l'ID ${id} non trouvée`);
    }

    return this.formatResponse(politique);
  }

  // Supprimer définitivement une politique
  async remove(id: string): Promise<void> {
    const politique = await this.prisma.politiqueBibliotheque.findUnique({
      where: { id },
    });

    if (!politique) {
      throw new NotFoundException(`Politique de bibliothèque avec l'ID ${id} non trouvée`);
    }

    await this.prisma.politiqueBibliotheque.delete({
      where: { id },
    });
  }

  // Méthode utilitaire pour formater la réponse
  private formatResponse(politique: any): PolitiqueBibliothequeResponseDto {
    return {
      id: politique.id,
      universiteId: politique.universiteId,
      politiqueRetour: politique.politiqueRetour,
      politiquePerte: politique.politiquePerte,
      penaliteRetard: politique.penaliteRetard,
      estActive: politique.estActive,
      dateMiseAJour: politique.dateMiseAJour,
      createdAt: politique.createdAt,
      updatedAt: politique.updatedAt,
      universite: politique.universite ? {
        id: politique.universite.id,
        nom: politique.universite.nom,
      } : undefined,
    };
  }
}