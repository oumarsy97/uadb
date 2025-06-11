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
exports.UfrService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UfrService = class UfrService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUfrDto) {
        try {
            const universite = await this.prisma.universite.findUnique({
                where: { id: createUfrDto.universiteId }
            });
            if (!universite) {
                throw new common_1.NotFoundException(`Université avec l'ID ${createUfrDto.universiteId} non trouvée`);
            }
            return await this.prisma.ufr.create({
                data: {
                    nom: createUfrDto.nom,
                    description: createUfrDto.description,
                    universiteId: createUfrDto.universiteId,
                },
                include: {
                    universite: true,
                    departements: true,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la création de l\'UFR');
        }
    }
    async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.prisma.ufr.findMany({
                skip,
                take: limit,
                include: {
                    universite: {
                        select: {
                            id: true,
                            nom: true,
                        },
                    },
                    departements: {
                        select: {
                            id: true,
                            nom: true,
                        },
                    },
                },
                orderBy: {
                    nom: 'asc',
                },
            }),
            this.prisma.ufr.count(),
        ]);
        return {
            data,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id) {
        const ufr = await this.prisma.ufr.findUnique({
            where: { id },
            include: {
                universite: true,
                departements: {
                    include: {
                        filieres: {
                            select: {
                                id: true,
                                nom: true,
                            },
                        },
                    },
                },
            },
        });
        if (!ufr) {
            throw new common_1.NotFoundException(`UFR avec l'ID ${id} non trouvée`);
        }
        return ufr;
    }
    async findByUniversite(universiteId) {
        const universite = await this.prisma.universite.findUnique({
            where: { id: universiteId }
        });
        if (!universite) {
            throw new common_1.NotFoundException(`Université avec l'ID ${universiteId} non trouvée`);
        }
        return await this.prisma.ufr.findMany({
            where: { universiteId },
            include: {
                departements: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
            orderBy: {
                nom: 'asc',
            },
        });
    }
    async update(id, updateUfrDto) {
        try {
            const existingUfr = await this.prisma.ufr.findUnique({
                where: { id }
            });
            if (!existingUfr) {
                throw new common_1.NotFoundException(`UFR avec l'ID ${id} non trouvée`);
            }
            if (updateUfrDto.universiteId && updateUfrDto.universiteId !== existingUfr.universiteId) {
                const universite = await this.prisma.universite.findUnique({
                    where: { id: updateUfrDto.universiteId }
                });
                if (!universite) {
                    throw new common_1.NotFoundException(`Université avec l'ID ${updateUfrDto.universiteId} non trouvée`);
                }
            }
            return await this.prisma.ufr.update({
                where: { id },
                data: updateUfrDto,
                include: {
                    universite: true,
                    departements: true,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la mise à jour de l\'UFR');
        }
    }
    async remove(id) {
        try {
            const ufr = await this.prisma.ufr.findUnique({
                where: { id },
                include: {
                    departements: true,
                },
            });
            if (!ufr) {
                throw new common_1.NotFoundException(`UFR avec l'ID ${id} non trouvée`);
            }
            if (ufr.departements.length > 0) {
                throw new common_1.BadRequestException(`Impossible de supprimer l'UFR. Elle contient ${ufr.departements.length} département(s). Supprimez d'abord les départements.`);
            }
            await this.prisma.ufr.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la suppression de l\'UFR');
        }
    }
    async search(query) {
        return await this.prisma.ufr.findMany({
            where: {
                OR: [
                    {
                        nom: {
                            contains: query,
                        },
                    },
                    {
                        description: {
                            contains: query,
                        },
                    },
                ],
            },
            include: {
                universite: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
                departements: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
            orderBy: {
                nom: 'asc',
            },
        });
    }
    async getStats() {
        const [totalUfr, ufrParUniversiteRaw, universites] = await Promise.all([
            this.prisma.ufr.count(),
            this.prisma.ufr.groupBy({
                by: ['universiteId'],
                _count: {
                    id: true,
                },
            }),
            this.prisma.universite.findMany({
                select: {
                    id: true,
                    nom: true,
                },
            }),
        ]);
        const universiteMap = new Map(universites.map(u => [u.id, u.nom]));
        return {
            totalUfr,
            ufrParUniversite: ufrParUniversiteRaw.map(item => ({
                universite: universiteMap.get(item.universiteId) || 'Inconnu',
                count: item._count.id,
            })),
        };
    }
};
exports.UfrService = UfrService;
exports.UfrService = UfrService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UfrService);
//# sourceMappingURL=ufr.service.js.map