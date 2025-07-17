import { Injectable } from '@nestjs/common';
import { CreateBibliothecaireDto } from './dto/create-bibliothecaire.dto';
import { UpdateBibliothecaireDto } from './dto/update-bibliothecaire.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilisateursService } from 'src/users/utilisateurs.service';

@Injectable()
export class BibliothecaireService {
  constructor(
    private readonly utilisateursService: UtilisateursService,
    private readonly prismaService: PrismaService,
  ) {}
  async create(createBibliothecaireDto: CreateBibliothecaireDto) {
    const numeroBibliothecaire = this.generateNumero();
    const user = await this.utilisateursService.create({
      ...createBibliothecaireDto,
      role: 'BIBLIOTHECAIRE',
    });
    const bibliothecaire = await this.prismaService.bibliothecaire.create({
      data: {
        numeroBibliothecaire,
        user: {
          connect: { id: user.id },
        },
      },
    });
    //recuperer l'id de luniversite
    const universiteId = await this.prismaService.universite.findFirst();
    return {
      ...bibliothecaire,
      user: {
        ...user,
        role: 'BIBLIOTHECAIRE',
      },
      universite: universiteId,
    };
  }

  findAll( options: { page?: number; limit?: number; search?: string } = {}) {
    const { page = 1, limit = 10, search = '' } = options;
    return this.prismaService.bibliothecaire.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        user: {
          nom: {
            contains: search,
          },
          prenom: {
            contains: search,
          },
          email: {
            contains: search,
          },
        },
      },
      include: {
        user: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.bibliothecaire.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, updateBibliothecaireDto: UpdateBibliothecaireDto) {
    return this.prismaService.bibliothecaire.update({
      where: { id },
      data: {
        ...updateBibliothecaireDto,
      },
      include: {
        user: true,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.bibliothecaire.delete({
      where: { id },
    });
  }
  private generateNumero(): string {
    const prefix = 'BIB';
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `${prefix}${randomNumber.toString().padStart(6, '0')}`;
  }
}
