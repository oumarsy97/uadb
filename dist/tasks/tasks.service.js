"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const emprunte_service_1 = require("../emprunte/emprunte.service");
const email_service_1 = require("../meservices/mail/email.service");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_1 = require("../../generated/prisma/index.js");
let TasksService = TasksService_1 = class TasksService {
    emprunteService;
    emailService;
    prisma;
    logger = new common_1.Logger(TasksService_1.name);
    constructor(emprunteService, emailService, prisma) {
        this.emprunteService = emprunteService;
        this.emailService = emailService;
        this.prisma = prisma;
    }
    async handleEmpruntEnRetard() {
        this.logger.debug('Vérification des emprunts en retard...');
        try {
            const result = await this.emprunteService.markEmpruntsEnRetard();
            if (result.count > 0) {
                this.logger.log(`${result.count} emprunts marqués en retard`);
                await this.sendRetardEmails();
            }
            else {
                this.logger.debug('Aucun emprunt en retard trouvé');
            }
        }
        catch (error) {
            this.logger.error('Erreur lors de la vérification des emprunts en retard:', error);
        }
    }
    async sendRappelsAvantEcheance() {
        this.logger.log('Envoi des rappels avant échéance...');
        try {
            const dans3Jours = new Date();
            dans3Jours.setDate(dans3Jours.getDate() + 3);
            dans3Jours.setHours(23, 59, 59, 999);
            const dans2Jours = new Date();
            dans2Jours.setDate(dans2Jours.getDate() + 2);
            dans2Jours.setHours(0, 0, 0, 0);
            const empruntsAvantEcheance = await this.getEmpruntsForReminders(dans2Jours, dans3Jours);
            for (const userEmprunts of empruntsAvantEcheance) {
                await this.emailService.sendEmpruntReminderEmail(userEmprunts.user.email, `${userEmprunts.user.prenom} ${userEmprunts.user.nom}`, userEmprunts.emprunts, 'avant_echeance');
            }
            this.logger.log(`Rappels avant échéance envoyés à ${empruntsAvantEcheance.length} utilisateurs`);
        }
        catch (error) {
            this.logger.error('Erreur lors de l\'envoi des rappels avant échéance:', error);
        }
    }
    async sendRappelsEcheanceProche() {
        this.logger.log('Envoi des rappels échéance proche...');
        try {
            const demain = new Date();
            demain.setDate(demain.getDate() + 1);
            demain.setHours(23, 59, 59, 999);
            const aujourd = new Date();
            aujourd.setHours(0, 0, 0, 0);
            const empruntsEcheanceProche = await this.getEmpruntsForReminders(aujourd, demain);
            for (const userEmprunts of empruntsEcheanceProche) {
                await this.emailService.sendEmpruntReminderEmail(userEmprunts.user.email, `${userEmprunts.user.prenom} ${userEmprunts.user.nom}`, userEmprunts.emprunts, 'echeance_proche');
            }
            this.logger.log(`Rappels échéance proche envoyés à ${empruntsEcheanceProche.length} utilisateurs`);
        }
        catch (error) {
            this.logger.error('Erreur lors de l\'envoi des rappels échéance proche:', error);
        }
    }
    async sendRappelsRetard() {
        this.logger.log('Envoi des rappels de retard...');
        try {
            await this.sendRetardEmails();
        }
        catch (error) {
            this.logger.error('Erreur lors de l\'envoi des rappels de retard:', error);
        }
    }
    async sendRappelsRetardCritique() {
        this.logger.log('Envoi des rappels de retard critique...');
        try {
            const il_y_a_14_jours = new Date();
            il_y_a_14_jours.setDate(il_y_a_14_jours.getDate() - 14);
            const empruntsRetardCritique = await this.getEmpruntsEnRetardCritique(il_y_a_14_jours);
            for (const userEmprunts of empruntsRetardCritique) {
                await this.emailService.sendEmpruntReminderEmail(userEmprunts.user.email, `${userEmprunts.user.prenom} ${userEmprunts.user.nom}`, userEmprunts.emprunts, 'retard_grave');
            }
            this.logger.log(`Rappels retard critique envoyés à ${empruntsRetardCritique.length} utilisateurs`);
        }
        catch (error) {
            this.logger.error('Erreur lors de l\'envoi des rappels de retard critique:', error);
        }
    }
    async sendRetardEmails() {
        const empruntsEnRetard = await this.getEmpruntsEnRetardForEmails();
        for (const userEmprunts of empruntsEnRetard) {
            try {
                await this.emailService.sendEmpruntReminderEmail(userEmprunts.user.email, `${userEmprunts.user.prenom} ${userEmprunts.user.nom}`, userEmprunts.emprunts, 'en_retard');
            }
            catch (error) {
                this.logger.error(`Erreur envoi email retard à ${userEmprunts.user.email}:`, error);
            }
        }
        this.logger.log(`Rappels de retard envoyés à ${empruntsEnRetard.length} utilisateurs`);
    }
    async getEmpruntsForReminders(dateDebut, dateFin) {
        const emprunts = await this.prisma.emprunt.findMany({
            where: {
                statut: prisma_1.StatutEmprunt.EN_COURS,
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
                    where: { statut: prisma_1.StatutEmprunt.EN_COURS },
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
    async getEmpruntsEnRetardForEmails() {
        const aujourd = new Date();
        const emprunts = await this.prisma.emprunt.findMany({
            where: {
                statut: {
                    in: [prisma_1.StatutEmprunt.EN_COURS, prisma_1.StatutEmprunt.RETARD]
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
                            in: [prisma_1.StatutEmprunt.EN_COURS, prisma_1.StatutEmprunt.RETARD]
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
    async getEmpruntsEnRetardCritique(dateLimit) {
        const emprunts = await this.prisma.emprunt.findMany({
            where: {
                statut: prisma_1.StatutEmprunt.RETARD,
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
                    where: { statut: prisma_1.StatutEmprunt.RETARD },
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
    async generateDailyStats() {
        this.logger.log('Génération des statistiques quotidiennes...');
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const nouveauxEmprunts = await this.prisma.emprunt.count({
                where: {
                    dateEmprunt: {
                        gte: today,
                        lt: tomorrow
                    }
                }
            });
            const retoursJour = await this.prisma.emprunt.count({
                where: {
                    dateRetourEffective: {
                        gte: today,
                        lt: tomorrow
                    },
                    statut: prisma_1.StatutEmprunt.RETOURNE
                }
            });
            const empruntsEnRetard = await this.prisma.emprunt.count({
                where: {
                    statut: prisma_1.StatutEmprunt.RETARD
                }
            });
            const empruntsEnCours = await this.prisma.emprunt.count({
                where: {
                    statut: prisma_1.StatutEmprunt.EN_COURS
                }
            });
            const statsMessage = `
        📊 Rapport quotidien - ${today.toLocaleDateString('fr-FR')}
        
        🆕 Nouveaux emprunts : ${nouveauxEmprunts}
        ✅ Retours effectués : ${retoursJour}
        ⏳ Emprunts en cours : ${empruntsEnCours}
        🚨 Emprunts en retard : ${empruntsEnRetard}
      `;
            const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
            if (adminEmails.length > 0 && adminEmails[0] !== '') {
                await this.emailService.sendNotificationEmail(adminEmails, '📊 Rapport quotidien Jokko-Chain', statsMessage);
            }
            this.logger.log('Statistiques quotidiennes générées et envoyées');
        }
        catch (error) {
            this.logger.error('Erreur lors de la génération des statistiques:', error);
        }
    }
    async healthCheck() {
        try {
            await this.prisma.$queryRaw `SELECT 1`;
            const emailHealthy = await this.emailService.verifyConnection();
            if (!emailHealthy) {
                this.logger.warn('Service email indisponible');
            }
            this.logger.debug('Contrôle de santé système OK');
        }
        catch (error) {
            this.logger.error('Problème de santé système détecté:', error);
            try {
                const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
                if (adminEmails.length === 0 || adminEmails[0] === '') {
                    this.logger.warn('Aucun email d\'administrateur configuré pour les alertes');
                    return;
                }
                if (adminEmails.length > 0 && adminEmails[0] !== '') {
                    await this.emailService.sendNotificationEmail(adminEmails, '🚨 Alerte système Jokko-Chain', `Un problème système a été détecté : ${error.message}`);
                }
            }
            catch (emailError) {
                this.logger.error('Impossible d\'envoyer l\'alerte email:', emailError);
            }
        }
    }
};
exports.TasksService = TasksService;
__decorate([
    (0, schedule_1.Cron)('0 0 0 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "handleEmpruntEnRetard", null);
__decorate([
    (0, schedule_1.Cron)('0 0 9 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "sendRappelsAvantEcheance", null);
__decorate([
    (0, schedule_1.Cron)('0 0 14 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "sendRappelsEcheanceProche", null);
__decorate([
    (0, schedule_1.Cron)('0 0 10 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "sendRappelsRetard", null);
__decorate([
    (0, schedule_1.Cron)('0 0 9 * * 1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "sendRappelsRetardCritique", null);
__decorate([
    (0, schedule_1.Cron)('0 0 23 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "generateDailyStats", null);
__decorate([
    (0, schedule_1.Cron)('0 0 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "healthCheck", null);
exports.TasksService = TasksService = TasksService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [emprunte_service_1.EmprunteService,
        email_service_1.EmailService,
        prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map