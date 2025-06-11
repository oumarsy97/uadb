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
exports.DepartementService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_1 = require("../../generated/prisma/index.js");
let DepartementService = class DepartementService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDepartementDto) {
        try {
            const ufrExists = await this.prisma.ufr.findUnique({
                where: { id: createDepartementDto.ufrId }
            });
            if (!ufrExists) {
                throw new common_1.NotFoundException(`UFR avec l'ID ${createDepartementDto.ufrId} non trouvée`);
            }
            return await this.prisma.departement.create({
                data: createDepartementDto,
                include: {
                    ufr: true,
                    filieres: true
                }
            });
        }
        catch (error) {
            if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ConflictException('Un département avec ce nom existe déjà dans cette UFR');
                }
            }
            throw error;
        }
    }
    async findAll(ufrId) {
        return await this.prisma.departement.findMany({
            where: ufrId ? { ufrId } : undefined,
            include: {
                ufr: {
                    select: {
                        id: true,
                        nom: true
                    }
                },
                filieres: {
                    select: {
                        id: true,
                        nom: true
                    }
                }
            },
            orderBy: {
                nom: 'asc'
            }
        });
    }
    async findOne(id) {
        const departement = await this.prisma.departement.findUnique({
            where: { id },
            include: {
                ufr: {
                    select: {
                        id: true,
                        nom: true
                    }
                },
                filieres: {
                    select: {
                        id: true,
                        nom: true
                    }
                }
            }
        });
        if (!departement) {
            throw new common_1.NotFoundException(`Département avec l'ID ${id} non trouvé`);
        }
        return departement;
    }
    async update(id, updateDepartementDto) {
        try {
            await this.findOne(id);
            if (updateDepartementDto.ufrId) {
                const ufrExists = await this.prisma.ufr.findUnique({
                    where: { id: updateDepartementDto.ufrId }
                });
                if (!ufrExists) {
                    throw new common_1.NotFoundException(`UFR avec l'ID ${updateDepartementDto.ufrId} non trouvée`);
                }
            }
            return await this.prisma.departement.update({
                where: { id },
                data: updateDepartementDto,
                include: {
                    ufr: true,
                    filieres: true
                }
            });
        }
        catch (error) {
            if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ConflictException('Un département avec ce nom existe déjà dans cette UFR');
                }
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Département avec l'ID ${id} non trouvé`);
                }
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            const filieresCount = await this.prisma.filiere.count({
                where: { departementId: id }
            });
            if (filieresCount > 0) {
                throw new common_1.ConflictException(`Impossible de supprimer le département. ${filieresCount} filière(s) y sont associées.`);
            }
            await this.prisma.departement.delete({
                where: { id }
            });
            return { message: 'Département supprimé avec succès' };
        }
        catch (error) {
            if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`Département avec l'ID ${id} non trouvé`);
                }
            }
            throw error;
        }
    }
    async findByUfr(ufrId) {
        const ufrExists = await this.prisma.ufr.findUnique({
            where: { id: ufrId }
        });
        if (!ufrExists) {
            throw new common_1.NotFoundException(`UFR avec l'ID ${ufrId} non trouvée`);
        }
        return await this.prisma.departement.findMany({
            where: { ufrId },
            include: {
                ufr: {
                    select: {
                        id: true,
                        nom: true
                    }
                },
                filieres: {
                    select: {
                        id: true,
                        nom: true
                    }
                }
            },
            orderBy: {
                nom: 'asc'
            }
        });
    }
    async findByNom(nom) {
        const departement = await this.prisma.departement.findFirst({
            where: {
                nom: {
                    equals: nom
                }
            },
            include: {
                ufr: {
                    select: {
                        id: true,
                        nom: true
                    }
                },
                filieres: {
                    select: {
                        id: true,
                        nom: true
                    }
                }
            }
        });
        if (!departement) {
            throw new common_1.NotFoundException(`Département avec le nom ${nom} non trouvé`);
        }
        return departement;
    }
    async search(searchTerm) {
        return await this.prisma.departement.findMany({
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
                ufr: {
                    select: {
                        id: true,
                        nom: true
                    }
                },
                filieres: {
                    select: {
                        id: true,
                        nom: true
                    }
                }
            },
            orderBy: {
                nom: 'asc'
            }
        });
    }
    async count(ufrId) {
        return await this.prisma.departement.count({
            where: ufrId ? { ufrId } : undefined
        });
    }
};
exports.DepartementService = DepartementService;
exports.DepartementService = DepartementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartementService);
//# sourceMappingURL=departement.service.js.map