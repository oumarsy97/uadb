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
exports.CategorieService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategorieService = class CategorieService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategorieDto) {
        try {
            return await this.prisma.categorie.create({
                data: {
                    libelle: createCategorieDto.libelle,
                    description: createCategorieDto.description,
                },
                include: {
                    ressources: true,
                },
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Une catégorie avec ce libellé existe déjà');
            }
            throw error;
        }
    }
    async findAll(skip, take) {
        return await this.prisma.categorie.findMany({
            skip: skip || 0,
            take: take || 10,
            include: {
                ressources: true,
            },
            orderBy: {
                dateCreation: 'desc',
            },
        });
    }
    async findOne(id) {
        const categorie = await this.prisma.categorie.findUnique({
            where: { id },
            include: {
                ressources: true,
            },
        });
        if (!categorie) {
            throw new common_1.NotFoundException(`Catégorie avec l'ID ${id} non trouvée`);
        }
        return categorie;
    }
    async findByLibelle(libelle) {
        const categorie = await this.prisma.categorie.findUnique({
            where: { libelle },
            include: {
                ressources: true,
            },
        });
        if (!categorie) {
            throw new common_1.NotFoundException(`Catégorie avec le libellé ${libelle} non trouvée`);
        }
        return categorie;
    }
    async update(id, updateCategorieDto) {
        await this.findOne(id);
        try {
            return await this.prisma.categorie.update({
                where: { id },
                data: updateCategorieDto,
                include: {
                    ressources: true,
                },
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Une catégorie avec ce libellé existe déjà');
            }
            throw error;
        }
    }
    async remove(id) {
        await this.findOne(id);
        return await this.prisma.categorie.delete({
            where: { id },
            include: {
                ressources: true,
            },
        });
    }
    async count() {
        return await this.prisma.categorie.count();
    }
    async search(searchTerm) {
        return await this.prisma.categorie.findMany({
            where: {
                OR: [
                    { libelle: { contains: searchTerm } },
                    { description: { contains: searchTerm } },
                ],
            },
            include: {
                ressources: true,
            },
            orderBy: {
                dateCreation: 'desc',
            },
        });
    }
};
exports.CategorieService = CategorieService;
exports.CategorieService = CategorieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategorieService);
//# sourceMappingURL=categorie.service.js.map