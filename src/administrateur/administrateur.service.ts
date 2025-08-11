import { Injectable } from '@nestjs/common';
import { CreateAdministrateurDto } from './dto/create-administrateur.dto';
import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUtilisateurDto } from 'src/users/dto/create-utilisateur.dto';
import { UtilisateursService } from 'src/users/utilisateurs.service';

@Injectable()
export class AdministrateurService {
  constructor(private readonly prismaService: PrismaService,
              private readonly utilisateursService: UtilisateursService
  ) {}
  async create(createAdministrateurDto: CreateUtilisateurDto) {
    const numeroAdmin = this.generateNumero();
    const user = await this.utilisateursService.create({
      ...createAdministrateurDto,
      role: 'ADMIN',
    });
    const administrateur = await this.prismaService.administrateur.create({
      data: {
        numeroAdmin,
        user: {
          connect: { id: user.id },
        },
      },
      include: {
        user: true,
      },
    });
    //recuperer l'id de luniversite
    const universiteId = await this.prismaService.universite.findFirst();
    return {
      ...administrateur,
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
    return this.prismaService.administrateur.findMany({
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

  async findOne(id: string) {
    return this.prismaService.administrateur.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  update(id: string, updateAdministrateurDto: UpdateAdministrateurDto) {
    return this.prismaService.administrateur.update({
      where: { id },
      data: updateAdministrateurDto,
    });
  }

  remove(id: string) {
    return this.prismaService.administrateur.delete({
      where: { id },
    });

  }

  private generateNumero() {
    const prefix = 'ADM';
    const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `${prefix}${randomPart}`;
  }
}
