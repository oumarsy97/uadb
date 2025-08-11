import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategorieDto, UpdateCategorieDto } from './dto/create-categorie.dto';
import { Categorie } from './entities/categorie.entity';

@Injectable()
export class CategorieService {
  constructor(private prisma: PrismaService) {}

  async create(createCategorieDto: CreateCategorieDto): Promise<Categorie> {
    try {
      return await this.prisma.categorie.create({
        data: {
          libelle: createCategorieDto.libelle,
          description: createCategorieDto.description,
        },
        include: {
          ressources: true,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Une catégorie avec ce libellé existe déjà');
      }
      throw error;
    }
  }

  async findAll(skip?: number, take?: number): Promise<Categorie[]> {
    return await this.prisma.categorie.findMany({
      skip: skip || 0,
      take: take || 10,
      include: {
        ressources: true,
      },
      orderBy: {
        dateCreation: 'desc',
      },
    });
  }

  async findOne(id: string): Promise<Categorie> {
    const categorie = await this.prisma.categorie.findUnique({
      where: { id },
      include: {
        ressources: true,
      },
    });

    if (!categorie) {
      throw new NotFoundException(`Catégorie avec l'ID ${id} non trouvée`);
    }

    return categorie;
  }

  async findByLibelle(libelle: string): Promise<Categorie> {
    const categorie = await this.prisma.categorie.findUnique({
      where: { libelle },
      include: {
        ressources: true,
      },
    });

    if (!categorie) {
      throw new NotFoundException(`Catégorie avec le libellé ${libelle} non trouvée`);
    }

    return categorie;
  }

  async update(id: string, updateCategorieDto: UpdateCategorieDto): Promise<Categorie> {
    await this.findOne(id); // Vérifier que la catégorie existe

    try {
      return await this.prisma.categorie.update({
        where: { id },
        data: updateCategorieDto,
        include: {
          ressources: true,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Une catégorie avec ce libellé existe déjà');
      }
      throw error;
    }
  }

  async remove(id: string): Promise<Categorie> {
    await this.findOne(id); // Vérifier que la catégorie existe

    return await this.prisma.categorie.delete({
      where: { id },
      include: {
        ressources: true,
      },
    });
  }

  async count(): Promise<number> {
    return await this.prisma.categorie.count();
  }

  async search(searchTerm: string): Promise<Categorie[]> {
    return await this.prisma.categorie.findMany({
      where: {
        OR: [
          { libelle: { contains: searchTerm } },
          { description: { contains: searchTerm } },
          
        ],
      },
      include: {
        ressources: true,
      },
      orderBy: {
        dateCreation: 'desc',
      },
    });
  }
}