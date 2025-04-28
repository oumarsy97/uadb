import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';

@Injectable()
export class UtilisateursService {
  constructor(private prisma: PrismaService) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUtilisateurDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Cet email est déjà utilisé');
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(createUtilisateurDto.motDePasse, 10);

    // Créer l'utilisateur
    return this.prisma.user.create({
      data: {
        ...createUtilisateurDto,
        motDePasse: hashedPassword,
        dateInscription: new Date(),
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        image: true,
        role: true,
        departement: true,
        faculte: true,
        specialite: true,
        niveauEtudes: true,
        dateInscription: true,
        derniereConnexion: true,
        estActif: true,
        universite: true,
        // Exclure le mot de passe pour des raisons de sécurité
      },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        image: true,
        role: true,
        departement: true,
        faculte: true,
        specialite: true,
        niveauEtudes: true,
        dateInscription: true,
        derniereConnexion: true,
        estActif: true,
        universite: true,
        // Exclure le mot de passe
      },
    });

    if (!user) {
      throw new NotFoundException(`Utilisateur avec l'ID ${id} non trouvé`);
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`Utilisateur avec l'email ${email} non trouvé`);
    }

    return user;
  }

  async update(id: string, updateData: UpdateUtilisateurDto) {
    // Vérifier si l'utilisateur existe
    const existingUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Utilisateur avec l'ID ${id} non trouvé`);
    }

    // Si le mot de passe est mis à jour, le hasher
    if (updateData.motDePasse) {
      updateData.motDePasse = await bcrypt.hash(updateData.motDePasse, 10);
    }

    // Si l'email est mis à jour, vérifier qu'il n'est pas déjà utilisé
    if (updateData.email && updateData.email !== existingUser.email) {
      const emailExists = await this.prisma.user.findUnique({
        where: { email: updateData.email },
      });

      if (emailExists) {
        throw new ConflictException('Cet email est déjà utilisé');
      }
    }

    // Mettre à jour l'utilisateur
    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateData,
        derniereConnexion: updateData.hasOwnProperty('derniereConnexion') 
          ? updateData.derniereConnexion
          : undefined,
      },
    });
  }

  async remove(id: string) {
    // Vérifier si l'utilisateur existe
    const existingUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Utilisateur avec l'ID ${id} non trouvé`);
    }

    // Supprimer l'utilisateur
    return this.prisma.user.delete({
      where: { id },
    });
  }
}