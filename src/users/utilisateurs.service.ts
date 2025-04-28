// src/utilisateurs/utilisateurs.service.ts
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prism.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import * as bcrypt from 'bcrypt';
import { RoleUser } from 'generated/prisma';

@Injectable()
export class UtilisateursService {
  constructor(private prisma: PrismaService) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    // Vérifier si l'email existe déjà
    const utilisateurExistant = await this.prisma.utilisateur.findUnique({
      where: { email: createUtilisateurDto.email },
    });

    if (utilisateurExistant) {
      throw new ConflictException(`Un utilisateur avec l'email ${createUtilisateurDto.email} existe déjà`);
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(createUtilisateurDto.motDePasse, 10);

    // Création de l'utilisateur
    const utilisateur = await this.prisma.utilisateur.create({
      data: {
        email: createUtilisateurDto.email,
        motDePasse: hashedPassword,
        nom: createUtilisateurDto.nom,
        prenom: createUtilisateurDto.prenom,
        role: createUtilisateurDto.role,
        departement: createUtilisateurDto.departement,
        faculte: createUtilisateurDto.faculte,
        specialite: createUtilisateurDto.specialite,
        niveauEtudes: createUtilisateurDto.niveauEtudes,
      },
    });

    // Exclure le mot de passe de la réponse
    const { motDePasse, ...result } = utilisateur;
    return result;
  }

  async findAll() {
    return this.prisma.utilisateur.findMany({
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        role: true,
        departement: true,
        faculte: true,
        specialite: true,
        niveauEtudes: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: number) {
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        role: true,
        departement: true,
        faculte: true,
        specialite: true,
        niveauEtudes: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!utilisateur) {
      throw new NotFoundException(`Utilisateur avec ID ${id} non trouvé`);
    }

    return utilisateur;
  }

  async findByEmail(email: string) {
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { email },
    });

    if (!utilisateur) {
      throw new NotFoundException(`Utilisateur avec email ${email} non trouvé`);
    }

    return utilisateur;
  }

  async update(id: number, updateData: Partial<CreateUtilisateurDto>) {
    // Vérifier si l'utilisateur existe
    await this.findOne(id);
    
    // Préparer les données de mise à jour
    const data: any = { ...updateData };
    
    // Hacher le mot de passe si fourni
    if (updateData.motDePasse) {
      data.motDePasse = await bcrypt.hash(updateData.motDePasse, 10);
    }

    // Mettre à jour l'utilisateur
    const updatedUtilisateur = await this.prisma.utilisateur.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        role: true,
        departement: true,
        faculte: true,
        specialite: true,
        niveauEtudes: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updatedUtilisateur;
  }

  async remove(id: number) {
    // Vérifier si l'utilisateur existe
    await this.findOne(id);
    
    // Supprimer l'utilisateur
    await this.prisma.utilisateur.delete({
      where: { id },
    });

    return { message: `Utilisateur avec ID ${id} supprimé avec succès` };
  }
}