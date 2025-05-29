import { Injectable } from '@nestjs/common';
import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateConventionDto } from './dto/update-convention.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConventionService {
  // Inject any necessary services here, e.g., PrismaService
  constructor(private readonly prisma: PrismaService) {}
  async create(createConventionDto: CreateConventionDto) {
     // Vérifier que les universités sont différentes
    if (createConventionDto.universiteId1 === createConventionDto.universiteId2) {
      throw new Error('Les universités doivent être différentes');
    }
    // Vérifier qu'il n'existe pas déjà une convention entre ces universités
    const existingConvention = this.prisma.conventionInteruniversitaire.findFirst({
      where: {
        OR: [
          {
            universiteId1: createConventionDto.universiteId1,
            universiteId2: createConventionDto.universiteId2,
          },
          {
            universiteId1: createConventionDto.universiteId2,
            universiteId2: createConventionDto.universiteId1,
          },
        ],
      },
    });

    if (await existingConvention) {
      throw new Error('Une convention existe déjà entre ces universités');
    }

    return this.prisma.conventionInteruniversitaire.create({
      data: {
        universiteId1: createConventionDto.universiteId1,
        universiteId2: createConventionDto.universiteId2,
        dateDebut: createConventionDto.dateDebut || new Date(),
        dateFin: createConventionDto.dateFin,
        typeConvention: createConventionDto.typeConvention,
        detailsConvention: createConventionDto.detailsConvention,
        estActive: true, // Par défaut, la convention est active
      },
    });
  }

  findAll( page?: number, limit?: number, search?: string) {
    // Implémentation de la pagination et de la recherche
    const where = search
      ? {
          OR: [
            { universite1: { nom: { contains: search, mode: 'insensitive' } } },
            { universite2: { nom: { contains: search, mode: 'insensitive' } } },
          ],
        }
      : {};
    const skip = ((page || 1) - 1) * (limit || 10); // Default limit to 10 if undefined
    return this.prisma.conventionInteruniversitaire.findMany({
      where,
      skip,
      take: limit,
      include: {
        universite1: true, // Inclure les détails de la première université
        universite2: true, // Inclure les détails de la deuxième université
      },
    });
  }

  findOne(id: string) {
    return this.prisma.conventionInteruniversitaire.findUnique({
      where: { id: id },
      include: {
        universite1: true, // Inclure les détails de la première université
        universite2: true, // Inclure les détails de la deuxième université
      },
    });
  }

  update(id: string, updateConventionDto: UpdateConventionDto) {
    return this.prisma.conventionInteruniversitaire.update({
      where: { id: id },
      data: {
        dateFin: updateConventionDto?.dateFin,
        typeConvention: updateConventionDto?.typeConvention,
        detailsConvention: updateConventionDto?.detailsConvention,
      },
    });
  }

  remove(id: string) {
    return this.prisma.conventionInteruniversitaire.delete({
      where: { id: id },
    });
  }
  async findActiveConventions() {
    return this.prisma.conventionInteruniversitaire.findMany({
      where: { estActive: true },
      include: {
        universite1: true,
        universite2: true,
      },
    });
  }
  async findInactiveConventions() {
    return this.prisma.conventionInteruniversitaire.findMany({
      where: { estActive: false },
      include: {
        universite1: true,
        universite2: true,
      },
    });
  }
  async activateConvention(id: string) {
    return this.prisma.conventionInteruniversitaire.update({
      where: { id: id },
      data: { estActive: true },
    });
  }
  async deactivateConvention(id: string) {
    return this.prisma.conventionInteruniversitaire.update({
      where: { id: id },
      data: { estActive: false },
    });
  }
  async findConventionsByUniversite(universiteId: string) {
    return this.prisma.conventionInteruniversitaire.findMany({
      where: {
        OR: [
          { universiteId1: universiteId },
          { universiteId2: universiteId },
        ],
      },
      include: {
        universite1: true,
        universite2: true,
      },
    });
  }
}
