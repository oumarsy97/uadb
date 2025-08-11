import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EmprunteService } from '../emprunte/emprunte.service';
import { EmailService } from '../meservices/mail/email.service';
import { PrismaService } from '../prisma/prisma.service';
import { StatutEmprunt } from 'generated/prisma';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private readonly emprunteService: EmprunteService,
    private readonly emailService: EmailService,
    private readonly prisma: PrismaService,
  ) {}

  // Cron qui s'exécute chaque minute pour les tests (à changer en production)
  @Cron('0 0 0 * * *') // Chaque jour à minuit
  async handleEmpruntEnRetard() {
    this.logger.debug('Vérification des emprunts en retard...');
    
    try {
      const result = await this.emprunteService.markEmpruntsEnRetard();
      
      if (result.count > 0) {
        this.logger.log(`${result.count} emprunts marqués en retard`);
        // Envoyer des emails pour les emprunts nouvellement marqués en retard
        await this.sendRetardEmails();
      } else {
        this.logger.debug('Aucun emprunt en retard trouvé');
      }
    } catch (error) {
      this.logger.error('Erreur lors de la vérification des emprunts en retard:', error);
    }
  }

  // Cron pour rappels avant échéance (tous les jours à 09h00)
  @Cron('0 0 9 * * *')
  async sendRappelsAvantEcheance() {
    this.logger.log('Envoi des rappels avant échéance...');
    
    try {
      // Emprunts qui arrivent à échéance dans 3 jours
      const dans3Jours = new Date();
      dans3Jours.setDate(dans3Jours.getDate() + 3);
      dans3Jours.setHours(23, 59, 59, 999);

      const dans2Jours = new Date();
      dans2Jours.setDate(dans2Jours.getDate() + 2);
      dans2Jours.setHours(0, 0, 0, 0);

      const empruntsAvantEcheance = await this.getEmpruntsForReminders(dans2Jours, dans3Jours);
      
      for (const userEmprunts of empruntsAvantEcheance) {
        await this.emailService.sendEmpruntReminderEmail(
          userEmprunts.user.email,
          `${userEmprunts.user.prenom} ${userEmprunts.user.nom}`,
          userEmprunts.emprunts,
          'avant_echeance'
        );
      }

      this.logger.log(`Rappels avant échéance envoyés à ${empruntsAvantEcheance.length} utilisateurs`);
    } catch (error) {
      this.logger.error('Erreur lors de l\'envoi des rappels avant échéance:', error);
    }
  }

  // Cron pour rappels d'échéance proche (tous les jours à 14h00)
  @Cron('0 0 14 * * *')
  async sendRappelsEcheanceProche() {
    this.logger.log('Envoi des rappels échéance proche...');
    
    try {
      // Emprunts qui arrivent à échéance demain
      const demain = new Date();
      demain.setDate(demain.getDate() + 1);
      demain.setHours(23, 59, 59, 999);

      const aujourd = new Date();
      aujourd.setHours(0, 0, 0, 0);

      const empruntsEcheanceProche = await this.getEmpruntsForReminders(aujourd, demain);
      
      for (const userEmprunts of empruntsEcheanceProche) {
        await this.emailService.sendEmpruntReminderEmail(
          userEmprunts.user.email,
          `${userEmprunts.user.prenom} ${userEmprunts.user.nom}`,
          userEmprunts.emprunts,
          'echeance_proche'
        );
      }

      this.logger.log(`Rappels échéance proche envoyés à ${empruntsEcheanceProche.length} utilisateurs`);
    } catch (error) {
      this.logger.error('Erreur lors de l\'envoi des rappels échéance proche:', error);
    }
  }

  // Cron pour rappels d'emprunts en retard (tous les jours à 10h00)
  @Cron('0 0 10 * * *')
  async sendRappelsRetard() {
    this.logger.log('Envoi des rappels de retard...');
    
    try {
      await this.sendRetardEmails();
    } catch (error) {
      this.logger.error('Erreur lors de l\'envoi des rappels de retard:', error);
    }
  }

  // Cron pour rappels de retard critique (tous les lundis à 09h00)
  @Cron('0 0 9 * * 1')
  async sendRappelsRetardCritique() {
    this.logger.log('Envoi des rappels de retard critique...');
    
    try {
      // Emprunts en retard de plus de 14 jours
      const il_y_a_14_jours = new Date();
      il_y_a_14_jours.setDate(il_y_a_14_jours.getDate() - 14);

      const empruntsRetardCritique = await this.getEmpruntsEnRetardCritique(il_y_a_14_jours);
      
      for (const userEmprunts of empruntsRetardCritique) {
        await this.emailService.sendEmpruntReminderEmail(
          userEmprunts.user.email,
          `${userEmprunts.user.prenom} ${userEmprunts.user.nom}`,
          userEmprunts.emprunts,
          'retard_grave'
        );
      }

      this.logger.log(`Rappels retard critique envoyés à ${empruntsRetardCritique.length} utilisateurs`);
    } catch (error) {
      this.logger.error('Erreur lors de l\'envoi des rappels de retard critique:', error);
    }
  }

  /**
   * Envoyer des emails pour les emprunts en retard
   */
  private async sendRetardEmails() {
    const empruntsEnRetard = await this.getEmpruntsEnRetardForEmails();
    
    for (const userEmprunts of empruntsEnRetard) {
      try {
        await this.emailService.sendEmpruntReminderEmail(
          userEmprunts.user.email,
          `${userEmprunts.user.prenom} ${userEmprunts.user.nom}`,
          userEmprunts.emprunts,
          'en_retard'
        );
      } catch (error) {
        this.logger.error(`Erreur envoi email retard à ${userEmprunts.user.email}:`, error);
      }
    }

    this.logger.log(`Rappels de retard envoyés à ${empruntsEnRetard.length} utilisateurs`);
  }

  /**
   * Récupérer les emprunts pour les rappels dans une plage de dates
   */
  private async getEmpruntsForReminders(dateDebut: Date, dateFin: Date) {
    const emprunts = await this.prisma.emprunt.findMany({
      where: {
        statut: StatutEmprunt.EN_COURS,
        dateRetourPrevue: {
          gte: dateDebut,
          lte: dateFin
        }
      },
      include: {
        user: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        empruntExemplaires: {
          where: { statut: StatutEmprunt.EN_COURS },
          include: {
            exemplaire: {
              include: {
                ressource: {
                  select: {
                    titre: true,
                    auteur: true,
                    isbnglobale: true
                  }
                }
              }
            }
          }
        }
      }
    });

    // Grouper par utilisateur
    const empruntsParUtilisateur = new Map();

    emprunts.forEach(emprunt => {
      const userId = emprunt.user?.id;
      
      if (!empruntsParUtilisateur.has(userId)) {
        empruntsParUtilisateur.set(userId, {
          user: emprunt.user,
          emprunts: []
        });
      }

      empruntsParUtilisateur.get(userId).emprunts.push({
        id: emprunt.id,
        dateRetourPrevue: emprunt.dateRetourPrevue,
        isEnRetard: false,
        exemplaires: emprunt.empruntExemplaires.map(ee => ({
          titre: ee.exemplaire.ressource.titre,
          auteur: ee.exemplaire.ressource.auteur,
          isbn: ee.exemplaire.ressource.isbnglobale
        }))
      });
    });

    return Array.from(empruntsParUtilisateur.values());
  }

  /**
   * Récupérer les emprunts en retard pour les emails
   */
  private async getEmpruntsEnRetardForEmails() {
    const aujourd = new Date();
    
    const emprunts = await this.prisma.emprunt.findMany({
      where: {
        statut: {
          in: [StatutEmprunt.EN_COURS, StatutEmprunt.RETARD]
        },
        dateRetourPrevue: {
          lt: aujourd
        }
      },
      include: {
        user: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        empruntExemplaires: {
          where: { 
            statut: {
              in: [StatutEmprunt.EN_COURS, StatutEmprunt.RETARD]
            }
          },
          include: {
            exemplaire: {
              include: {
                ressource: {
                  select: {
                    titre: true,
                    auteur: true,
                    isbnglobale: true
                  }
                }
              }
            }
          }
        }
      }
    });

    // Grouper par utilisateur et calculer les jours de retard
    const empruntsParUtilisateur = new Map();

    emprunts.forEach(emprunt => {
      const userId = emprunt.user?.id;
      const joursRetard = Math.floor((aujourd.getTime() - emprunt.dateRetourPrevue.getTime()) / (1000 * 60 * 60 * 24));
      
      if (!empruntsParUtilisateur.has(userId)) {
        empruntsParUtilisateur.set(userId, {
          user: emprunt.user,
          emprunts: []
        });
      }

      empruntsParUtilisateur.get(userId).emprunts.push({
        id: emprunt.id,
        dateRetourPrevue: emprunt.dateRetourPrevue,
        isEnRetard: true,
        joursRetard: Math.max(1, joursRetard),
        exemplaires: emprunt.empruntExemplaires.map(ee => ({
          titre: ee.exemplaire.ressource.titre,
          auteur: ee.exemplaire.ressource.auteur,
          isbn: ee.exemplaire.ressource.isbnglobale
        }))
      });
    });

    return Array.from(empruntsParUtilisateur.values());
  }

  /**
   * Récupérer les emprunts en retard critique
   */
  private async getEmpruntsEnRetardCritique(dateLimit: Date) {
    const emprunts = await this.prisma.emprunt.findMany({
      where: {
        statut: StatutEmprunt.RETARD,
        dateRetourPrevue: {
          lt: dateLimit
        }
      },
      include: {
        user: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        empruntExemplaires: {
          where: { statut: StatutEmprunt.RETARD },
          include: {
            exemplaire: {
              include: {
                ressource: {
                  select: {
                    titre: true,
                    auteur: true,
                    isbnglobale: true
                  }
                }
              }
            }
          }
        }
      }
    });

    // Grouper par utilisateur et calculer les jours de retard
    const empruntsParUtilisateur = new Map();

    emprunts.forEach(emprunt => {
      const userId = emprunt.user?.id;
      const joursRetard = Math.floor((new Date().getTime() - emprunt.dateRetourPrevue.getTime()) / (1000 * 60 * 60 * 24));
      
      if (!empruntsParUtilisateur.has(userId)) {
        empruntsParUtilisateur.set(userId, {
          user: emprunt.user,
          emprunts: []
        });
      }

      empruntsParUtilisateur.get(userId).emprunts.push({
        id: emprunt.id,
        dateRetourPrevue: emprunt.dateRetourPrevue,
        isEnRetard: true,
        joursRetard: Math.max(1, joursRetard),
        exemplaires: emprunt.empruntExemplaires.map(ee => ({
          titre: ee.exemplaire.ressource.titre,
          auteur: ee.exemplaire.ressource.auteur,
          isbn: ee.exemplaire.ressource.isbnglobale
        }))
      });
    });

    return Array.from(empruntsParUtilisateur.values());
  }

 

  /**
   * Statistiques quotidiennes - Envoi d'un rapport aux administrateurs
   * S'exécute tous les jours à 23h00
   */
  @Cron('0 0 23 * * *')
  async generateDailyStats() {
    this.logger.log('Génération des statistiques quotidiennes...');
    
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      // Compter les nouveaux emprunts du jour
      const nouveauxEmprunts = await this.prisma.emprunt.count({
        where: {
          dateEmprunt: {
            gte: today,
            lt: tomorrow
          }
        }
      });

      // Compter les retours du jour
      const retoursJour = await this.prisma.emprunt.count({
        where: {
          dateRetourEffective: {
            gte: today,
            lt: tomorrow
          },
          statut: StatutEmprunt.RETOURNE
        }
      });

      // Compter les emprunts en retard
      const empruntsEnRetard = await this.prisma.emprunt.count({
        where: {
          statut: StatutEmprunt.RETARD
        }
      });

      // Compter les emprunts en cours
      const empruntsEnCours = await this.prisma.emprunt.count({
        where: {
          statut: StatutEmprunt.EN_COURS
        }
      });

      const statsMessage = `
        📊 Rapport quotidien - ${today.toLocaleDateString('fr-FR')}
        
        🆕 Nouveaux emprunts : ${nouveauxEmprunts}
        ✅ Retours effectués : ${retoursJour}
        ⏳ Emprunts en cours : ${empruntsEnCours}
        🚨 Emprunts en retard : ${empruntsEnRetard}
      `;

      // Récupérer les emails des administrateurs
      const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
      if (adminEmails.length > 0 && adminEmails[0] !== '') {
        await this.emailService.sendNotificationEmail(
          adminEmails,
          '📊 Rapport quotidien Jokko-Chain',
          statsMessage
        );
      }

      this.logger.log('Statistiques quotidiennes générées et envoyées');
    } catch (error) {
      this.logger.error('Erreur lors de la génération des statistiques:', error);
    }
  }

  /**
   * Vérification de la santé du système - toutes les heures
   */
  @Cron('0 0 * * * *')
  async healthCheck() {
    try {
      // Vérifier la connexion à la base de données
      await this.prisma.$queryRaw`SELECT 1`;
      
      // Vérifier la connectivité email
      const emailHealthy = await this.emailService.verifyConnection();
      
      if (!emailHealthy) {
        this.logger.warn('Service email indisponible');
      }
      
      this.logger.debug('Contrôle de santé système OK');
    } catch (error) {
      this.logger.error('Problème de santé système détecté:', error);
      
      // Envoyer une alerte aux administrateurs en cas de problème critique
      try {
        const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
        if (adminEmails.length === 0 || adminEmails[0] === '') {
          this.logger.warn('Aucun email d\'administrateur configuré pour les alertes');
          return;
        }
        if (adminEmails.length > 0 && adminEmails[0] !== '') {
          await this.emailService.sendNotificationEmail(
            adminEmails,
            '🚨 Alerte système Jokko-Chain',
            `Un problème système a été détecté : ${error.message}`
          );
        }
      } catch (emailError) {
        this.logger.error('Impossible d\'envoyer l\'alerte email:', emailError);
      }
    }
  }
}