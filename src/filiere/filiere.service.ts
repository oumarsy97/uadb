// src/filiere/filiere.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFiliereDto } from './dto/create-filiere.dto';
import { UpdateFiliereDto } from './dto/update-filiere.dto';
import { Filiere, Prisma } from 'generated/prisma';

@Injectable()
export class FiliereService {
  constructor(private prisma: PrismaService) {}

  async create(createFiliereDto: CreateFiliereDto): Promise<Filiere> {
    try {
      // Vérifier si le département existe
      const departementExists = await this.prisma.departement.findUnique({
        where: { id: createFiliereDto.departementId }
      });

      if (!departementExists) {
        throw new NotFoundException(`Département avec l'ID ${createFiliereDto.departementId} non trouvé`);
      }

      // Vérifier si une filière avec le même nom existe déjà dans ce département
      const existingFiliere = await this.prisma.filiere.findFirst({
        where: {
          nom: createFiliereDto.nom,
          departementId: createFiliereDto.departementId
        }
      });

      if (existingFiliere) {
        throw new ConflictException('Une filière avec ce nom existe déjà dans ce département');
      }

      return await this.prisma.filiere.create({
        data: createFiliereDto,
        include: {
          departement: {
            select: {
              id: true,
              nom: true,
              ufr: {
                select: {
                  id: true,
                  nom: true
                }
              }
            }
          }
        }
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Une filière avec ce nom existe déjà dans ce département');
        }
      }
      throw error;
    }
  }

  async findAll(departementId?: string, skip = 0, take = 10): Promise<Filiere[]> {
    return await this.prisma.filiere.findMany({
      where: departementId ? { departementId } : undefined,
      skip,
      take: Math.min(take, 100), // Limiter à 100 max
      include: {
        departement: {
          select: {
            id: true,
            nom: true,
            ufr: {
              select: {
                id: true,
                nom: true
              }
            }
          }
        }
      },
      orderBy: {
        nom: 'asc'
      }
    });
  }

  async findOne(id: string): Promise<Filiere> {
    const filiere = await this.prisma.filiere.findUnique({
      where: { id },
      include: {
        departement: {
          select: {
            id: true,
            nom: true,
            ufr: {
              select: {
                id: true,
                nom: true
              }
            }
          }
        }
      }
    });

    if (!filiere) {
      throw new NotFoundException(`Filière avec l'ID ${id} non trouvée`);
    }

    return filiere;
  }

  async update(id: string, updateFiliereDto: UpdateFiliereDto): Promise<Filiere> {
    try {
      // Vérifier si la filière existe
      await this.findOne(id);

      // Si departementId est fourni, vérifier si le département existe
      if (updateFiliereDto.departementId) {
        const departementExists = await this.prisma.departement.findUnique({
          where: { id: updateFiliereDto.departementId }
        });

        if (!departementExists) {
          throw new NotFoundException(`Département avec l'ID ${updateFiliereDto.departementId} non trouvé`);
        }
      }

      // Si le nom est modifié, vérifier l'unicité dans le département
      if (updateFiliereDto.nom) {
        const currentFiliere = await this.prisma.filiere.findUnique({
          where: { id }
        });

        if (!currentFiliere) {
          throw new NotFoundException(`Filière avec l'ID ${id} non trouvée`);
        }

        const departementIdToCheck = updateFiliereDto.departementId || currentFiliere.departementId;

        const existingFiliere = await this.prisma.filiere.findFirst({
          where: {
            nom: updateFiliereDto.nom,
            departementId: departementIdToCheck,
            NOT: { id } // Exclure la filière actuelle
          }
        });

        if (existingFiliere) {
          throw new ConflictException('Une filière avec ce nom existe déjà dans ce département');
        }
      }

      return await this.prisma.filiere.update({
        where: { id },
        data: updateFiliereDto,
        include: {
          departement: {
            select: {
              id: true,
              nom: true,
              ufr: {
                select: {
                  id: true,
                  nom: true
                }
              }
            }
          }
        }
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Une filière avec ce nom existe déjà dans ce département');
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`Filière avec l'ID ${id} non trouvée`);
        }
      }
      throw error;
    }
  }

  async remove(id: string): Promise<{ message: string }> {
    try {
      // Vérifier si la filière existe
      await this.findOne(id);

      await this.prisma.filiere.delete({
        where: { id }
      });

      return { message: 'Filière supprimée avec succès' };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Filière avec l'ID ${id} non trouvée`);
        }
      }
      throw error;
    }
  }

  async findByDepartement(departementId: string): Promise<Filiere[]> {
    // Vérifier si le département existe
    const departementExists = await this.prisma.departement.findUnique({
      where: { id: departementId }
    });

    if (!departementExists) {
      throw new NotFoundException(`Département avec l'ID ${departementId} non trouvé`);
    }

    return await this.prisma.filiere.findMany({
      where: { departementId },
      include: {
        departement: {
          select: {
            id: true,
            nom: true,
            ufr: {
              select: {
                id: true,
                nom: true
              }
            }
          }
        }
      },
      orderBy: {
        nom: 'asc'
      }
    });
  }

  async findByNom(nom: string): Promise<Filiere> {
    const filiere = await this.prisma.filiere.findFirst({
      where: { 
        nom: {
          equals: nom
        }
      },
      include: {
        departement: {
          select: {
            id: true,
            nom: true,
            ufr: {
              select: {
                id: true,
                nom: true
              }
            }
          }
        }
      }
    });

    if (!filiere) {
      throw new NotFoundException(`Filière avec le nom ${nom} non trouvée`);
    }

    return filiere;
  }

  async search(searchTerm: string): Promise<Filiere[]> {
    return await this.prisma.filiere.findMany({
      where: {
        OR: [
          {
            nom: {
              contains: searchTerm
            }
          },
          {
            description: {
              contains: searchTerm
            }
          }
        ]
      },
      include: {
        departement: {
          select: {
            id: true,
            nom: true,
            ufr: {
              select: {
                id: true,
                nom: true
              }
            }
          }
        }
      },
      orderBy: {
        nom: 'asc'
      }
    });
  }

  async count(departementId?: string): Promise<number> {
    return await this.prisma.filiere.count({
      where: departementId ? { departementId } : undefined
    });
  }
}