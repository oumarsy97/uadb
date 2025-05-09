import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateUtilisateurDto,
  LoginDataDto,
} from './dto/create-utilisateur.dto';

@Injectable()
export class UtilisateursService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const { email } = createUtilisateurDto;

    // Vérifier si l'email existe déjà
    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new HttpException('Cet email est déjà utilisé.', HttpStatus.CONFLICT);
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(createUtilisateurDto.motDePasse, 10);

    // Création de l'utilisateur
    return this.prisma.user.create({
      data: {
        nom: createUtilisateurDto.nom,
        prenom: createUtilisateurDto.prenom,
        email: createUtilisateurDto.email,
        motDePasse: hashedPassword,
        role: createUtilisateurDto.role,
        departement: createUtilisateurDto.departement,
        faculte: createUtilisateurDto.faculte,
        specialite: createUtilisateurDto.specialite,
        niveauEtudes: createUtilisateurDto.niveauEtudes,
        image: createUtilisateurDto.image,
        dateInscription: new Date(),
        universiteId: createUtilisateurDto.universiteId , // Gérer le cas où c'est optionnel
      },
    });
  }

  async login(loginData: LoginDataDto) {
    // Trouver l'utilisateur par email
    const user = await this.prisma.user.findUnique({
      where: { email: loginData.email },
    });

    // Vérifier si l'utilisateur existe
    if (!user) {
      throw new HttpException(
        'Email ou mot de passe incorrect.',
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(
      loginData.motDePasse,
      user.motDePasse,
    );
    if (!isPasswordValid) {
      throw new HttpException(
        'Email ou mot de passe incorrect.',
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Mettre à jour la dernière connexion
    await this.updateDerniereConnexion(user.id);

    // Générer le token JWT
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      universite: loginData.universite || null,
    };

    const token = this.jwtService.sign(payload);

    // Retourner les informations utilisateur et le token
    const { motDePasse, ...userData } = user; // On retire le mot de passe

    return {
      user: {
        id: userData.id,
        nom: userData.nom,
        prenom: userData.prenom,
        email: userData.email,
        role: userData.role,
        image: userData.image,
        universite: loginData.universite,
      },
      token,
    };
  }

  async logout(logoutData: LoginDataDto) {
    // Optionnel : logique pour invalider le token côté serveur
    // Peut être géré via une liste noire Redis / BDD
    return { message: 'Déconnexion réussie.' };
  }

  async findAll(options: { page?: number; limit?: number; search?: string } = {}) {
    const { page = 1, limit = 10, search = '' } = options;
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            { nom: { contains: search, lte: 'insensitive' } },
            { prenom: { contains: search, lte: 'insensitive' } },
            { email: { contains: search, lte: 'insensitive' } },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: +limit,
        include: { universite: true },
        orderBy: { dateInscription: 'desc' },
      }),
      this.prisma.user.count({ where }),
    ]);

    const sanitizedUsers = users.map(({ motDePasse, ...user }) => user); // Retirer les mots de passes

    return {
      data: sanitizedUsers,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { universite: true },
    });

    if (!user) {
      throw new HttpException('Utilisateur non trouvé.', HttpStatus.NOT_FOUND);
    }

    const { motDePasse, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { universite: true },
    });

    if (!user) {
      throw new HttpException('Utilisateur non trouvé.', HttpStatus.NOT_FOUND);
    }

    const { motDePasse, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async update(id: string, updateData: Partial<CreateUtilisateurDto>) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException('Utilisateur non trouvé.', HttpStatus.NOT_FOUND);
    }

    let hashedPassword;
    if (updateData.motDePasse) {
      hashedPassword = await bcrypt.hash(updateData.motDePasse, 10);
    }

    const dataToUpdate = {
      ...(updateData.nom && { nom: updateData.nom }),
      ...(updateData.prenom && { prenom: updateData.prenom }),
      ...(updateData.email && { email: updateData.email }),
      ...(hashedPassword && { motDePasse: hashedPassword }),
      ...(updateData.role && { role: updateData.role }),
      ...(updateData.departement && { departement: updateData.departement }),
      ...(updateData.faculte && { faculte: updateData.faculte }),
      ...(updateData.specialite && { specialite: updateData.specialite }),
      ...(updateData.niveauEtudes && { niveauEtudes: updateData.niveauEtudes }),
      ...(updateData.image && { image: updateData.image }),
      ...(updateData.universiteId !== undefined && {
        universiteId: updateData.universiteId,
      }),
    };

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: dataToUpdate,
      include: { universite: true },
    });

    const { motDePasse, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException('Utilisateur non trouvé.', HttpStatus.NOT_FOUND);
    }

    await this.prisma.user.delete({ where: { id } });
    return { message: 'Utilisateur supprimé avec succès.' };
  }

  async updateDerniereConnexion(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { derniereConnexion: new Date() },
    });
  }
}