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
exports.FiliereService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_1 = require("../../generated/prisma/index.js");
let FiliereService = class FiliereService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createFiliereDto) {
        try {
            const departementExists = await this.prisma.departement.findUnique({
                where: { id: createFiliereDto.departementId }
            });
            if (!departementExists) {
                throw new common_1.NotFoundException(`Département avec l'ID ${createFiliereDto.departementId} non trouvé`);
            }
            const existingFiliere = await this.prisma.filiere.findFirst({
                where: {
                    nom: createFiliereDto.nom,
                    departementId: createFiliereDto.departementId
                }
            });
            if (existingFiliere) {
                throw new common_1.ConflictException('Une filière avec ce nom existe déjà dans ce département');
            }
            return await this.prisma.filiere.create({
                data: createFiliereDto,
                include: {
                    departement: {
                        select: {
                            id: true,
                            nom: true,
                            ufr: {
                                select: {
                                    id: true,
                                    nom: true
                                }
                            }
                        }
                    }
                }
            });
        }
        catch (error) {
            if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ConflictException('Une filière avec ce nom existe déjà dans ce département');
                }
            }
            throw error;
        }
    }
    async findAll(departementId, skip = 0, take = 10) {
        return await this.prisma.filiere.findMany({
            where: departementId ? { departementId } : undefined,
            skip,
            take: Math.min(take, 100),
            include: {
                departement: {
                    select: {
                        id: true,
                        nom: true,
                        ufr: {
                            select: {
                                id: true,
                                nom: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                nom: 'asc'
            }
        });
    }
    async findOne(id) {
        const filiere = await this.prisma.filiere.findUnique({
            where: { id },
            include: {
                departement: {
                    select: {
                        id: true,
                        nom: true,
                        ufr: {
                            select: {
                                id: true,
                                nom: true
                            }
                        }
                    }
                }
            }
        });
        if (!filiere) {
            throw new common_1.NotFoundException(`Filière avec l'ID ${id} non trouvée`);
        }
        return filiere;
    }
    async update(id, updateFiliereDto) {
        try {
            await this.findOne(id);
            if (updateFiliereDto.departementId) {
                const departementExists = await this.prisma.departement.findUnique({
                    where: { id: updateFiliereDto.departementId }
                });
                if (!departementExists) {
                    throw new common_1.NotFoundException(`Département avec l'ID ${updateFiliereDto.departementId} non trouvé`);
                }
            }
            if (updateFiliereDto.nom) {
                const currentFiliere = await this.prisma.filiere.findUnique({
                    where: { id }
                });
                if (!currentFiliere) {
                    throw new common_1.NotFoundException(`Filière avec l'ID ${id} non trouvée`);
                }
                const departementIdToCheck = updateFiliereDto.departementId || currentFiliere.departementId;
                const existingFiliere = await this.prisma.filiere.findFirst({
                    where: {
                        nom: updateFiliereDto.nom,
                        departementId: departementIdToCheck,
                        NOT: { id }
                    }
                });
                if (existingFiliere) {
                    throw new common_1.ConflictException('Une filière avec ce nom existe déjà dans ce département');
                }
            }
            return await this.prisma.filiere.update({
                where: { id },
                data: updateFiliereDto,
                include: {
                    departement: {
                        select: {
                            id: true,
                            nom: true,
                            ufr: {
                                select: {
                                    id: true,
                                    nom: true
                                }
                            }
                        }
                    }
                }
            });
        }
        catch (error) {
            if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ConflictException('Une filière avec ce nom existe déjà dans ce département');
                }
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Filière avec l'ID ${id} non trouvée`);
                }
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            await this.prisma.filiere.delete({
                where: { id }
            });
            return { message: 'Filière supprimée avec succès' };
        }
        catch (error) {
            if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Filière avec l'ID ${id} non trouvée`);
                }
            }
            throw error;
        }
    }
    async findByDepartement(departementId) {
        const departementExists = await this.prisma.departement.findUnique({
            where: { id: departementId }
        });
        if (!departementExists) {
            throw new common_1.NotFoundException(`Département avec l'ID ${departementId} non trouvé`);
        }
        return await this.prisma.filiere.findMany({
            where: { departementId },
            include: {
                departement: {
                    select: {
                        id: true,
                        nom: true,
                        ufr: {
                            select: {
                                id: true,
                                nom: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                nom: 'asc'
            }
        });
    }
    async findByNom(nom) {
        const filiere = await this.prisma.filiere.findFirst({
            where: {
                nom: {
                    equals: nom
                }
            },
            include: {
                departement: {
                    select: {
                        id: true,
                        nom: true,
                        ufr: {
                            select: {
                                id: true,
                                nom: true
                            }
                        }
                    }
                }
            }
        });
        if (!filiere) {
            throw new common_1.NotFoundException(`Filière avec le nom ${nom} non trouvée`);
        }
        return filiere;
    }
    async search(searchTerm) {
        return await this.prisma.filiere.findMany({
            where: {
                OR: [
                    {
                        nom: {
                            contains: searchTerm
                        }
                    },
                    {
                        description: {
                            contains: searchTerm
                        }
                    }
                ]
            },
            include: {
                departement: {
                    select: {
                        id: true,
                        nom: true,
                        ufr: {
                            select: {
                                id: true,
                                nom: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                nom: 'asc'
            }
        });
    }
    async count(departementId) {
        return await this.prisma.filiere.count({
            where: departementId ? { departementId } : undefined
        });
    }
};
exports.FiliereService = FiliereService;
exports.FiliereService = FiliereService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FiliereService);
//# sourceMappingURL=filiere.service.js.map