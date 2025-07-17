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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoriqueAccesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let HistoriqueAccesService = class HistoriqueAccesService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async enregistrerAcces(userId, ressourceId, typeacces, universiteRess) {
        try {
            if (!userId || !ressourceId || !typeacces || !universiteRess) {
                throw new Error('Paramètres manquants : userId, ressourceId, typeacces et universiteRess sont requis');
            }
            const userExists = await this.prismaService.user.findUnique({
                where: { id: userId },
            });
            if (!userExists) {
                throw new Error('Utilisateur non trouvé');
            }
            const isInternalResource = universiteRess === process.env.CURRENT_UNIVERSITY || universiteRess === 'uadb';
            let historiqueData = {
                userId,
                typeAcces: typeacces,
                universiteRess: universiteRess,
            };
            if (isInternalResource) {
                historiqueData.ressourceId = ressourceId;
            }
            else {
                historiqueData.externRessourceId = ressourceId;
            }
            const historique = await this.prismaService.historiqueAcces.create({
                data: historiqueData,
            });
            console.log(`Accès enregistré pour ressource ${isInternalResource ? 'interne' : 'externe'}:`, historique);
            return historique;
        }
        catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'accès:', error);
            throw new Error(`Impossible d'enregistrer l'accès à la ressource: ${error.message}`);
        }
    }
    async getHistoriqueUtilisateur(userId, limit = 50) {
        try {
            return await this.prismaService.historiqueAcces.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                take: +limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            email: true,
                        }
                    },
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            description: true,
                        }
                    }
                }
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération de l\'historique:', error);
            throw new Error('Impossible de récupérer l\'historique d\'accès');
        }
    }
    async getHistoriqueRessource(ressourceId, isExternal = false, limit = 50) {
        try {
            const whereCondition = isExternal
                ? { externRessourceId: ressourceId }
                : { ressourceId: ressourceId };
            return await this.prismaService.historiqueAcces.findMany({
                where: whereCondition,
                orderBy: { createdAt: 'desc' },
                take: limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            email: true,
                        }
                    }
                }
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération de l\'historique de la ressource:', error);
            throw new Error('Impossible de récupérer l\'historique de la ressource');
        }
    }
    async compterAcces(ressourceId, isExternal = false, typeAcces) {
        try {
            const whereCondition = isExternal
                ? { externRessourceId: ressourceId }
                : { ressourceId: ressourceId };
            if (typeAcces) {
                whereCondition.typeAcces = typeAcces;
            }
            return await this.prismaService.historiqueAcces.count({
                where: whereCondition
            });
        }
        catch (error) {
            console.error('Erreur lors du comptage des accès:', error);
            throw new Error('Impossible de compter les accès');
        }
    }
    async findRecentAcces(options = {}) {
        try {
            const { limit = 50 } = options;
            return await this.prismaService.historiqueAcces.findMany({
                orderBy: { createdAt: 'desc' },
                take: +limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            email: true,
                        }
                    },
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            description: true,
                        }
                    }
                }
            });
        }
        catch (error) {
            console.error('Erreur lors de la récupération des accès récents:', error);
            throw new Error('Impossible de récupérer les accès récents');
        }
    }
};
exports.HistoriqueAccesService = HistoriqueAccesService;
exports.HistoriqueAccesService = HistoriqueAccesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HistoriqueAccesService);
//# sourceMappingURL=historique-acces.service.js.map