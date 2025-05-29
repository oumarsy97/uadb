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
exports.ConventionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ConventionService = class ConventionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createConventionDto) {
        if (createConventionDto.universiteId1 === createConventionDto.universiteId2) {
            throw new Error('Les universités doivent être différentes');
        }
        const existingConvention = this.prisma.conventionInteruniversitaire.findFirst({
            where: {
                OR: [
                    {
                        universiteId1: createConventionDto.universiteId1,
                        universiteId2: createConventionDto.universiteId2,
                    },
                    {
                        universiteId1: createConventionDto.universiteId2,
                        universiteId2: createConventionDto.universiteId1,
                    },
                ],
            },
        });
        if (await existingConvention) {
            throw new Error('Une convention existe déjà entre ces universités');
        }
        return this.prisma.conventionInteruniversitaire.create({
            data: {
                universiteId1: createConventionDto.universiteId1,
                universiteId2: createConventionDto.universiteId2,
                dateDebut: createConventionDto.dateDebut || new Date(),
                dateFin: createConventionDto.dateFin,
                typeConvention: createConventionDto.typeConvention,
                detailsConvention: createConventionDto.detailsConvention,
                estActive: true,
            },
        });
    }
    findAll(page, limit, search) {
        const skip = ((page || 1) - 1) * (limit || 10);
        return this.prisma.conventionInteruniversitaire.findMany({
            skip,
            take: limit,
        });
    }
    findOne(id) {
        return this.prisma.conventionInteruniversitaire.findUnique({
            where: { id: id },
        });
    }
    update(id, updateConventionDto) {
        return this.prisma.conventionInteruniversitaire.update({
            where: { id: id },
            data: {
                dateFin: updateConventionDto?.dateFin,
                typeConvention: updateConventionDto?.typeConvention,
                detailsConvention: updateConventionDto?.detailsConvention,
            },
        });
    }
    remove(id) {
        return this.prisma.conventionInteruniversitaire.delete({
            where: { id: id },
        });
    }
    async findActiveConventions() {
        return this.prisma.conventionInteruniversitaire.findMany({
            where: { estActive: true },
        });
    }
    async findInactiveConventions() {
        return this.prisma.conventionInteruniversitaire.findMany({
            where: { estActive: false },
        });
    }
    async activateConvention(id) {
        return this.prisma.conventionInteruniversitaire.update({
            where: { id: id },
            data: { estActive: true },
        });
    }
    async deactivateConvention(id) {
        return this.prisma.conventionInteruniversitaire.update({
            where: { id: id },
            data: { estActive: false },
        });
    }
    async findConventionsByUniversite(universiteId) {
        return this.prisma.conventionInteruniversitaire.findMany({
            where: {
                OR: [
                    { universiteId1: universiteId },
                    { universiteId2: universiteId },
                ],
            },
        });
    }
};
exports.ConventionService = ConventionService;
exports.ConventionService = ConventionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConventionService);
//# sourceMappingURL=convention.service.js.map