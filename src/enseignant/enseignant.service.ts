import { Injectable } from '@nestjs/common';
import { CreateEnseignantDto } from './dto/create-enseignant.dto';
import { UpdateEnseignantDto } from './dto/update-enseignant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilisateursService } from 'src/users/utilisateurs.service';

@Injectable()
export class EnseignantService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly utilisateursService: UtilisateursService,
  ) {}
  async create(createEnseignantDto: CreateEnseignantDto) {
    const numeroEnseignant = this.generateNumeroEnseignant();
    const user = await this.utilisateursService.create({
      email: createEnseignantDto.email,
      motDePasse: 'MotDePasse123',
      nom: createEnseignantDto.nom,
      prenom: createEnseignantDto.prenom,
      image: createEnseignantDto.image,
      role: 'ENSEIGNANT',
      telephone: createEnseignantDto.telephone,
    });
    const enseignant =await this.prismaService.enseignant.create({
      data: {
        numeroEnseignant,
        dateNaissance: new Date(createEnseignantDto.dateNaissance),
        specialite: createEnseignantDto.specialite,
        user: {
          connect: { id: user.id },
        },
      },
    });
    const universiteId = await this.prismaService.universite.findFirst();
    return {
      ...enseignant,
      user: {
        ...user,
        role: 'ENSEIGNANT',
      },
      universite: universiteId,
    };

  }

  findAll(options: { 
  page?: number | string; 
  limit?: number | string; 
  search?: string } = {}) {
    const { page = 1, limit = 10, search = '' } = options;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    return this.prismaService.enseignant.findMany({
      skip,
      take,
      where: {
        user: {
          OR: [
            { nom: { contains: search } },
            { prenom: { contains: search } },
            { email: { contains: search } },
          ],
        },
      },
      include: {
        user: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.enseignant.findUnique({
      where: { id: id },
      include: {
        user: true,
      },
    });
  }

  update(id: string, updateEnseignantDto: UpdateEnseignantDto) {
    return this.prismaService.enseignant.update({
      where: { id },
      data: {
        ...updateEnseignantDto,
        dateNaissance: updateEnseignantDto.dateNaissance ? new Date(updateEnseignantDto.dateNaissance) : undefined,
      },
      include: {
        user: true,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.enseignant.delete({
      where: { id },
    });
  }

  //ressources d'un enseignant
  async findRessourcesByEnseignantId(enseignantId: string, options: { limit?: number; page?: number; search?: string } = {}) {
    const { limit = 10, page = 1, search = '' } = options;
    const skip = (page - 1) * limit;
    const take = limit;


   const result = await this.prismaService.ressource.findMany({
      skip,
      take,
      where: {
        auteurId: enseignantId,
        OR: [
          { titre: { contains: search } },
          { description: { contains: search } },
        ],
      },
      include: {
        favoris: true
      },
    });
    return {
      meta: {
        total: result.length,
        skip,
        take,
      },
      data: result
    }
  }

  private generateNumeroEnseignant(): string {
    const prefix = 'ENS';
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `${prefix}${randomNumber.toString().padStart(6, '0')}`;
  }
}
