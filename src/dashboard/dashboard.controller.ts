import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DashboardService, DashboardData } from './dashboard.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller()
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
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
      
      if (!payload || (!payload.sub && !payload.id && !payload.userId)) {
        throw new Error('Token invalide: ID utilisateur non trouvé');
      }
      
      // Retourner l'ID utilisateur (peut être dans sub, id, ou userId selon votre implémentation)
      return payload.sub || payload.id || payload.userId;
    } catch (error) {
      throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
    }
  }

  /**
   * Récupère le dashboard complet pour l'utilisateur connecté
   */
  @MessagePattern('getDashboard')
  async getDashboard(@Payload() data: { token: string }): Promise<DashboardData | { error: boolean; message: string; statusCode: number }> {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération dashboard pour utilisateur:', userId);
      
      return await this.dashboardService.getDashboard(userId);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère uniquement les statistiques de l'utilisateur
   */
  @MessagePattern('getDashboardStats')
  async getDashboardStats(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération statistiques pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      return {
        userId,
        role: dashboard.user.role,
        statistiques: dashboard.statistiques
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les activités récentes de l'utilisateur
   */
  @MessagePattern('getDashboardActivities')
  async getDashboardActivities(@Payload() data: { token: string; limit?: number }) {
    try {
      const { token, limit = 10 } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération activités pour utilisateur:', userId, 'limite:', limit);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      return {
        userId,
        role: dashboard.user.role,
        activitesRecentes: dashboard.activitesRecentes?.slice(0, limit) || []
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les notifications de l'utilisateur
   */
  @MessagePattern('getDashboardNotifications')
  async getDashboardNotifications(@Payload() data: { token: string; limit?: number }) {
    try {
      const { token, limit = 10 } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération notifications pour utilisateur:', userId, 'limite:', limit);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      return {
        userId,
        notifications: dashboard.notifications?.slice(0, limit) || []
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les recommandations pour un utilisateur (étudiants et enseignants)
   */
  @MessagePattern('getDashboardRecommendations')
  async getDashboardRecommendations(@Payload() data: { token: string; limit?: number }) {
    try {
      const { token, limit = 5 } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération recommandations pour utilisateur:', userId, 'limite:', limit);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      return {
        userId,
        role: dashboard.user.role,
        recommandations: dashboard.recommandations?.slice(0, limit) || []
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les informations de profil de l'utilisateur
   */
  @MessagePattern('getDashboardProfile')
  async getDashboardProfile(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération profil pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      return {
        user: dashboard.user
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les ressources récentes pour les enseignants
   */
  @MessagePattern('getDashboardRessourcesRecentes')
  async getDashboardRessourcesRecentes(@Payload() data: { token: string; limit?: number }) {
    try {
      const { token, limit = 5 } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération ressources récentes pour utilisateur:', userId, 'limite:', limit);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est enseignant
      if (dashboard.user.role !== 'ENSEIGNANT') {
        return {
          error: true,
          message: 'Accès réservé aux enseignants',
          statusCode: 403
        };
      }
      
      return {
        userId,
        ressourcesRecentes: dashboard.ressourcesRecentes?.slice(0, limit) || []
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les tâches urgentes pour les bibliothécaires
   */
  @MessagePattern('getDashboardTachesUrgentes')
  async getDashboardTachesUrgentes(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération tâches urgentes pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est bibliothécaire
      if (dashboard.user.role !== 'BIBLIOTHECAIRE') {
        return {
          error: true,
          message: 'Accès réservé aux bibliothécaires',
          statusCode: 403
        };
      }
      
      return {
        userId,
        tachesUrgentes: dashboard.tachesUrgentes || []
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les alertes système pour les administrateurs
   */
  @MessagePattern('getDashboardAlertesSysteme')
  async getDashboardAlertesSysteme(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération alertes système pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est administrateur
      if (dashboard.user.role !== 'ADMIN') {
        return {
          error: true,
          message: 'Accès réservé aux administrateurs',
          statusCode: 403
        };
      }
      
      return {
        userId,
        alertesSysteme: dashboard.alertesSysteme || []
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les tendances de la plateforme pour les administrateurs
   */
  @MessagePattern('getDashboardTendances')
  async getDashboardTendances(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération tendances pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est administrateur
      if (dashboard.user.role !== 'ADMIN') {
        return {
          error: true,
          message: 'Accès réservé aux administrateurs',
          statusCode: 403
        };
      }
      
      return {
        userId,
        tendances: dashboard.tendances || []
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les rapports mensuels pour les bibliothécaires
   */
  @MessagePattern('getDashboardRapportsMensuels')
  async getDashboardRapportsMensuels(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération rapports mensuels pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est bibliothécaire
      if (dashboard.user.role !== 'BIBLIOTHECAIRE') {
        return {
          error: true,
          message: 'Accès réservé aux bibliothécaires',
          statusCode: 403
        };
      }
      
      return {
        userId,
        rapportsMensuels: dashboard.rapportsMensuels || []
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les règles d'emprunt pour un étudiant
   */
  @MessagePattern('getDashboardReglesEmprunt')
  async getDashboardReglesEmprunt(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération règles emprunt pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est étudiant
      if (dashboard.user.role !== 'ETUDIANT') {
        return {
          error: true,
          message: 'Accès réservé aux étudiants',
          statusCode: 403
        };
      }
      
      return {
        userId,
        reglesEmprunt: dashboard.reglesEmprunt || null
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère un résumé léger du dashboard (pour une sidebar ou header)
   */
  @MessagePattern('getDashboardSummary')
  async getDashboardSummary(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération résumé dashboard pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Créer un résumé selon le rôle
      let summary: any = {
        user: dashboard.user,
        notificationsCount: dashboard.notifications?.length || 0,
      };

      switch (dashboard.user.role) {
        case 'ETUDIANT':
          summary = {
            ...summary,
            empruntsActifs: dashboard.statistiques?.empruntsActifs || 0,
            prochainRetour: dashboard.statistiques?.prochainRetour,
            penalitesActives: dashboard.statistiques?.penalitesActives || 0,
          };
          break;

        case 'ENSEIGNANT':
          summary = {
            ...summary,
            ressourcesPubliees: dashboard.statistiques?.ressourcesPubliees || 0,
            notificationsPendantes: dashboard.statistiques?.notificationsPendantes || 0,
          };
          break;

        case 'BIBLIOTHECAIRE':
          summary = {
            ...summary,
            empruntsAujourdhui: dashboard.statistiques?.empruntsAujourdhui || 0,
            empruntsEnRetard: dashboard.statistiques?.empruntsEnRetard || 0,
            retoursPrevusAujourdhui: dashboard.statistiques?.retoursPrevusAujourdhui || 0,
          };
          break;

        case 'ADMIN':
          summary = {
            ...summary,
            utilisateursActifs: dashboard.statistiques?.utilisateursActifs || 0,
            alertesCount: dashboard.alertesSysteme?.length || 0,
            empruntsEnCours: dashboard.statistiques?.empruntsEnCours || 0,
          };
          break;
      }
      
      return summary;
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Marque les notifications comme lues
   */
  @MessagePattern('markNotificationsAsRead')
  async markNotificationsAsRead(@Payload() data: { token: string; notificationIds?: string[] }) {
    try {
      const { token, notificationIds } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Marquage notifications comme lues pour utilisateur:', userId);
      
      // Si des IDs spécifiques sont fournis, les marquer
      if (notificationIds && notificationIds.length > 0) {
        await this.prisma.notification.updateMany({
          where: {
            id: { in: notificationIds },
            userId: userId, // S'assurer que l'utilisateur peut seulement modifier ses notifications
          },
          data: {
            estLue: true,
          },
        });
      } else {
        // Sinon, marquer toutes les notifications non lues de l'utilisateur
        await this.prisma.notification.updateMany({
          where: {
            userId: userId,
            estLue: false,
          },
          data: {
            estLue: true,
          },
        });
      }
      
      return {
        success: true,
        message: 'Notifications marquées comme lues',
        userId
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les données spécifiques aux étudiants (emprunts, favoris, etc.)
   */
  @MessagePattern('getEtudiantDashboardData')
  async getEtudiantDashboardData(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération données étudiant pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est étudiant
      if (dashboard.user.role !== 'ETUDIANT') {
        return {
          error: true,
          message: 'Accès réservé aux étudiants',
          statusCode: 403
        };
      }
      
      return {
        userId,
        statistiques: dashboard.statistiques,
        activitesRecentes: dashboard.activitesRecentes,
        recommandations: dashboard.recommandations,
        reglesEmprunt: dashboard.reglesEmprunt,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les données spécifiques aux enseignants
   */
  @MessagePattern('getEnseignantDashboardData')
  async getEnseignantDashboardData(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération données enseignant pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est enseignant
      if (dashboard.user.role !== 'ENSEIGNANT') {
        return {
          error: true,
          message: 'Accès réservé aux enseignants',
          statusCode: 403
        };
      }
      
      return {
        userId,
        statistiques: dashboard.statistiques,
        activitesRecentes: dashboard.activitesRecentes,
        recommandations: dashboard.recommandations,
        ressourcesRecentes: dashboard.ressourcesRecentes,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les données spécifiques aux bibliothécaires
   */
  @MessagePattern('getBibliothecaireDashboardData')
  async getBibliothecaireDashboardData(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération données bibliothécaire pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est bibliothécaire
      if (dashboard.user.role !== 'BIBLIOTHECAIRE') {
        return {
          error: true,
          message: 'Accès réservé aux bibliothécaires',
          statusCode: 403
        };
      }
      
      return {
        userId,
        statistiques: dashboard.statistiques,
        activitesRecentes: dashboard.activitesRecentes,
        tachesUrgentes: dashboard.tachesUrgentes,
        rapportsMensuels: dashboard.rapportsMensuels,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Récupère les données spécifiques aux administrateurs
   */
  @MessagePattern('getAdminDashboardData')
  async getAdminDashboardData(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Récupération données admin pour utilisateur:', userId);
      
      const dashboard = await this.dashboardService.getDashboard(userId);
      
      // Vérifier si l'utilisateur est administrateur
      if (dashboard.user.role !== 'ADMIN') {
        return {
          error: true,
          message: 'Accès réservé aux administrateurs',
          statusCode: 403
        };
      }
      
      return {
        userId,
        statistiques: dashboard.statistiques,
        activitesRecentes: dashboard.activitesRecentes,
        alertesSysteme: dashboard.alertesSysteme,
        tendances: dashboard.tendances,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Actualise le dashboard (force un reload des données)
   */
  @MessagePattern('refreshDashboard')
  async refreshDashboard(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Actualisation dashboard pour utilisateur:', userId);
      
      // Ici vous pourriez ajouter une logique de cache invalidation si nécessaire
      
      return await this.dashboardService.getDashboard(userId);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  /**
   * Valide le token sans retourner de données (pour vérification d'auth)
   */
  @MessagePattern('validateDashboardToken')
  async validateToken(@Payload() data: { token: string }) {
    try {
      const { token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Validation token pour utilisateur:', userId);
      
      // Vérifier que l'utilisateur existe
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          role: true,
          estActif: true,
        },
      });

      if (!user || !user.estActif) {
        return {
          error: true,
          message: 'Utilisateur non trouvé ou inactif',
          statusCode: 401
        };
      }
      
      return {
        valid: true,
        userId,
        role: user.role,
        email: user.email
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 401
      };
    }
  }
}