import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { CreateEmpruntDto, CreateEmpruntExterneDto, ReturnEmpruntDto, ExtendEmpruntDto, GetEmpruntsExternesDto } from './dto/create-emprunte.dto';
import { EmprunteService } from './emprunte.service';
import { StatutEmprunt } from 'generated/prisma';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class EmprunteController {
  private readonly logger = new Logger(EmprunteController.name);

  constructor(
    private readonly empruntService: EmprunteService,
    private readonly jwtService: JwtService
  ) {}

  private extractUserIdFromToken(token: string): string {
    try {
      const cleanToken = token.replace(/^Bearer\s+/, '');
      const payload = this.jwtService.decode(cleanToken) as any;
      
      if (!payload || (!payload.sub && !payload.id && !payload.userId)) {
        throw new Error('Token invalide: ID utilisateur non trouvé');
      }
      
      return payload.sub || payload.id || payload.userId;
    } catch (error) {
      throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
    }
  }

  

  // ===== EMPRUNTS UTILISATEURS CONNECTÉS =====

  @MessagePattern('emprunt.user.current.history')
  async getCurrentUserHistory(@Payload() data: {
    token: string;
    page?: number;
    limit?: number;
  }) {
    this.logger.log('Getting history for current user');
    
    try {
      const userId = this.extractUserIdFromToken(data.token);
      this.logger.log(`Getting history for authenticated user: ${userId}`);
      
      const result = await this.empruntService.getUserEmpruntHistory(
        userId,
        data.page,
        data.limit
      );
      
      return {
        success: true,
        data: result.data,
        meta: result.meta,
        userId: userId
      };
    } catch (error) {
      this.logger.error(`Error getting current user history: ${error.message}`, error.stack);
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  @MessagePattern('emprunt.user.current.active')
  async getCurrentUserActiveEmprunts(@Payload() data: {
    token: string;
    page?: number;
    limit?: number;
  }) {
    this.logger.log('Getting active emprunts for current user');
    
    try {
      const userId = this.extractUserIdFromToken(data.token);
      this.logger.log(`Getting active emprunts for authenticated user: ${userId}`);
      
      const result = await this.empruntService.getEmprunts({
        userId: userId,
        statut: StatutEmprunt.EN_COURS,
        page: data.page,
        limit: data.limit
      });
      
      return {
        success: true,
        data: result.data,
        meta: result.meta,
        userId: userId
      };
    } catch (error) {
      this.logger.error(`Error getting current user active emprunts: ${error.message}`, error.stack);
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  // ===== GESTION DES EMPRUNTS INTERNES =====

  @MessagePattern('emprunt.create')
  async createEmprunt(@Payload() data: CreateEmpruntDto) {
    console.log(`Received createEmprunt request: ${JSON.stringify(data)}`);
    this.logger.log(`Creating emprunt for user: ${data.empreunteurId} with exemplaires: ${data.exemplaireIds.join(', ')}`);
    
    try {
      const emprunt = await this.empruntService.createEmprunt(data);
      this.logger.log(`Emprunt created: ${emprunt.id}`);
      
      return {
        success: true,
        data: emprunt,
        message: 'Emprunt créé avec succès'
      };
    } catch (error) {
      this.logger.error(`Error creating emprunt: ${error.message}`, error.stack);
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  // ===== GESTION DES EMPRUNTS EXTERNES =====

  @MessagePattern('emprunt.externe.create')
  async createEmpruntExterne(@Payload() data: CreateEmpruntExterneDto, @Ctx() context: RmqContext) {
    this.logger.log(`Creating external emprunt for user: ${data.externUserId} from: ${data.universiteEmprunteur}`);
    
    try {
      const emprunt = await this.empruntService.createEmpruntExterne(data);
      this.logger.log(`External emprunt created: ${emprunt.id}`);
      
      
      return {
        success: true,
        data: emprunt,
        message: 'Emprunt externe créé avec succès'
      };
    } catch (error) {
      this.logger.error(`Error creating external emprunt: ${error.message}`, error.stack);
      
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }


  // ===== GESTION COMMUNES DES EMPRUNTS =====

  @MessagePattern('emprunt.get')
  async getEmprunt(@Payload() data: { id: string }) {
    this.logger.log(`Getting emprunt: ${data.id}`);
    
    try {
      const emprunt = await this.empruntService.getEmpruntById(data.id);
      
      return {
        success: true,
        data: emprunt
      };
    } catch (error) {
      this.logger.error(`Error getting emprunt: ${error.message}`, error.stack);
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  @MessagePattern('emprunt.list')
  async getEmprunts(@Payload() data: {
    userId?: string;
    statut?: StatutEmprunt;
    universiteEmprunteur?: string;
    page?: number;
    limit?: number;
    search?: string;
    includeExternal?: boolean; // Nouveau paramètre
  }) {
    this.logger.log('Listing emprunts with filters');
    
    try {
      const result = await this.empruntService.getEmprunts(data);
      
      return {
        success: true,
        data: result.data,
        meta: result.meta
      };
    } catch (error) {
      this.logger.error(`Error listing emprunts: ${error.message}`, error.stack);
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  @MessagePattern('emprunt.return')
  async returnExemplaires(@Payload() data: ReturnEmpruntDto) {
    this.logger.log(`Returning exemplaires for emprunt: ${data.empruntId}`);
    
    try {
      const result = await this.empruntService.returnExemplaires(data);
      this.logger.log(`Exemplaires returned for emprunt: ${result.id}`);
      
      return {
        success: true,
        data: result,
        message: 'Exemplaires retournés avec succès',
       // penalites: result.penalites || null // Inclure les pénalités s'il y en a
      };
    } catch (error) {
      this.logger.error(`Error returning exemplaires: ${error.message}`, error.stack);
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  @MessagePattern('emprunt.extend')
  async extendEmprunt(@Payload() data: ExtendEmpruntDto, @Ctx() context: RmqContext) {
    this.logger.log(`Extending emprunt: ${data.empruntId}`);
    
    try {
      const emprunt = await this.empruntService.extendEmprunt(data);
      this.logger.log(`Emprunt extended: ${emprunt.id}`);
      
      
      return {
        success: true,
        data: emprunt,
        message: 'Emprunt prolongé avec succès'
      };
    } catch (error) {
      this.logger.error(`Error extending emprunt: ${error.message}`, error.stack);
      
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  // ===== RECHERCHES SPÉCIFIQUES =====

  @MessagePattern('emprunt.retards')
  async getEmpruntsEnRetard(@Payload() data: {
    includeExternal?: boolean;
  }, @Ctx() context: RmqContext) {
    this.logger.log('Getting emprunts en retard');
    
    try {
      const emprunts = await this.empruntService.getEmpruntsEnRetard();
      
      // Filtrer par type si demandé
      let filteredEmprunts = emprunts;
      if (data.includeExternal === false) {
        filteredEmprunts = emprunts.filter(e => e.universiteEmprunteur === 'LOCALE');
      } else if (data.includeExternal === true) {
        filteredEmprunts = emprunts.filter(e => e.universiteEmprunteur !== 'LOCALE');
      }
      
      
      return {
        success: true,
        data: filteredEmprunts,
        count: filteredEmprunts.length
      };
    } catch (error) {
      this.logger.error(`Error getting emprunts en retard: ${error.message}`, error.stack);
      
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  @MessagePattern('emprunt.user.list')
  async getUserEmprunts(@Payload() data: {
    userId: string;
    statut?: StatutEmprunt;
    page?: number;
    limit?: number;
    externUserId?: string;
  }) {
    this.logger.log(`Getting emprunts for user: ${data.userId} ${
      data.externUserId
    }`);
    
    try {
      const result = await this.empruntService.getMesEmprunts({
        userId: data.userId,
        statut: data.statut,
        page: data.page,
        limit: data.limit,
        externUserId: data.externUserId
      });
      
      return {
        success: true,
        data: result.data,
        meta: result.meta
      };
    } catch (error) {
      this.logger.error(`Error getting user emprunts: ${error.message}`, error.stack);
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  @MessagePattern('emprunt.user.history')
  async getUserHistory(@Payload() data: {
    userId: string;
    page?: number;
    limit?: number;
  }, @Ctx() context: RmqContext) {
    this.logger.log(`Getting history for user: ${data.userId}`);
    
    try {
      const result = await this.empruntService.getUserEmpruntHistory(
        data.userId,
        data.page,
        data.limit
      );
      
      
      return {
        success: true,
        data: result.data,
        meta: result.meta
      };
    } catch (error) {
      this.logger.error(`Error getting user history: ${error.message}`, error.stack);
      
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  // ===== STATISTIQUES =====

  @MessagePattern('emprunt.stats')
  async getEmpruntStats(@Payload() data: {}, @Ctx() context: RmqContext) {
    this.logger.log('Getting emprunt statistics');
    
    try {
      const stats = await this.empruntService.getEmpruntStats();
      
      
      return {
        success: true,
        data: stats
      };
    } catch (error) {
      this.logger.error(`Error getting emprunt stats: ${error.message}`, error.stack);
      
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  // ===== MAINTENANCE =====

  @MessagePattern('emprunt.mark.retard')
  async markEmpruntsEnRetard(@Payload() data: {}, @Ctx() context: RmqContext) {
    this.logger.log('Marking emprunts en retard');
    
    try {
      const result = await this.empruntService.markEmpruntsEnRetard();
      
      
      return {
        success: true,
        data: { count: result.count },
        message: `${result.count} emprunts marqués en retard`
      };
    } catch (error) {
      this.logger.error(`Error marking emprunts en retard: ${error.message}`, error.stack);
      
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  @MessagePattern('emprunt.check.availability')
  async checkExemplaireAvailability(@Payload() data: {
    exemplaireIds: string[];
  }, @Ctx() context: RmqContext) {
    this.logger.log(`Checking availability for exemplaires: ${data.exemplaireIds.join(', ')}`);
    
    try {
      const exemplaires = await this.empruntService['prisma'].exemplairePhysique.findMany({
        where: {
          id: { in: data.exemplaireIds }
        },
        select: {
          id: true,
          etat: true,
          nombreDisponible: true,
        }
      });
      
      const availability = exemplaires.map(ex => ({
        id: ex.id,
        etat: ex.etat,
        nombreDisponible: ex.nombreDisponible,
        peutEtreEmprunte: ex.etat !== 'PERDU' && ex.nombreDisponible > 0
      }));
      
      
      return {
        success: true,
        data: availability
      };
    } catch (error) {
      this.logger.error(`Error checking availability: ${error.message}`, error.stack);
      
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  // ===== GESTION DES ÉVÉNEMENTS =====

  @EventPattern('user.suspended')
  async handleUserSuspended(@Payload() data: {
    userId: string;
    reason: string;
    suspendedUntil: Date;
  }) {
    this.logger.log(`User suspended: ${data.userId}, reason: ${data.reason}`);
    
    try {
      // Optionnel: Bloquer les nouveaux emprunts ou envoyer des notifications
      this.logger.log(`Handled user suspension for: ${data.userId}`);
    } catch (error) {
      this.logger.error(`Error handling user suspension: ${error.message}`, error.stack);
    }
  }

  @EventPattern('external.user.blocked')
  async handleExternalUserBlocked(@Payload() data: {
    externUserId: string;
    universiteEmprunteur: string;
    reason: string;
  }) {
    this.logger.log(`External user blocked: ${data.externUserId} from ${data.universiteEmprunteur}`);
    
    try {
      // Logique pour gérer le blocage d'un utilisateur externe
      // Marquer tous ses emprunts en cours, envoyer des notifications
      
      const empruntsEnCours = await this.empruntService.getEmprunts({
        search: data.externUserId,
        statut: StatutEmprunt.EN_COURS
      });
      
      this.logger.log(`Found ${empruntsEnCours.data.length} active emprunts for blocked external user`);
      
    } catch (error) {
      this.logger.error(`Error handling external user blocking: ${error.message}`, error.stack);
    }
  }

  @EventPattern('exemplaire.damaged')
  async handleExemplaireDamaged(@Payload() data: {
    exemplaireId: string;
    severity: 'LEGER' | 'GRAVE';
    description: string;
  }) {
    this.logger.log(`Exemplaire damaged: ${data.exemplaireId}`);
    
    try {
      // Logique pour gérer un exemplaire endommagé
      this.logger.log(`Handled exemplaire damage for: ${data.exemplaireId}`);
    } catch (error) {
      this.logger.error(`Error handling exemplaire damage: ${error.message}`, error.stack);
    }
  }

  @EventPattern('exemplaire.lost')
  async handleExemplaireLost(@Payload() data: {
    exemplaireId: string;
    lastKnownLocation: string;
    reportedBy: string;
  }) {
    this.logger.log(`Exemplaire lost: ${data.exemplaireId}`);
    
    try {
      // Logique pour gérer un exemplaire perdu
      this.logger.log(`Handled exemplaire loss for: ${data.exemplaireId}`);
    } catch (error) {
      this.logger.error(`Error handling exemplaire loss: ${error.message}`, error.stack);
    }
  }

  // ===== TÂCHES PÉRIODIQUES =====

  @EventPattern('cron.daily.check.retards')
  async handleDailyCheckRetards(@Payload() data: {}) {
    this.logger.log('Running daily check for retards');
    
    try {
      const result = await this.empruntService.markEmpruntsEnRetard();
      
      if (result.count > 0) {
        this.logger.log(`Found ${result.count} new retards`);
        
        const empruntsEnRetard = await this.empruntService.getEmpruntsEnRetard();
        
        // Séparer les emprunts locaux et externes pour différents traitements
        const empruntsLocaux = empruntsEnRetard.filter(e => e.universiteEmprunteur === 'LOCALE');
        const empruntsExternes = empruntsEnRetard.filter(e => e.universiteEmprunteur !== 'LOCALE');
        
        this.logger.log(`Retards locaux: ${empruntsLocaux.length}, Retards externes: ${empruntsExternes.length}`);
      }
      
      this.logger.log('Daily retard check completed');
    } catch (error) {
      this.logger.error(`Error in daily retard check: ${error.message}`, error.stack);
    }
  }

}