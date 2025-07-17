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
exports.FavorisService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let FavorisService = class FavorisService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createFavorisDto) {
        const { ressourceId, universiteRess, universiteUser, userId } = createFavorisDto;
        if (!userId) {
            throw new Error("userId is required and must be a string.");
        }
        try {
            const currentUniversity = process.env.CURRENT_UNIVERSITY || 'uadb';
            const isExternal = universiteRess && universiteRess !== currentUniversity;
            let existingFavoris;
            let favorisData;
            if (isExternal) {
                existingFavoris = await this.prismaService.favori.findUnique({
                    where: {
                        userId_externalRessourceId_universiteRess: {
                            userId,
                            externalRessourceId: ressourceId,
                            universiteRess,
                        },
                    },
                });
                favorisData = {
                    userId,
                    ressourceId: null,
                    externalRessourceId: ressourceId,
                    universiteRess,
                };
            }
            else {
                existingFavoris = await this.prismaService.favori.findUnique({
                    where: {
                        userId_ressourceId: {
                            userId,
                            ressourceId,
                        },
                    },
                });
                favorisData = {
                    userId,
                    ressourceId,
                    externalRessourceId: null,
                    universiteRess: currentUniversity,
                };
            }
            if (existingFavoris) {
                return await this.prismaService.favori.delete({
                    where: { id: existingFavoris.id },
                });
            }
            else {
                return await this.prismaService.favori.create({
                    data: favorisData,
                    include: {
                        ressource: true,
                        user: true,
                    },
                });
            }
        }
        catch (error) {
            console.error('Erreur création favori:', error);
            throw new Error(`Erreur lors de la gestion du favori: ${error.message}`);
        }
    }
    async findAllByUser(userId) {
        const favoris = await this.prismaService.favori.findMany({
            where: { userId },
            include: {
                ressource: true,
                user: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        const favorisLocaux = favoris.filter(f => f.ressourceId !== null);
        const favorisExternes = favoris.filter(f => f.externalRessourceId !== null);
        return {
            favorisLocaux: favorisLocaux.map(f => ({
                ...f,
                type: 'local',
                resourceId: f.ressourceId,
                ressourceData: f.ressource,
                isLocal: true,
            })),
            favorisExternes: favorisExternes.map(f => ({
                ...f,
                type: 'external',
                resourceId: f.externalRessourceId,
                ressourceData: {
                    id: f.externalRessourceId,
                    universiteSource: f.universiteRess,
                },
                isLocal: false,
                sourceUniversite: f.universiteRess,
            })),
            total: favoris.length,
        };
    }
    async findAll() {
        const favoris = await this.prismaService.favori.findMany({
            include: {
                ressource: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        return favoris.map(favori => ({
            ...favori,
            isRessourceExternal: favori.ressourceId === null,
            resourceId: favori.ressourceId || favori.externalRessourceId,
            ressourceInfo: favori.ressource || {
                id: favori.externalRessourceId,
                isExternal: true,
                universite: favori.universiteRess,
            },
        }));
    }
    async isFavorite(userId, ressourceId, universiteRess) {
        const currentUniversity = process.env.CURRENT_UNIVERSITY || 'uadb';
        const isExternal = universiteRess && universiteRess !== currentUniversity;
        let favori;
        if (isExternal) {
            favori = await this.prismaService.favori.findUnique({
                where: {
                    userId_externalRessourceId_universiteRess: {
                        userId,
                        externalRessourceId: ressourceId,
                        universiteRess,
                    },
                },
            });
        }
        else {
            favori = await this.prismaService.favori.findUnique({
                where: {
                    userId_ressourceId: {
                        userId,
                        ressourceId,
                    },
                },
            });
        }
        return favori !== null;
    }
    async findByUniversite(universiteRess) {
        return await this.prismaService.favori.findMany({
            where: { universiteRess },
            include: {
                ressource: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findExternalFavoris() {
        return await this.prismaService.favori.findMany({
            where: {
                externalRessourceId: { not: null },
            },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findLocalFavoris() {
        return await this.prismaService.favori.findMany({
            where: {
                ressourceId: { not: null },
            },
            include: {
                ressource: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getStats() {
        const [totalFavoris, favorisLocaux, favorisExternes,] = await Promise.all([
            this.prismaService.favori.count(),
            this.prismaService.favori.count({
                where: { ressourceId: { not: null } },
            }),
            this.prismaService.favori.count({
                where: { externalRessourceId: { not: null } },
            }),
        ]);
        const universiteStats = await this.prismaService.favori.groupBy({
            by: ['universiteRess'],
            _count: {
                id: true,
            },
            where: {
                universiteRess: { not: null },
            },
        });
        return {
            total: totalFavoris,
            locaux: favorisLocaux,
            externes: favorisExternes,
            parUniversite: universiteStats.map(stat => ({
                universite: stat.universiteRess,
                count: stat._count.id,
            })),
        };
    }
    findOne(id) {
        return this.prismaService.favori.findUnique({
            where: { id },
            include: {
                ressource: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
        });
    }
    async update(id, updateFavorisDto) {
        return await this.prismaService.favori.update({
            where: { id },
            data: updateFavorisDto,
        });
    }
    async remove(id) {
        return await this.prismaService.favori.delete({
            where: { id },
        });
    }
    async removeAllByUser(userId) {
        return await this.prismaService.favori.deleteMany({
            where: { userId },
        });
    }
    async removeAllByRessource(ressourceId) {
        return await this.prismaService.favori.deleteMany({
            where: { ressourceId },
        });
    }
    async removeAllByExternalRessource(externalRessourceId, universiteRess) {
        return await this.prismaService.favori.deleteMany({
            where: {
                externalRessourceId,
                universiteRess,
            },
        });
    }
    async getFavoritesByRessource(ressourceId) {
        const favoris = await this.prismaService.favori.findMany({
            where: { ressourceId },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        return favoris.map(favori => ({
            ...favori,
            userInfo: favori.user,
            type: 'local',
        }));
    }
    async getFavoritesByExternalRessource(externalRessourceId, universiteRess) {
        const favoris = await this.prismaService.favori.findMany({
            where: {
                externalRessourceId,
                universiteRess,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        return favoris.map(favori => ({
            ...favori,
            userInfo: favori.user,
            type: 'external',
            ressourceData: {
                id: favori.externalRessourceId,
                universiteSource: favori.universiteRess,
            },
        }));
    }
    getResourceId(favori) {
        return favori.ressourceId || favori.externalRessourceId;
    }
    isExternalFavorite(favori) {
        return favori.externalRessourceId !== null;
    }
};
exports.FavorisService = FavorisService;
exports.FavorisService = FavorisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FavorisService);
//# sourceMappingURL=favoris.service.js.map