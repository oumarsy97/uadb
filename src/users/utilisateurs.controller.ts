import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto, LoginDataDto } from './dto/create-utilisateur.dto';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService,
    private readonly jwtService: JwtService
  ) {}
/**
   * Extrait l'ID utilisateur depuis le token JWT
   * @param token - Le token JWT
   * @returns L'ID de l'utilisateur
   */
  private extractUserIdFromToken(token: string): string {
    try {
      // Enlever le préfixe "Bearer " s'il existe
      const cleanToken = token.replace(/^Bearer\s+/, '');
      
      // Décoder le token
      const payload = this.jwtService.decode(cleanToken) as any;
      
      if (!payload || !payload.sub && !payload.id && !payload.userId) {
        throw new Error('Token invalide: ID utilisateur non trouvé');
      }
      
      // Retourner l'ID utilisateur (peut être dans sub, id, ou userId selon votre implémentation)
      return payload.sub || payload.id || payload.userId;
    } catch (error) {
      throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
    }
  }

  @MessagePattern('createUtilisateur')
  async create(@Payload() createUtilisateurDto: CreateUtilisateurDto) {
    return this.utilisateursService.create(createUtilisateurDto);
  }

  @MessagePattern('loginUtilisateur')
  async login(@Payload() loginData: LoginDataDto) {
    try {
      if (!loginData.email || !loginData.motDePasse) {
        throw new Error('Email and password are required');
      }
      // Call the login method from the service
      return await this.utilisateursService.login(loginData);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('logoutUtilisateur')
  async logout(@Payload() logoutData: LoginDataDto) {
    return this.utilisateursService.logout(logoutData);
  }

  @MessagePattern('findAllUtilisateurs')
  async findAll(@Payload() options: { page?: number; limit?: number; search?: string }) {
    return this.utilisateursService.findAll(options);
  }

  @MessagePattern('findUtilisateurById')
  async findOne(@Payload() id: string) {
    return this.utilisateursService.findOne(id);
  }

  @MessagePattern('findUtilisateurByEmail')
  async findByEmail(@Payload() email: string) {
    return this.utilisateursService.findByEmail(email);
  }

  @MessagePattern('updateUtilisateur')
  async update(@Payload() data: { id: string; updateData: Partial<CreateUtilisateurDto> }) {
    return this.utilisateursService.update(data.id, data.updateData);
  }

  @MessagePattern('removeUtilisateur')
  async remove(@Payload() id: string) {
    return this.utilisateursService.remove(id);
  }

  @MessagePattern('updateDerniereConnexion')
  async updateDerniereConnexion(@Payload() data: { id: string }) {
    return this.utilisateursService.updateDerniereConnexion(data.id);
  }
  @MessagePattern('updateMotDePasse')
  async updateMotDePasse(@Payload() data: { token: string; updateData: { motDePasse: string; confirmationMotDePasse: string } }) {
    const userId = this.extractUserIdFromToken(data.token);
    return this.utilisateursService.updateMotDePasse(userId, data.updateData);
  }
}