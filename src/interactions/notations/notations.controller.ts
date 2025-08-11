import { Controller, Logger, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotationsService } from './notations.service';

interface CreateNotationPayload {
  token: string;
  ressourceId: string;
  note: number;
  universite: string;
  // Pour les utilisateurs externes
  externUserId?: string;
  universiteUser?: string;
}

interface GetNotationsByRessourcePayload {
  ressourceId: string;
  page?: number;
  limit?: number;
}

interface GetUserNotationsPayload {
  token: string;
  page?: number;
  limit?: number;
}

interface FindOneNotationPayload {
  id: string;
}

interface UpdateNotationPayload {
  token: string;
  id: string;
  note?: number;
}

interface DeleteNotationPayload {
  token: string;
  id: string;
}

interface GetStatsPayload {
  ressourceId: string;
}

@Controller()
export class NotationsController {
  private readonly logger = new Logger(NotationsController.name);
  
  constructor(
    private readonly notationService: NotationsService,
    private readonly jwtService: JwtService
  ) {}

  private extractUserIdFromToken(token: string): string {
    try {
      if (!token) {
        throw new Error('Token requis');
      }

      // Enlever le préfixe "Bearer " s'il existe
      const cleanToken = token.replace(/^Bearer\s+/, '');
      
      // Décoder le token
      const payload = this.jwtService.decode(cleanToken) as any;
      
      if (!payload || (!payload.sub && !payload.id && !payload.userId)) {
        throw new Error('Token invalide: ID utilisateur non trouvé');
      }
      
      // Retourner l'ID utilisateur (peut être dans sub, id, ou userId selon votre implémentation)
      return payload.sub || payload.id || payload.userId;
    } catch (error) {
      this.logger.error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
      throw new BadRequestException(`Token invalide: ${error.message}`);
    }
  }

  @MessagePattern('notation.create')
  async createNotation(@Payload() data: CreateNotationPayload) {
    this.logger.log(`Création d'une notation pour la ressource ${data.ressourceId}`);
    
    try {
      // Pour les utilisateurs internes (avec token)
      if (data.token) {
        const userId = this.extractUserIdFromToken(data.token);
        const result = await this.notationService.createNotation({
          userId,
          ressourceId: data.ressourceId,
          note: data.note,
          universite: data.universite
        });
        return result;
      }
      
      // Pour les utilisateurs externes (sans token mais avec externUserId et universiteUser)
      if (data.externUserId && data.universiteUser) {
        const result = await this.notationService.createNotation({
          externUserId: data.externUserId,
          universiteUser: data.universiteUser,
          ressourceId: data.ressourceId,
          note: data.note,
          universite: data.universite
        });
        return result;
      }

      throw new BadRequestException('Token ou informations utilisateur externe requis');

    } catch (error) {
      this.logger.error(`Erreur lors de la création de la notation: ${error.message}`);
      throw error;
    }
  }

  @MessagePattern('notation.getByRessourceId')
  async getNotationsByRessourceId(@Payload() data: GetNotationsByRessourcePayload) {
    this.logger.log(`Récupération des notations pour la ressource ${data.ressourceId}`);
    
    try {
      const result = await this.notationService.getNotationsByRessourceId(
        data.ressourceId,
        {
          page: data.page,
          limit: data.limit
        }
      );
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des notations: ${error.message}`);
      throw error;
    }
  }

  @MessagePattern('notation.getUserNotations')
  async getUserNotations(@Payload() data: GetUserNotationsPayload) {
    this.logger.log(`Récupération des notations de l'utilisateur`);
    
    try {
      const userId = this.extractUserIdFromToken(data.token);
      const result = await this.notationService.getUserNotations(userId, {
        page: data.page || 1,
        limit: data.limit || 10
      });
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des notations utilisateur: ${error.message}`);
      throw error;
    }
  }

  @MessagePattern('notation.findOne')
  async findOneNotation(@Payload() data: FindOneNotationPayload) {
    this.logger.log(`Récupération de la notation ${data.id}`);
    
    try {
      const result = await this.notationService.findOneNotation(data.id);
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de la notation: ${error.message}`);
      throw error;
    }
  }

  @MessagePattern('notation.update')
  async updateNotation(@Payload() data: UpdateNotationPayload) {
    this.logger.log(`Mise à jour de la notation ${data.id}`);
    
    try {
      const userId = this.extractUserIdFromToken(data.token);
      const result = await this.notationService.updateNotation(data.id, {
        note: data.note,
        userId // Pour vérifier que c'est bien l'utilisateur propriétaire
      });
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de la notation: ${error.message}`);
      throw error;
    }
  }

  @MessagePattern('notation.delete')
  async deleteNotation(@Payload() data: DeleteNotationPayload) {
    this.logger.log(`Suppression de la notation ${data.id}`);
    
    try {
      const userId = this.extractUserIdFromToken(data.token);
      const result = await this.notationService.deleteNotation(data.id, userId);
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la suppression de la notation: ${error.message}`);
      throw error;
    }
  }

  @MessagePattern('notation.getStats')
  async getNotationStats(@Payload() data: GetStatsPayload) {
    this.logger.log(`Récupération des statistiques pour la ressource ${data.ressourceId}`);
    
    try {
      const result = await this.notationService.getNotationStats(data.ressourceId);
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des statistiques: ${error.message}`);
      throw error;
    }
  }

  // Méthodes additionnelles qui pourraient être utiles

  @MessagePattern('notation.createExternal')
  async createExternalNotation(@Payload() data: {
    externUserId: string;
    universiteUser: string;
    ressourceId: string;
    note: number;
    universite: string;
  }) {
    this.logger.log(`Création d'une notation externe pour la ressource ${data.ressourceId}`);
    
    try {
      const result = await this.notationService.createNotation({
        externUserId: data.externUserId,
        universiteUser: data.universiteUser,
        ressourceId: data.ressourceId,
        note: data.note,
        universite: data.universite
      });
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la création de la notation externe: ${error.message}`);
      throw error;
    }
  }

  @MessagePattern('notation.getByRessource.paginated')
  async getNotationsByRessourcePaginated(@Payload() data: {
    ressourceId: string;
    page: number;
    limit: number;
  }) {
    this.logger.log(`Récupération paginée des notations pour la ressource ${data.ressourceId} - Page ${data.page}`);
    
    try {
      const result = await this.notationService.getNotationsByRessourceId(
        data.ressourceId,
        {
          page: data.page,
          limit: data.limit
        }
      );
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération paginée: ${error.message}`);
      throw error;
    }
  }

  // Méthode utilitaire pour valider les données
  private validateNotationData(data: any) {
    if (!data.ressourceId) {
      throw new BadRequestException('ID de ressource requis');
    }
    
    if (!data.note || data.note < 1 || data.note > 5) {
      throw new BadRequestException('La note doit être comprise entre 1 et 5');
    }
  }
}