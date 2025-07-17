import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import {  CreateEmpruntDto, ReturnEmpruntDto, ExtendEmpruntDto } from './dto/create-emprunte.dto';
import { EmprunteService } from './emprunte.service';
import { StatutEmprunt } from 'generated/prisma';




@Controller()
export class EmprunteController {
  private readonly logger = new Logger(EmprunteController.name);

  constructor(private readonly empruntService: EmprunteService) {}

  // ===== GESTION DES EMPRUNTS =====

  @MessagePattern('emprunt.create')
  async createEmprunt(@Payload() data: CreateEmpruntDto) {
    console.log(`Received createEmprunt request: ${JSON.stringify(data)}`);
    this.logger.log(`Creating emprunt for user: ${data.empreunteurId} with exemplaires: ${data.exemplaireIds.join(', ')}`);
    
    try {
      const emprunt = await this.empruntService.createEmprunt(data);

      // Émettre l'événement de création
      // Note: Dans un vrai microservice, vous utiliseriez un EventEmitter ou un service de messagerie
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
  }) {
    
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
      const emprunt = await this.empruntService.returnExemplaires(data);
      
      this.logger.log(`Exemplaires returned for emprunt: ${emprunt.id}`);
      
    
      
      return {
        success: true,
        data: emprunt,
        message: 'Exemplaires retournés avec succès'
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
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
      return {
        success: true,
        data: emprunt,
        message: 'Emprunt prolongé avec succès'
      };
    } catch (error) {
      this.logger.error(`Error extending emprunt: ${error.message}`, error.stack);
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
      return {
        success: false,
        error: error.message,
        code: error.constructor.name
      };
    }
  }

  // ===== RECHERCHES SPÉCIFIQUES =====

  @MessagePattern('emprunt.retards')
  async getEmpruntsEnRetard(@Payload() data: {}, @Ctx() context: RmqContext) {
    this.logger.log('Getting emprunts en retard');
    
    try {
      const emprunts = await this.empruntService.getEmpruntsEnRetard();
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
      return {
        success: true,
        data: emprunts,
        count: emprunts.length
      };
    } catch (error) {
      this.logger.error(`Error getting emprunts en retard: ${error.message}`, error.stack);
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
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
  }, @Ctx() context: RmqContext) {
    this.logger.log(`Getting emprunts for user: ${data.userId}`);
    
    try {
      const result = await this.empruntService.getEmprunts({
        userId: data.userId,
        statut: data.statut,
        page: data.page,
        limit: data.limit
      });
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
      return {
        success: true,
        data: result.data,
        meta: result.meta
      };
    } catch (error) {
      this.logger.error(`Error getting user emprunts: ${error.message}`, error.stack);
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
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
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
      return {
        success: true,
        data: result.data,
        meta: result.meta
      };
    } catch (error) {
      this.logger.error(`Error getting user history: ${error.message}`, error.stack);
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
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
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
      return {
        success: true,
        data: stats
      };
    } catch (error) {
      this.logger.error(`Error getting emprunt stats: ${error.message}`, error.stack);
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
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
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
      return {
        success: true,
        data: { count: result.count },
        message: `${result.count} emprunts marqués en retard`
      };
    } catch (error) {
      this.logger.error(`Error marking emprunts en retard: ${error.message}`, error.stack);
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
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
      // Cette logique pourrait être dans le service
      const exemplaires = await this.empruntService['prisma'].exemplairePhysique.findMany({
        where: {
          id: { in: data.exemplaireIds }
        },
        select: {
          id: true,
          etat: true,
        }
      });
      
      const availability = exemplaires.map(ex => ({
        id: ex.id,
        etat: ex.etat,
        peutEtreEmprunte:  ex.etat !== 'PERDU'
      }));
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
      return {
        success: true,
        data: availability
      };
    } catch (error) {
      this.logger.error(`Error checking availability: ${error.message}`, error.stack);
      
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      channel.ack(originalMsg);
      
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
      // Logique pour gérer la suspension d'un utilisateur
      // Par exemple, bloquer les nouveaux emprunts, envoyer des notifications, etc.
      
      // Optionnel: Marquer les emprunts en cours avec un flag spécial
      // ou envoyer une notification aux bibliothécaires
      
      this.logger.log(`Handled user suspension for: ${data.userId}`);
    } catch (error) {
      this.logger.error(`Error handling user suspension: ${error.message}`, error.stack);
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
      // Mettre à jour l'état, notifier les utilisateurs concernés, etc.
      
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
      // Marquer comme perdu, calculer les pénalités, etc.
      
      this.logger.log(`Handled exemplaire loss for: ${data.exemplaireId}`);
    } catch (error) {
      this.logger.error(`Error handling exemplaire loss: ${error.message}`, error.stack);
    }
  }

  // ===== TÂCHES PÉRIODIQUES =====

  @EventPattern('cron.daily.check.retards')
  async handleDailycheckRetards(@Payload() data: {}) {
    this.logger.log('Running daily check for retards');
    
    try {
      const result = await this.empruntService.markEmpruntsEnRetard();
      
      if (result.count > 0) {
        // Émettre un événement pour notifier les autres services
        this.logger.log(`Found ${result.count} new retards`);
        
        // Optionnel: Envoyer des notifications aux utilisateurs en retard
        const empruntsEnRetard = await this.empruntService.getEmpruntsEnRetard();
        
        // Ici vous pourriez émettre des événements pour chaque utilisateur en retard
        // pour déclencher l'envoi d'emails ou de notifications
      }
      
      this.logger.log('Daily retard check completed');
    } catch (error) {
      this.logger.error(`Error in daily retard check: ${error.message}`, error.stack);
    }
  }
}