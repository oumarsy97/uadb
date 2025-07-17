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
exports.ReglePretService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReglePretService = class ReglePretService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDto) {
        const premiereUniversite = await this.prisma.universite.findFirst({
            orderBy: {
                createdAt: 'asc',
            },
        });
        if (!premiereUniversite) {
            throw new common_1.NotFoundException(`Aucune université trouvée dans le système`);
        }
        const existingRegle = await this.prisma.reglePret.findUnique({
            where: {
                universiteId_roleUtilisateur: {
                    universiteId: premiereUniversite.id,
                    roleUtilisateur: createDto.roleUtilisateur,
                },
            },
        });
        if (existingRegle) {
            throw new common_1.ConflictException(`Une règle de prêt existe déjà pour le rôle ${createDto.roleUtilisateur} dans cette université`);
        }
        const regle = await this.prisma.reglePret.create({
            data: {
                universiteId: premiereUniversite.id,
                roleUtilisateur: createDto.roleUtilisateur,
                nombreMaxOuvrages: createDto.nombreMaxOuvrages ?? 2,
                dureeEmpruntJours: createDto.dureeEmpruntJours ?? 15,
                nbRenouvellements: createDto.nbRenouvellements ?? 1,
                penaliteRetardJours: createDto.penaliteRetardJours ?? true,
                estActif: createDto.estActif ?? true,
            },
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
        });
        return this.formatResponse(regle);
    }
    async findAll(page, limit, search) {
        const where = search
            ? {
                OR: [
                    { universite: { nom: { contains: search, mode: 'insensitive' } } },
                    { roleUtilisateur: search },
                ],
            }
            : {};
        const regles = await this.prisma.reglePret.findMany({
            where,
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
            orderBy: {
                updatedAt: 'desc',
            },
            ...(page && limit ? {
                skip: (page - 1) * limit,
                take: limit,
            } : {}),
        });
        return regles.map(regle => this.formatResponse(regle));
    }
    async findOne(id) {
        const regle = await this.prisma.reglePret.findUnique({
            where: { id },
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
        });
        if (!regle) {
            throw new common_1.NotFoundException(`Règle de prêt avec l'ID ${id} non trouvée`);
        }
        return this.formatResponse(regle);
    }
    async findByUniversiteId(universiteId) {
        const regles = await this.prisma.reglePret.findMany({
            where: { universiteId },
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
            orderBy: {
                roleUtilisateur: 'asc',
            },
        });
        return regles.map(regle => this.formatResponse(regle));
    }
    async findByUniversiteAndRole(universiteId, roleUtilisateur) {
        const regle = await this.prisma.reglePret.findUnique({
            where: {
                universiteId_roleUtilisateur: {
                    universiteId,
                    roleUtilisateur,
                },
            },
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
        });
        if (!regle) {
            throw new common_1.NotFoundException(`Aucune règle de prêt trouvée pour le rôle ${roleUtilisateur} dans l'université ${universiteId}`);
        }
        return this.formatResponse(regle);
    }
    async findActiveRegles() {
        const regles = await this.prisma.reglePret.findMany({
            where: { estActif: true },
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
            orderBy: {
                roleUtilisateur: 'asc',
            },
        });
        return regles.map(regle => this.formatResponse(regle));
    }
    async findInactiveRegles() {
        const regles = await this.prisma.reglePret.findMany({
            where: { estActif: false },
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
            orderBy: {
                roleUtilisateur: 'asc',
            },
        });
        return regles.map(regle => this.formatResponse(regle));
    }
    async update(id, updateDto) {
        const existingRegle = await this.prisma.reglePret.findUnique({
            where: { id },
        });
        if (!existingRegle) {
            throw new common_1.NotFoundException(`Règle de prêt avec l'ID ${id} non trouvée`);
        }
        if (updateDto.roleUtilisateur && updateDto.roleUtilisateur !== existingRegle.roleUtilisateur) {
            const conflictRegle = await this.prisma.reglePret.findUnique({
                where: {
                    universiteId_roleUtilisateur: {
                        universiteId: existingRegle.universiteId,
                        roleUtilisateur: updateDto.roleUtilisateur,
                    },
                },
            });
            if (conflictRegle) {
                throw new common_1.ConflictException(`Une règle de prêt existe déjà pour le rôle ${updateDto.roleUtilisateur} dans cette université`);
            }
        }
        const regle = await this.prisma.reglePret.update({
            where: { id },
            data: updateDto,
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
        });
        return this.formatResponse(regle);
    }
    async activate(id) {
        return this.update(id, { estActif: true });
    }
    async deactivate(id) {
        return this.update(id, { estActif: false });
    }
    async remove(id) {
        const regle = await this.prisma.reglePret.findUnique({
            where: { id },
        });
        if (!regle) {
            throw new common_1.NotFoundException(`Règle de prêt avec l'ID ${id} non trouvée`);
        }
        await this.prisma.reglePret.delete({
            where: { id },
        });
    }
    formatResponse(regle) {
        return {
            id: regle.id,
            universiteId: regle.universiteId,
            roleUtilisateur: regle.roleUtilisateur,
            nombreMaxOuvrages: regle.nombreMaxOuvrages,
            dureeEmpruntJours: regle.dureeEmpruntJours,
            nbRenouvellements: regle.nbRenouvellements,
            penaliteRetardJours: regle.penaliteRetardJours,
            estActif: regle.estActif,
            createdAt: regle.createdAt,
            updatedAt: regle.updatedAt,
            universite: regle.universite ? {
                id: regle.universite.id,
                nom: regle.universite.nom,
            } : undefined,
        };
    }
};
exports.ReglePretService = ReglePretService;
exports.ReglePretService = ReglePretService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReglePretService);
//# sourceMappingURL=regle-pret.service.js.map