// src/departement/departement.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Departement, Prisma } from 'generated/prisma';

@Injectable()
export class DepartementService {
  constructor(private prisma: PrismaService) {}

  async create(createDepartementDto: CreateDepartementDto): Promise<Departement> {
    try {
      // Vérifier si l'UFR existe
      const ufrExists = await this.prisma.ufr.findUnique({
        where: { id: createDepartementDto.ufrId }
      });

      if (!ufrExists) {
        throw new NotFoundException(`UFR avec l'ID ${createDepartementDto.ufrId} non trouvée`);
      }

      return await this.prisma.departement.create({
        data: createDepartementDto,
        include: {
          ufr: true,
          filieres: true
        }
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Un département avec ce nom existe déjà dans cette UFR');
        }
      }
      throw error;
    }
  }

  async findAll(ufrId?: string): Promise<Departement[]> {
    return await this.prisma.departement.findMany({
      where: ufrId ? { ufrId } : undefined,
      include: {
        ufr: {
          select: {
            id: true,
            nom: true
          }
        },
        filieres: {
          select: {
            id: true,
            nom: true
          }
        }
      },
      orderBy: {
        nom: 'asc'
      }
    });
  }

  async findOne(id: string): Promise<Departement> {
    const departement = await this.prisma.departement.findUnique({
      where: { id },
      include: {
        ufr: {
          select: {
            id: true,
            nom: true
          }
        },
        filieres: {
          select: {
            id: true,
            nom: true
          }
        }
      }
    });

    if (!departement) {
      throw new NotFoundException(`Département avec l'ID ${id} non trouvé`);
    }

    return departement;
  }

  async update(id: string, updateDepartementDto: UpdateDepartementDto): Promise<Departement> {
    try {
      // Vérifier si le département existe
      await this.findOne(id);

      // Si ufrId est fourni, vérifier si l'UFR existe
      if (updateDepartementDto.ufrId) {
        const ufrExists = await this.prisma.ufr.findUnique({
          where: { id: updateDepartementDto.ufrId }
        });

        if (!ufrExists) {
          throw new NotFoundException(`UFR avec l'ID ${updateDepartementDto.ufrId} non trouvée`);
        }
      }

      return await this.prisma.departement.update({
        where: { id },
        data: updateDepartementDto,
        include: {
          ufr: true,
          filieres: true
        }
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Un département avec ce nom existe déjà dans cette UFR');
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`Département avec l'ID ${id} non trouvé`);
        }
      }
      throw error;
    }
  }

  async remove(id: string): Promise<{ message: string }> {
    try {
      // Vérifier si le département existe
      await this.findOne(id);

      // Vérifier s'il y a des filières associées
      const filieresCount = await this.prisma.filiere.count({
        where: { departementId: id }
      });

      if (filieresCount > 0) {
        throw new ConflictException(
          `Impossible de supprimer le département. ${filieresCount} filière(s) y sont associées.`
        );
      }

      await this.prisma.departement.delete({
        where: { id }
      });

      return { message: 'Département supprimé avec succès' };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Département avec l'ID ${id} non trouvé`);
        }
      }
      throw error;
    }
  }

  async findByUfr(ufrId: string): Promise<Departement[]> {
    // Vérifier si l'UFR existe
    const ufrExists = await this.prisma.ufr.findUnique({
      where: { id: ufrId }
    });

    if (!ufrExists) {
      throw new NotFoundException(`UFR avec l'ID ${ufrId} non trouvée`);
    }

    return await this.prisma.departement.findMany({
      where: { ufrId },
      include: {
        ufr: {
          select: {
            id: true,
            nom: true
          }
        },
        filieres: {
          select: {
            id: true,
            nom: true
          }
        }
      },
      orderBy: {
        nom: 'asc'
      }
    });
  }

  async findByNom(nom: string): Promise<Departement> {
    const departement = await this.prisma.departement.findFirst({
      where: { 
        nom: {
          equals: nom
        }
      },
      include: {
        ufr: {
          select: {
            id: true,
            nom: true
          }
        },
        filieres: {
          select: {
            id: true,
            nom: true
          }
        }
      }
    });

    if (!departement) {
      throw new NotFoundException(`Département avec le nom ${nom} non trouvé`);
    }

    return departement;
  }

  async search(searchTerm: string): Promise<Departement[]> {
    return await this.prisma.departement.findMany({
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
        ufr: {
          select: {
            id: true,
            nom: true
          }
        },
        filieres: {
          select: {
            id: true,
            nom: true
          }
        }
      },
      orderBy: {
        nom: 'asc'
      }
    });
  }

  async count(ufrId?: string): Promise<number> {
    return await this.prisma.departement.count({
      where: ufrId ? { ufrId } : undefined
    });
  }
}