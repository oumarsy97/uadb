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
exports.PolitiqueBibliothequeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PolitiqueBibliothequeService = class PolitiqueBibliothequeService {
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
        const politique = await this.prisma.politiqueBibliotheque.create({
            data: {
                universiteId: premiereUniversite.id,
                politiqueRetour: createDto.politiqueRetour,
                politiquePerte: createDto.politiquePerte,
                penaliteRetard: createDto.penaliteRetard,
                estActive: createDto.estActive ?? true,
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
        return this.formatResponse(politique);
    }
    async findAll() {
        const politiques = await this.prisma.politiqueBibliotheque.findMany({
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
            orderBy: {
                dateMiseAJour: 'desc',
            },
        });
        return politiques.map(politique => this.formatResponse(politique));
    }
    async findOne(id) {
        const politique = await this.prisma.politiqueBibliotheque.findUnique({
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
        if (!politique) {
            throw new common_1.NotFoundException(`Politique de bibliothèque avec l'ID ${id} non trouvée`);
        }
        return this.formatResponse(politique);
    }
    async findByUniversiteId(universiteId) {
        const politique = await this.prisma.politiqueBibliotheque.findFirst({
            where: {
                universiteId,
                estActive: true,
            },
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'asc',
            },
        });
        if (!politique) {
            throw new common_1.NotFoundException(`Aucune politique de bibliothèque active trouvée pour l'université ${universiteId}`);
        }
        return this.formatResponse(politique);
    }
    async findAllByUniversiteId(universiteId) {
        const politiques = await this.prisma.politiqueBibliotheque.findMany({
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
                createdAt: 'asc',
            },
        });
        return politiques.map(politique => this.formatResponse(politique));
    }
    async update(id, updateDto) {
        const existingPolitique = await this.prisma.politiqueBibliotheque.findUnique({
            where: { id },
        });
        if (!existingPolitique) {
            throw new common_1.NotFoundException(`Politique de bibliothèque avec l'ID ${id} non trouvée`);
        }
        const politique = await this.prisma.politiqueBibliotheque.update({
            where: { id },
            data: {
                ...updateDto,
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
        return this.formatResponse(politique);
    }
    async deactivate(id) {
        const politique = await this.prisma.politiqueBibliotheque.update({
            where: { id },
            data: {
                estActive: false,
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
        if (!politique) {
            throw new common_1.NotFoundException(`Politique de bibliothèque avec l'ID ${id} non trouvée`);
        }
        return this.formatResponse(politique);
    }
    async remove(id) {
        const politique = await this.prisma.politiqueBibliotheque.findUnique({
            where: { id },
        });
        if (!politique) {
            throw new common_1.NotFoundException(`Politique de bibliothèque avec l'ID ${id} non trouvée`);
        }
        await this.prisma.politiqueBibliotheque.delete({
            where: { id },
        });
    }
    formatResponse(politique) {
        return {
            id: politique.id,
            universiteId: politique.universiteId,
            politiqueRetour: politique.politiqueRetour,
            politiquePerte: politique.politiquePerte,
            penaliteRetard: politique.penaliteRetard,
            estActive: politique.estActive,
            dateMiseAJour: politique.dateMiseAJour,
            createdAt: politique.createdAt,
            updatedAt: politique.updatedAt,
            universite: politique.universite ? {
                id: politique.universite.id,
                nom: politique.universite.nom,
            } : undefined,
        };
    }
};
exports.PolitiqueBibliothequeService = PolitiqueBibliothequeService;
exports.PolitiqueBibliothequeService = PolitiqueBibliothequeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PolitiqueBibliothequeService);
//# sourceMappingURL=politique-bibliotheque.service.js.map