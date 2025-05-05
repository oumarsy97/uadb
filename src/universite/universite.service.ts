import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUniversiteDto, UpdateUniversiteDto } from "../universite/dto/universite.dto";

@Injectable()
export class UniversiteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUniversiteDto: CreateUniversiteDto) {
    return this.prisma.universite.create({ data: createUniversiteDto });
  }

  async findAll(page = 1, limit = 10, search?: string) {
    const skip = (page - 1) * limit;
    const where = search ? { nom: { contains: search, mode: 'insensitive' } } : {};
    return this.prisma.universite.findMany({
      where,
      skip,
      take: limit,
    });
  }

  async findOne(id: string) {
    return this.prisma.universite.findUnique({ where: { id } });
  }

  async update(id: string, updateUniversiteDto: Partial<UpdateUniversiteDto>) {
    return this.prisma.universite.update({ where: { id }, data: updateUniversiteDto });
  }

  async remove(id: string) {
    return this.prisma.universite.delete({ where: { id } });
  }

  async getStatistics(id: string) {
    // Implémentez ici la logique pour récupérer les statistiques d'une université
    return this.prisma.universite.findUnique({
      where: { id },
      include: { ressources: true, users: true },
    });
  }

  async toggleStatus(id: string) {
    const universite = await this.prisma.universite.findUnique({ where: { id } });
    if (!universite) throw new Error('Université non trouvée');
    return this.prisma.universite.update({
      where: { id },
      data: { estActive: !universite.estActive },
    });
  }

  async getTopUniversities(limit?: number) {
    return this.prisma.universite.findMany({
      orderBy: { ressources: { _count: 'desc' } },
      take:  10,
    });
  }
}