import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Ufr } from 'generated/prisma';
import { CreateUfrDto } from './dto/create-ufr.dto';
import { UpdateUfrDto } from './dto/update-ufr.dto';


@Injectable()
export class UfrService {
  constructor(private prisma: PrismaService) {}

  // Créer une UFR
  async create(createUfrDto: CreateUfrDto): Promise<Ufr> {
    try {
      // Vérifier si l'université existe
      const universite = await this.prisma.universite.findUnique({
        where: { id: createUfrDto.universiteId }
      });

      if (!universite) {
        throw new NotFoundException(`Université avec l'ID ${createUfrDto.universiteId} non trouvée`);
      }

      // Créer l'UFR
      return await this.prisma.ufr.create({
        data: {
          nom: createUfrDto.nom,
          description: createUfrDto.description,
          universiteId: createUfrDto.universiteId,
        },
        include: {
          universite: true,
          departements: true,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la création de l\'UFR');
    }
  }

  // Récupérer toutes les UFR
  async findAll(page: number = 1, limit: number = 10): Promise<{
    data: Ufr[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    const skip = (page - 1) * limit;
    
    const [data, total] = await Promise.all([
      this.prisma.ufr.findMany({
        skip,
        take: limit,
        include: {
          universite: {
            select: {
              id: true,
              nom: true,
            },
          },
          departements: {
            select: {
              id: true,
              nom: true,
            },
          },
        },
        orderBy: {
          nom: 'asc',
        },
      }),
      this.prisma.ufr.count(),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  // Récupérer une UFR par ID
  async findOne(id: string): Promise<Ufr> {
    const ufr = await this.prisma.ufr.findUnique({
      where: { id },
      include: {
        universite: true,
        departements: {
          include: {
            filieres: {
              select: {
                id: true,
                nom: true,
              },
            },
          },
        },
      },
    });

    if (!ufr) {
      throw new NotFoundException(`UFR avec l'ID ${id} non trouvée`);
    }

    return ufr;
  }

  // Récupérer les UFR par université
  async findByUniversite(universiteId: string): Promise<Ufr[]> {
    // Vérifier si l'université existe
    const universite = await this.prisma.universite.findUnique({
      where: { id: universiteId }
    });

    if (!universite) {
      throw new NotFoundException(`Université avec l'ID ${universiteId} non trouvée`);
    }

    return await this.prisma.ufr.findMany({
      where: { universiteId },
      include: {
        departements: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
      orderBy: {
        nom: 'asc',
      },
    });
  }

  // Mettre à jour une UFR
  async update(id: string, updateUfrDto: UpdateUfrDto): Promise<Ufr> {
    try {
      // Vérifier si l'UFR existe
      const existingUfr = await this.prisma.ufr.findUnique({
        where: { id }
      });

      if (!existingUfr) {
        throw new NotFoundException(`UFR avec l'ID ${id} non trouvée`);
      }

      // Si on change d'université, vérifier qu'elle existe
      if (updateUfrDto.universiteId && updateUfrDto.universiteId !== existingUfr.universiteId) {
        const universite = await this.prisma.universite.findUnique({
          where: { id: updateUfrDto.universiteId }
        });

        if (!universite) {
          throw new NotFoundException(`Université avec l'ID ${updateUfrDto.universiteId} non trouvée`);
        }
      }

      return await this.prisma.ufr.update({
        where: { id },
        data: updateUfrDto,
        include: {
          universite: true,
          departements: true,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la mise à jour de l\'UFR');
    }
  }

  // Supprimer une UFR
  async remove(id: string): Promise<void> {
    try {
      // Vérifier si l'UFR existe
      const ufr = await this.prisma.ufr.findUnique({
        where: { id },
        include: {
          departements: true,
        },
      });

      if (!ufr) {
        throw new NotFoundException(`UFR avec l'ID ${id} non trouvée`);
      }

      // Vérifier s'il y a des départements associés
      if (ufr.departements.length > 0) {
        throw new BadRequestException(
          `Impossible de supprimer l'UFR. Elle contient ${ufr.departements.length} département(s). Supprimez d'abord les départements.`
        );
      }

      await this.prisma.ufr.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la suppression de l\'UFR');
    }
  }

  // Rechercher des UFR par nom
  async search(query: string): Promise<Ufr[]> {
    return await this.prisma.ufr.findMany({
      where: {
        OR: [
          {
            nom: {
              contains: query,
            },
          },
          {
            description: {
              contains: query,
            },
          },
        ],
      },
      include: {
        universite: {
          select: {
            id: true,
            nom: true,
          },
        },
        departements: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
      orderBy: {
        nom: 'asc',
      },
    });
  }

  // Statistiques sur les UFR
  async getStats(): Promise<{
    totalUfr: number;
    ufrParUniversite: Array<{
      universite: string;
      count: number;
    }>;
  }> {
    const [totalUfr, ufrParUniversiteRaw, universites] = await Promise.all([
      this.prisma.ufr.count(),
      this.prisma.ufr.groupBy({
        by: ['universiteId'],
        _count: {
          id: true,
        },
      }),
      this.prisma.universite.findMany({
        select: {
          id: true,
          nom: true,
        },
      }),
    ]);

    const universiteMap = new Map(universites.map(u => [u.id, u.nom]));

    return {
      totalUfr,
      ufrParUniversite: ufrParUniversiteRaw.map(item => ({
        universite: universiteMap.get(item.universiteId) || 'Inconnu',
        count: item._count.id,
      })),
    };
  }
}