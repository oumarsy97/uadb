import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs'; // Importez firstValueFrom
import { PrismaService } from '../prisma/prisma.service';
import { CreateUtilisateurDto } from 'src/users/dto/create-utilisateur.dto';

@Injectable()
export class UtilisateursService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('UNIVERSITE_SERVICE') private readonly universiteClient: ClientProxy,
  ) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const { universiteId } = createUtilisateurDto;

    // Vérification de l'existence de l'université via le microservice Universite
    const universiteExists = await firstValueFrom(
      this.universiteClient.send('findUniversiteById', universiteId),
    );

    if (!universiteExists) {
      throw new HttpException('L\'université spécifiée n\'existe pas.', HttpStatus.NOT_FOUND);
    }

    // Création de l'utilisateur
    return this.prisma.user.create({ 
      data: {
        nom: createUtilisateurDto.nom,
        prenom: createUtilisateurDto.prenom,
        email: createUtilisateurDto.email,
        motDePasse: createUtilisateurDto.motDePasse,
        role: createUtilisateurDto.role,
        departement: createUtilisateurDto.departement,
        faculte: createUtilisateurDto.faculte,
        specialite: createUtilisateurDto.specialite,
        niveauEtudes: createUtilisateurDto.niveauEtudes,
        dateInscription: new Date(),
        universiteId: createUtilisateurDto.universiteId
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: string, updateData: Partial<CreateUtilisateurDto>) {
    return this.prisma.user.update({
      where: { id },
      data: {
        nom: updateData.nom,
        prenom: updateData.prenom,
        email: updateData.email,
        motDePasse: updateData.motDePasse,
        role: updateData.role,
        departement: updateData.departement,
        faculte: updateData.faculte,
        specialite: updateData.specialite,
        niveauEtudes: updateData.niveauEtudes,
        universiteId: updateData.universiteId
      },
     
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  async updateDerniereConnexion(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { derniereConnexion: new Date() },
    });
  }
}