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
exports.NotationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let NotationsService = class NotationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createNotation(data) {
        try {
            console.log(data.universiteUser);
            if (!data.ressourceId) {
                throw new common_1.BadRequestException('ID de ressource requis');
            }
            if (!data.note || data.note < 1 || data.note > 5) {
                throw new common_1.BadRequestException('La note doit être comprise entre 1 et 5');
            }
            const ressource = await this.prisma.ressource.findUnique({
                where: { id: data.ressourceId },
            });
            if (!ressource) {
                throw new common_1.NotFoundException('Ressource non trouvée');
            }
            const isInternalUser = process.env.CURRENT_UNIVERSITY?.toLowerCase() === data.universiteUser?.toLowerCase();
            const isExternalUser = !isInternalUser;
            console.log(`isInternalUser: ${isInternalUser}, isExternalUser: ${isExternalUser}`);
            if (!isInternalUser && !isExternalUser) {
                throw new common_1.BadRequestException('Utilisateur interne ou externe requis');
            }
            if (isInternalUser && isExternalUser) {
                throw new common_1.BadRequestException('Un utilisateur ne peut pas être à la fois interne et externe');
            }
            const existingNotation = await this.findExistingNotation(data.ressourceId, data.userId, data.externUserId, data.universiteUser);
            if (existingNotation) {
                throw new common_1.BadRequestException('Une notation existe déjà pour cette ressource par cet utilisateur');
            }
            const notationData = {
                ressourceId: data.ressourceId,
                note: data.note,
            };
            if (isInternalUser) {
                notationData.userId = data.userId;
            }
            else {
                notationData.externUserId = data.userId;
                notationData.universiteUser = data.universiteUser;
            }
            const notation = await this.prisma.notation.create({
                data: notationData,
                include: {
                    user: isInternalUser ? {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            email: true,
                        }
                    } : false,
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                        }
                    }
                }
            });
            return {
                data: notation,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Erreur lors de la création de la notation: ${error.message}`);
        }
    }
    async getNotationsByRessourceId(ressourceId, options) {
        try {
            const page = options?.page || 1;
            const limit = options?.limit || 10;
            const offset = (page - 1) * limit;
            const notations = await this.prisma.notation.findMany({
                where: { ressourceId },
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            email: true,
                        }
                    },
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                        }
                    }
                },
                orderBy: { createdAt: 'desc' },
                skip: offset,
                take: limit
            });
            const total = await this.prisma.notation.count({
                where: { ressourceId }
            });
            return {
                data: {
                    notations: notations,
                    pagination: {
                        page,
                        limit,
                        total,
                        totalPages: Math.ceil(total / limit)
                    },
                }
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erreur lors de la récupération des notations: ${error.message}`);
        }
    }
    async getUserNotations(userId, options) {
        try {
            const { page, limit } = options;
            const offset = (page - 1) * limit;
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.NotFoundException('Utilisateur non trouvé');
            }
            const notations = await this.prisma.notation.findMany({
                where: { userId },
                include: {
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            description: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' },
                skip: offset,
                take: limit
            });
            const total = await this.prisma.notation.count({
                where: { userId }
            });
            return {
                data: {
                    notations: notations,
                    pagination: {
                        page,
                        limit,
                        total,
                        totalPages: Math.ceil(total / limit)
                    },
                    user: {
                        id: user.id,
                    }
                }
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Erreur lors de la récupération des notations utilisateur: ${error.message}`);
        }
    }
    async findOneNotation(id) {
        try {
            const notation = await this.prisma.notation.findUnique({
                where: { id },
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            email: true,
                        }
                    },
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            description: true
                        }
                    }
                }
            });
            if (!notation) {
                throw new common_1.NotFoundException('Notation non trouvée');
            }
            return {
                success: true,
                data: notation,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Erreur lors de la récupération de la notation: ${error.message}`);
        }
    }
    async updateNotation(id, data) {
        try {
            const existingNotation = await this.prisma.notation.findUnique({
                where: { id },
                select: {
                    id: true,
                    userId: true,
                    universiteUser: true
                }
            });
            if (!existingNotation) {
                throw new common_1.NotFoundException('Notation non trouvée');
            }
            if (existingNotation.userId && existingNotation.userId !== data.userId) {
                throw new common_1.ForbiddenException('Vous ne pouvez modifier que vos propres notations');
            }
            if (data.note && (data.note < 1 || data.note > 5)) {
                throw new common_1.BadRequestException('La note doit être comprise entre 1 et 5');
            }
            const updateData = {};
            if (data.note !== undefined)
                updateData.note = data.note;
            const updatedNotation = await this.prisma.notation.update({
                where: { id },
                data: updateData,
                include: {
                    user: existingNotation.userId ? {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            email: true,
                        }
                    } : false,
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                        }
                    }
                }
            });
            return {
                data: updatedNotation,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.ForbiddenException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Erreur lors de la mise à jour de la notation: ${error.message}`);
        }
    }
    async deleteNotation(id, userId) {
        try {
            const existingNotation = await this.prisma.notation.findUnique({
                where: { id },
                select: {
                    id: true,
                    userId: true,
                    universiteUser: true
                }
            });
            if (!existingNotation) {
                throw new common_1.NotFoundException('Notation non trouvée');
            }
            if (existingNotation.userId && userId && existingNotation.userId !== userId) {
                throw new common_1.ForbiddenException('Vous ne pouvez supprimer que vos propres notations');
            }
            await this.prisma.notation.delete({
                where: { id }
            });
            return {
                success: true,
                message: 'Notation supprimée avec succès'
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.ForbiddenException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Erreur lors de la suppression de la notation: ${error.message}`);
        }
    }
    async getNotationStats(ressourceId) {
        try {
            const stats = await this.prisma.notation.aggregate({
                where: { ressourceId },
                _avg: { note: true },
                _count: { id: true },
                _min: { note: true },
                _max: { note: true }
            });
            const noteDistribution = await this.prisma.notation.groupBy({
                by: ['note'],
                where: { ressourceId },
                _count: { id: true },
                orderBy: { note: 'asc' }
            });
            const internalCount = await this.prisma.notation.count({
                where: {
                    ressourceId,
                    userId: { not: null }
                }
            });
            const externalCount = await this.prisma.notation.count({
                where: {
                    ressourceId,
                }
            });
            const universiteStats = await this.prisma.notation.groupBy({
                by: ['universiteUser'],
                where: {
                    ressourceId,
                    universiteUser: { not: null }
                },
                _count: { id: true },
                _avg: { note: true }
            });
            return {
                success: true,
                data: {
                    moyenne: stats._avg.note ? Number(stats._avg.note.toFixed(2)) : 0,
                    totalNotations: stats._count.id,
                    noteMin: stats._min.note || 0,
                    noteMax: stats._max.note || 0,
                    repartitionNotes: noteDistribution.reduce((acc, item) => {
                        acc[`note${item.note}`] = item._count.id;
                        return acc;
                    }, {}),
                    utilisateursInternes: internalCount,
                    utilisateursExternes: externalCount,
                    repartitionUniversites: universiteStats.map(stat => ({
                        universite: stat.universiteUser,
                        nombreNotations: stat._count.id,
                        moyenneNote: stat._avg.note ? Number(stat._avg.note.toFixed(2)) : 0
                    }))
                }
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erreur lors de la récupération des statistiques: ${error.message}`);
        }
    }
    async findExistingNotation(ressourceId, userId, externUserId, universiteUser) {
        const whereClause = { ressourceId };
        if (userId) {
            whereClause.userId = userId;
        }
        else if (externUserId && universiteUser) {
            whereClause.externUserId = externUserId;
        }
        return this.prisma.notation.findFirst({ where: whereClause });
    }
};
exports.NotationsService = NotationsService;
exports.NotationsService = NotationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotationsService);
//# sourceMappingURL=notations.service.js.map