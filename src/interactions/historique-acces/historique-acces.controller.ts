import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HistoriqueAccesService } from './historique-acces.service';
import { TypeAcces, HistoriqueAcces } from 'generated/prisma';
import { JwtService } from '@nestjs/jwt';

// DTOs pour les requêtes
interface EnregistrerAccesDto {
    userId: string;
    ressourceId: string;
    typeacces: TypeAcces;
    universiteRess: string;
}

interface GetHistoriqueUtilisateurDto {
    userId: string;
    limit?: number;
}

interface GetHistoriqueRessourceDto {
    ressourceId: string;
    isExternal?: boolean;
    limit?: number;
}

interface CompterAccesDto {
    ressourceId: string;
    isExternal?: boolean;
    typeAcces?: TypeAcces;
}

interface GetAccesRecentsDto {
    limit?: number;
    token?: string;
    where?: any;
}

@Controller()
export class HistoriqueAccesController {
    constructor(
        private readonly historiqueAccesService: HistoriqueAccesService,
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

    /**
     * Enregistre l'accès à une ressource
     */
    @MessagePattern('enregistrerAcces')
    async enregistrerAcces(@Payload() data: { enregistrerAccesDto: EnregistrerAccesDto; token: string }) {
        try {
            const { enregistrerAccesDto, token } = data;
            
            // Extraire l'ID utilisateur depuis le token
            const userId = this.extractUserIdFromToken(token);
            
            
            // Utiliser l'ID utilisateur du token ou celui fourni dans le DTO
            const finalUserId = enregistrerAccesDto.userId || userId;
            
            return await this.historiqueAccesService.enregistrerAcces(
                finalUserId,
                enregistrerAccesDto.ressourceId,
                enregistrerAccesDto.typeacces,
                enregistrerAccesDto.universiteRess
            );
        } catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }

    /**
     * Récupère l'historique d'accès d'un utilisateur
     */
    @MessagePattern('getHistoriqueUtilisateur')
    async getHistoriqueUtilisateur(@Payload() data: { historiqueDto: GetHistoriqueUtilisateurDto; token: string }) {
        try {
            const { historiqueDto, token } = data;
            
            // Extraire l'ID utilisateur depuis le token
            const userId = this.extractUserIdFromToken(token);
            
            
            // Utiliser l'ID utilisateur du token ou celui fourni dans le DTO
            const finalUserId = historiqueDto.userId || userId;
            const limit = historiqueDto.limit || 50;
            
            return await this.historiqueAccesService.getHistoriqueUtilisateur(finalUserId, limit);
        } catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }

    /**
     * Récupère l'historique d'accès pour une ressource spécifique
     */
    @MessagePattern('getHistoriqueRessource')
    async getHistoriqueRessource(@Payload() data: { historiqueRessourceDto: GetHistoriqueRessourceDto; token?: string }) {
        try {
            const { historiqueRessourceDto, token } = data;
            
            if (token) {
                const userId = this.extractUserIdFromToken(token);
            }
            
            const { ressourceId, isExternal = false, limit = 50 } = historiqueRessourceDto;
            
            return await this.historiqueAccesService.getHistoriqueRessource(
                ressourceId,
                isExternal,
                limit
            );
        } catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }

    /**
     * Compte le nombre d'accès pour une ressource
     */
    @MessagePattern('compterAcces')
    async compterAcces(@Payload() data: { compterAccesDto: CompterAccesDto; token?: string }) {
        try {
            const { compterAccesDto, token } = data;
            
            if (token) {
                const userId = this.extractUserIdFromToken(token);
            }
            
            const { ressourceId, isExternal = false, typeAcces } = compterAccesDto;
            
            return await this.historiqueAccesService.compterAcces(
                ressourceId,
                isExternal,
                typeAcces
            );
        } catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }

    /**
     * Récupère les statistiques d'accès pour un utilisateur
     */
    @MessagePattern('getStatistiquesUtilisateur')
    async getStatistiquesUtilisateur(@Payload() data: { userId?: string; token: string }) {
        try {
            const { userId, token } = data;
            
            // Extraire l'ID utilisateur depuis le token
            const tokenUserId = this.extractUserIdFromToken(token);
            
            
            // Utiliser l'ID utilisateur du token ou celui fourni
            const finalUserId = userId || tokenUserId;
            
            // Récupérer l'historique complet pour calculer les statistiques
            const historique = await this.historiqueAccesService.getHistoriqueUtilisateur(finalUserId, 1000);
            
            // Calculer les statistiques
            const stats = {
                totalAcces: historique.length,
                ressourcesInternes: historique.filter(h => h.ressourceId).length,
                ressourcesExternes: historique.filter(h => h.externRessourceId).length,
                typesAcces: historique.reduce((acc, h) => {
                    acc[h.typeAcces] = (acc[h.typeAcces] || 0) + 1;
                    return acc;
                }, {} as Record<TypeAcces, number>),
                universites: historique.reduce((acc, h) => {
                    acc[h.universiteRess] = (acc[h.universiteRess] || 0) + 1;
                    return acc;
                }, {} as Record<string, number>)
            };
            
            return stats;
        } catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }

}