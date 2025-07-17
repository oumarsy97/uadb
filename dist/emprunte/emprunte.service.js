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
exports.EmprunteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_1 = require("../../generated/prisma/index.js");
let EmprunteService = class EmprunteService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createEmprunt(dto) {
        const exemplaires = await this.prisma.exemplairePhysique.findMany({
            where: {
                id: { in: dto.exemplaireIds },
                nombreDisponible: { gt: 0 },
            }
        });
        console.log(`Exemplaires trouvés: ${exemplaires.length}, demandés: ${dto.exemplaireIds.length}`);
        if (exemplaires.length !== dto.exemplaireIds.length) {
            throw new common_1.BadRequestException('Certains exemplaires ne sont pas disponibles');
        }
        const isEmpruntExterne = dto.universiteEmprunteur && dto.universiteEmprunteur !== 'uadb';
        let dureeEmprunt = dto.dureeEmprunt || 14;
        console.log(dto.empreunteurId);
        const dateRetourPrevue = new Date();
        dateRetourPrevue.setDate(dateRetourPrevue.getDate() + dureeEmprunt);
        const result = await this.prisma.$transaction(async (prisma) => {
            const emprunt = await prisma.emprunt.create({
                data: {
                    userId: dto.empreunteurId,
                    dateRetourPrevue,
                    universiteEmprunteur: dto.universiteEmprunteur || 'LOCALE',
                    statut: prisma_1.StatutEmprunt.EN_COURS,
                    exemplaireId: exemplaires[0].id
                }
            });
            const empruntExemplaires = await Promise.all(dto.exemplaireIds.map(exemplaireId => prisma.empruntExemplaire.create({
                data: {
                    empruntId: emprunt.id,
                    exemplaireId,
                    dateRetourPrevue
                }
            })));
            await prisma.exemplairePhysique.updateMany({
                where: { id: { in: dto.exemplaireIds } },
                data: { nombreDisponible: { decrement: 1 } }
            });
            return { emprunt, empruntExemplaires };
        });
        return this.getEmpruntById(result.emprunt.id);
    }
    async returnExemplaires(dto) {
        const emprunt = await this.prisma.emprunt.findUnique({
            where: { id: dto.empruntId },
            include: {
                empruntExemplaires: {
                    include: { exemplaire: true }
                }
            }
        });
        if (!emprunt) {
            throw new common_1.NotFoundException('Emprunt non trouvé');
        }
        const exemplairesToReturn = emprunt.empruntExemplaires.filter(ee => dto.exemplaireIds.includes(ee.exemplaireId) && ee.statut === prisma_1.StatutEmprunt.EN_COURS);
        if (exemplairesToReturn.length === 0) {
            throw new common_1.BadRequestException('Aucun exemplaire valide à retourner');
        }
        const dateRetourEffective = new Date();
        await this.prisma.$transaction(async (prisma) => {
            await prisma.empruntExemplaire.updateMany({
                where: {
                    empruntId: dto.empruntId,
                    exemplaireId: { in: dto.exemplaireIds }
                },
                data: {
                    statut: prisma_1.StatutEmprunt.RETOURNE,
                    dateRetourEffective,
                    commentaire: dto.commentaire
                }
            });
            if (dto.nouvelEtat) {
                await prisma.exemplairePhysique.updateMany({
                    where: { id: { in: dto.exemplaireIds } },
                    data: {
                        etat: dto.nouvelEtat,
                        nombreDisponible: { increment: 1 }
                    }
                });
            }
            else {
                await prisma.exemplairePhysique.updateMany({
                    where: { id: { in: dto.exemplaireIds } },
                    data: {}
                });
            }
            const empruntsRestants = await prisma.empruntExemplaire.count({
                where: {
                    empruntId: dto.empruntId,
                    statut: prisma_1.StatutEmprunt.EN_COURS
                }
            });
            if (empruntsRestants === 0) {
                await prisma.emprunt.update({
                    where: { id: dto.empruntId },
                    data: {
                        statut: prisma_1.StatutEmprunt.RETOURNE,
                        dateRetourEffective
                    }
                });
            }
        });
        return this.getEmpruntById(dto.empruntId);
    }
    async extendEmprunt(dto) {
        const emprunt = await this.prisma.emprunt.findUnique({
            where: { id: dto.empruntId },
            include: {
                empruntExemplaires: {
                    where: { statut: prisma_1.StatutEmprunt.EN_COURS },
                    include: { exemplaire: true }
                }
            }
        });
        if (!emprunt) {
            throw new common_1.NotFoundException('Emprunt non trouvé');
        }
        if (emprunt.statut !== prisma_1.StatutEmprunt.EN_COURS) {
            throw new common_1.BadRequestException('Cet emprunt ne peut pas être prolongé');
        }
        const nouvelleDateRetour = new Date();
        nouvelleDateRetour.setDate(nouvelleDateRetour.getDate() + dto.nouvelleDuree);
        await this.prisma.$transaction(async (prisma) => {
            await prisma.emprunt.update({
                where: { id: dto.empruntId },
                data: {
                    dateRetourPrevue: nouvelleDateRetour,
                }
            });
            await prisma.empruntExemplaire.updateMany({
                where: {
                    empruntId: dto.empruntId,
                    statut: prisma_1.StatutEmprunt.EN_COURS
                },
                data: {
                    dateRetourPrevue: nouvelleDateRetour
                }
            });
        });
        return this.getEmpruntById(dto.empruntId);
    }
    async getEmpruntById(id) {
        const emprunt = await this.prisma.emprunt.findUnique({
            where: { id },
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
                    include: {
                        exemplaire: {
                            include: {
                                ressource: {
                                    select: {
                                        id: true,
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
        if (!emprunt) {
            throw new common_1.NotFoundException('Emprunt non trouvé');
        }
        return emprunt;
    }
    async getEmprunts(params) {
        const { userId, statut, universiteEmprunteur, page = 1, limit = 10, search } = params;
        const pageNum = typeof page === 'string' ? parseInt(page, 10) : page;
        const limitNum = typeof limit === 'string' ? parseInt(limit, 10) : limit;
        const validPage = Math.max(1, pageNum || 1);
        const validLimit = Math.max(1, Math.min(100, limitNum || 10));
        const skip = (validPage - 1) * validLimit;
        const where = {};
        if (userId)
            where.userId = userId;
        if (statut)
            where.statut = statut;
        if (universiteEmprunteur)
            where.universiteEmprunteur = universiteEmprunteur;
        if (search) {
            where.OR = [
                {
                    user: {
                        OR: [
                            { nom: { contains: search, mode: 'insensitive' } },
                            { prenom: { contains: search, mode: 'insensitive' } },
                            { email: { contains: search, mode: 'insensitive' } }
                        ]
                    }
                },
                {
                    empruntExemplaires: {
                        some: {
                            exemplaire: {
                                ressource: {
                                    OR: [
                                        { titre: { contains: search, mode: 'insensitive' } },
                                        { auteur: { contains: search, mode: 'insensitive' } },
                                        { isbn: { contains: search, mode: 'insensitive' } }
                                    ]
                                }
                            }
                        }
                    }
                }
            ];
        }
        const [emprunts, total] = await Promise.all([
            this.prisma.emprunt.findMany({
                where,
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
                        include: {
                            exemplaire: {
                                include: {
                                    ressource: {
                                        select: {
                                            id: true,
                                            titre: true,
                                            auteur: true,
                                            isbnglobale: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                skip,
                take: validLimit,
                orderBy: { dateEmprunt: 'desc' }
            }),
            this.prisma.emprunt.count({ where })
        ]);
        return {
            data: emprunts,
            meta: {
                total,
                page: validPage,
                limit: validLimit,
                totalPages: Math.ceil(total / validLimit)
            }
        };
    }
    async getEmpruntsEnRetard() {
        const aujourd = new Date();
        return this.prisma.emprunt.findMany({
            where: {
                statut: prisma_1.StatutEmprunt.EN_COURS,
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
                    where: { statut: prisma_1.StatutEmprunt.EN_COURS },
                    include: {
                        exemplaire: {
                            include: {
                                ressource: {
                                    select: {
                                        id: true,
                                        titre: true,
                                        auteur: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: { dateRetourPrevue: 'asc' }
        });
    }
    async getEmpruntStats() {
        const [total, enCours, retournes, enRetard, externes] = await Promise.all([
            this.prisma.emprunt.count(),
            this.prisma.emprunt.count({ where: { statut: prisma_1.StatutEmprunt.EN_COURS } }),
            this.prisma.emprunt.count({ where: { statut: prisma_1.StatutEmprunt.RETOURNE } }),
            this.prisma.emprunt.count({
                where: {
                    statut: prisma_1.StatutEmprunt.EN_COURS,
                    dateRetourPrevue: { lt: new Date() }
                }
            }),
            this.prisma.emprunt.count({
                where: { universiteEmprunteur: { not: 'LOCALE' } }
            })
        ]);
        return {
            totalEmprunts: total,
            empruntsEnCours: enCours,
            empruntsEnRetard: enRetard,
            empruntsRetournes: retournes,
            empruntsExternes: externes
        };
    }
    async markEmpruntsEnRetard() {
        const aujourd = new Date();
        const result = await this.prisma.$transaction(async (prisma) => {
            const empruntsEnRetard = await prisma.emprunt.updateMany({
                where: {
                    statut: prisma_1.StatutEmprunt.EN_COURS,
                    dateRetourPrevue: { lt: aujourd }
                },
                data: { statut: prisma_1.StatutEmprunt.RETARD }
            });
            await prisma.empruntExemplaire.updateMany({
                where: {
                    statut: prisma_1.StatutEmprunt.EN_COURS,
                    dateRetourPrevue: { lt: aujourd }
                },
                data: { statut: prisma_1.StatutEmprunt.RETARD }
            });
            return empruntsEnRetard;
        });
        return result;
    }
    async checkEmpruntExterneLimits(exemplaireIds, userId) {
        const exemplaires = await this.prisma.exemplairePhysique.findMany({
            where: { id: { in: exemplaireIds } }
        });
        const empruntsExternesEnCours = await this.prisma.emprunt.count({
            where: {
                userId,
                statut: prisma_1.StatutEmprunt.EN_COURS,
                universiteEmprunteur: { not: 'LOCALE' }
            }
        });
        if (empruntsExternesEnCours >= 3) {
            throw new common_1.ForbiddenException('Limite d\'emprunts externes atteinte');
        }
    }
    async getUserEmpruntHistory(userId, page = 1, limit = 10) {
        const pageNum = typeof page === 'string' ? parseInt(page, 10) : page;
        const limitNum = typeof limit === 'string' ? parseInt(limit, 10) : limit;
        const validPage = Math.max(1, pageNum || 1);
        const validLimit = Math.max(1, Math.min(100, limitNum || 10));
        const skip = (validPage - 1) * validLimit;
        const [emprunts, total] = await Promise.all([
            this.prisma.emprunt.findMany({
                where: { userId },
                include: {
                    empruntExemplaires: {
                        include: {
                            exemplaire: {
                                include: {
                                    ressource: {
                                        select: {
                                            id: true,
                                            titre: true,
                                            auteur: true,
                                            isbnglobale: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                skip,
                take: validLimit,
                orderBy: { dateEmprunt: 'desc' }
            }),
            this.prisma.emprunt.count({ where: { userId } })
        ]);
        return {
            data: emprunts,
            meta: {
                total,
                page: validPage,
                limit: validLimit,
                totalPages: Math.ceil(total / validLimit)
            }
        };
    }
};
exports.EmprunteService = EmprunteService;
exports.EmprunteService = EmprunteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmprunteService);
//# sourceMappingURL=emprunte.service.js.map