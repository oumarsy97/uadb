import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../meservices/mail/email.service'; // Import du service email
import {
  CreateUtilisateurDto,
  LoginDataDto,
} from './dto/create-utilisateur.dto';

@Injectable()
export class UtilisateursService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService, // Injection du service email
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
    const newUser = await this.prisma.user.create({
      data: {
        nom: createUtilisateurDto.nom,
        prenom: createUtilisateurDto.prenom,
        email: createUtilisateurDto.email,
        motDePasse: hashedPassword,
        role: createUtilisateurDto.role,
        image: createUtilisateurDto.image,
      },
    });

    // Envoi de l'email de bienvenue
    try {
      await this.emailService.sendWelcomeEmail(
        newUser.email,
        `${newUser.prenom} ${newUser.nom}`
      );
    } catch (error) {
      // Log l'erreur mais ne fait pas échouer la création de l'utilisateur
      console.error('Erreur lors de l\'envoi de l\'email de bienvenue:', error);
    }

    // Retourner l'utilisateur sans le mot de passe
    const { motDePasse, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  async login(loginData: LoginDataDto) {
    console.log('Login attempt with data:', loginData);
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

  // Nouvelle méthode pour initier la réinitialisation de mot de passe
 
  // Nouvelle méthode pour envoyer une notification à un utilisateur
  async sendNotificationToUser(userId: string, title: string, message: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new HttpException('Utilisateur non trouvé.', HttpStatus.NOT_FOUND);
    }

    try {
      await this.emailService.sendNotificationEmail(user.email, title, message);
      return { message: 'Notification envoyée avec succès.' };
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la notification:', error);
      throw new HttpException(
        'Erreur lors de l\'envoi de la notification.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Nouvelle méthode pour envoyer des notifications en masse
  async sendBulkNotification(userIds: string[], title: string, message: string) {
    const users = await this.prisma.user.findMany({
      where: { id: { in: userIds } },
      select: { email: true, nom: true, prenom: true },
    });

    if (users.length === 0) {
      throw new HttpException('Aucun utilisateur trouvé.', HttpStatus.NOT_FOUND);
    }

    const emails = users.map(user => ({
      to: user.email,
      subject: title,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">${title}</h1>
          <div style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #007bff;">
            <p>${message}</p>
          </div>
          <p>Cordialement,<br>L'équipe</p>
        </div>
      `,
      text: `${title}\n\n${message}`,
    }));

    try {
      const results = await this.emailService.sendBulkEmails(emails);
      return {
        message: 'Notifications envoyées.',
        results: {
          total: users.length,
          success: results.success,
          failed: results.failed,
          errors: results.errors,
        },
      };
    } catch (error) {
      console.error('Erreur lors de l\'envoi des notifications en masse:', error);
      throw new HttpException(
        'Erreur lors de l\'envoi des notifications.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(options: { page?: number; limit?: number; search?: string } = {}) {
    const { page = 1, limit = 10, search = '' } = options;
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            { nom: { contains: search, mode: 'insensitive' } },
            { prenom: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: +limit,
      }),
      this.prisma.user.count({ where }),
    ]);

    const sanitizedUsers = users.map(({ motDePasse,  ...user }) => user);

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
    });

    if (!user) {
      throw new HttpException('Utilisateur non trouvé.', HttpStatus.NOT_FOUND);
    }

    const { motDePasse,  ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new HttpException('Utilisateur non trouvé.', HttpStatus.NOT_FOUND);
    }

    const { motDePasse,  ...userWithoutPassword } = user;
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
      ...(updateData.image && { image: updateData.image }),
    };

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: dataToUpdate,
    });

    // Envoyer une notification si l'email a été modifié
    if (updateData.email && updateData.email !== user.email) {
      try {
        await this.emailService.sendNotificationEmail(
          updateData.email,
          'Email modifié',
          'Votre adresse email a été modifiée avec succès.'
        );
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la notification de modification d\'email:', error);
      }
    }

    const { motDePasse,  ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException('Utilisateur non trouvé.', HttpStatus.NOT_FOUND);
    }

    await this.prisma.user.delete({ where: { id } });

    // Envoyer un email de confirmation de suppression
    try {
      await this.emailService.sendNotificationEmail(
        user.email,
        'Compte supprimé',
        'Votre compte a été supprimé avec succès. Nous sommes désolés de vous voir partir.'
      );
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email de suppression:', error);
    }

    return { message: 'Utilisateur supprimé avec succès.' };
  }

  async updateDerniereConnexion(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { derniereConnexion: new Date() },
    });
  }
}