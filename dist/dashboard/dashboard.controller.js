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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const dashboard_service_1 = require("./dashboard.service");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
let DashboardController = class DashboardController {
    dashboardService;
    jwtService;
    prisma;
    constructor(dashboardService, jwtService, prisma) {
        this.dashboardService = dashboardService;
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    extractUserIdFromToken(token) {
        try {
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.decode(cleanToken);
            if (!payload || (!payload.sub && !payload.id && !payload.userId)) {
                throw new Error('Token invalide: ID utilisateur non trouvé');
            }
            return payload.sub || payload.id || payload.userId;
        }
        catch (error) {
            throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
        }
    }
    async getDashboard(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération dashboard pour utilisateur:', userId);
            return await this.dashboardService.getDashboard(userId);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardStats(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération statistiques pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
            return {
                userId,
                role: dashboard.user.role,
                statistiques: dashboard.statistiques
            };
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardActivities(data) {
        try {
            const { token, limit = 10 } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération activités pour utilisateur:', userId, 'limite:', limit);
            const dashboard = await this.dashboardService.getDashboard(userId);
            return {
                userId,
                role: dashboard.user.role,
                activitesRecentes: dashboard.activitesRecentes?.slice(0, limit) || []
            };
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardNotifications(data) {
        try {
            const { token, limit = 10 } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération notifications pour utilisateur:', userId, 'limite:', limit);
            const dashboard = await this.dashboardService.getDashboard(userId);
            return {
                userId,
                notifications: dashboard.notifications?.slice(0, limit) || []
            };
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardRecommendations(data) {
        try {
            const { token, limit = 5 } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération recommandations pour utilisateur:', userId, 'limite:', limit);
            const dashboard = await this.dashboardService.getDashboard(userId);
            return {
                userId,
                role: dashboard.user.role,
                recommandations: dashboard.recommandations?.slice(0, limit) || []
            };
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardProfile(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération profil pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
            return {
                user: dashboard.user
            };
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardRessourcesRecentes(data) {
        try {
            const { token, limit = 5 } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération ressources récentes pour utilisateur:', userId, 'limite:', limit);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardTachesUrgentes(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération tâches urgentes pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardAlertesSysteme(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération alertes système pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardTendances(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération tendances pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardRapportsMensuels(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération rapports mensuels pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardReglesEmprunt(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération règles emprunt pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getDashboardSummary(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération résumé dashboard pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
            let summary = {
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async markNotificationsAsRead(data) {
        try {
            const { token, notificationIds } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Marquage notifications comme lues pour utilisateur:', userId);
            if (notificationIds && notificationIds.length > 0) {
                await this.prisma.notification.updateMany({
                    where: {
                        id: { in: notificationIds },
                        userId: userId,
                    },
                    data: {
                        estLue: true,
                    },
                });
            }
            else {
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getEtudiantDashboardData(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération données étudiant pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getEnseignantDashboardData(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération données enseignant pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getBibliothecaireDashboardData(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération données bibliothécaire pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getAdminDashboardData(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Récupération données admin pour utilisateur:', userId);
            const dashboard = await this.dashboardService.getDashboard(userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async refreshDashboard(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Actualisation dashboard pour utilisateur:', userId);
            return await this.dashboardService.getDashboard(userId);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async validateToken(data) {
        try {
            const { token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Validation token pour utilisateur:', userId);
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
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: 401
            };
        }
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, microservices_1.MessagePattern)('getDashboard'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboard", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardStats'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardStats", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardActivities'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardActivities", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardNotifications'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardNotifications", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardRecommendations'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardRecommendations", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardProfile'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardProfile", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardRessourcesRecentes'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardRessourcesRecentes", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardTachesUrgentes'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardTachesUrgentes", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardAlertesSysteme'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardAlertesSysteme", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardTendances'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardTendances", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardRapportsMensuels'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardRapportsMensuels", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardReglesEmprunt'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardReglesEmprunt", null);
__decorate([
    (0, microservices_1.MessagePattern)('getDashboardSummary'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardSummary", null);
__decorate([
    (0, microservices_1.MessagePattern)('markNotificationsAsRead'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "markNotificationsAsRead", null);
__decorate([
    (0, microservices_1.MessagePattern)('getEtudiantDashboardData'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getEtudiantDashboardData", null);
__decorate([
    (0, microservices_1.MessagePattern)('getEnseignantDashboardData'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getEnseignantDashboardData", null);
__decorate([
    (0, microservices_1.MessagePattern)('getBibliothecaireDashboardData'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getBibliothecaireDashboardData", null);
__decorate([
    (0, microservices_1.MessagePattern)('getAdminDashboardData'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getAdminDashboardData", null);
__decorate([
    (0, microservices_1.MessagePattern)('refreshDashboard'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "refreshDashboard", null);
__decorate([
    (0, microservices_1.MessagePattern)('validateDashboardToken'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "validateToken", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map