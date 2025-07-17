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
exports.EnseignantService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const utilisateurs_service_1 = require("../users/utilisateurs.service");
let EnseignantService = class EnseignantService {
    prismaService;
    utilisateursService;
    constructor(prismaService, utilisateursService) {
        this.prismaService = prismaService;
        this.utilisateursService = utilisateursService;
    }
    async create(createEnseignantDto) {
        const numeroEnseignant = this.generateNumeroEnseignant();
        const user = await this.utilisateursService.create({
            email: createEnseignantDto.email,
            motDePasse: createEnseignantDto.motDePasse,
            nom: createEnseignantDto.nom,
            prenom: createEnseignantDto.prenom,
            image: createEnseignantDto.image,
            role: 'ENSEIGNANT',
            telephone: createEnseignantDto.telephone,
        });
        const enseignant = await this.prismaService.enseignant.create({
            data: {
                numeroEnseignant,
                dateNaissance: new Date(createEnseignantDto.dateNaissance),
                specialite: createEnseignantDto.specialite,
                user: {
                    connect: { id: user.id },
                },
            },
        });
        const universiteId = await this.prismaService.universite.findFirst();
        return {
            ...enseignant,
            user: {
                ...user,
                role: 'ENSEIGNANT',
            },
            universite: universiteId,
        };
    }
    findAll(options = {}) {
        const { page = 1, limit = 10, search = '' } = options;
        const skip = (Number(page) - 1) * Number(limit);
        const take = Number(limit);
        return this.prismaService.enseignant.findMany({
            skip,
            take,
            where: {
                user: {
                    OR: [
                        { nom: { contains: search } },
                        { prenom: { contains: search } },
                        { email: { contains: search } },
                    ],
                },
            },
            include: {
                user: true,
            },
        });
    }
    findOne(id) {
        return this.prismaService.enseignant.findUnique({
            where: { id: id },
            include: {
                user: true,
            },
        });
    }
    update(id, updateEnseignantDto) {
        return this.prismaService.enseignant.update({
            where: { id },
            data: {
                ...updateEnseignantDto,
                dateNaissance: updateEnseignantDto.dateNaissance ? new Date(updateEnseignantDto.dateNaissance) : undefined,
            },
            include: {
                user: true,
            },
        });
    }
    remove(id) {
        return this.prismaService.enseignant.delete({
            where: { id },
        });
    }
    generateNumeroEnseignant() {
        const prefix = 'ENS';
        const randomNumber = Math.floor(Math.random() * 1000000);
        return `${prefix}${randomNumber.toString().padStart(6, '0')}`;
    }
};
exports.EnseignantService = EnseignantService;
exports.EnseignantService = EnseignantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        utilisateurs_service_1.UtilisateursService])
], EnseignantService);
//# sourceMappingURL=enseignant.service.js.map