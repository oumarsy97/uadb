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
exports.BibliothecaireService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const utilisateurs_service_1 = require("../users/utilisateurs.service");
let BibliothecaireService = class BibliothecaireService {
    utilisateursService;
    prismaService;
    constructor(utilisateursService, prismaService) {
        this.utilisateursService = utilisateursService;
        this.prismaService = prismaService;
    }
    async create(createBibliothecaireDto) {
        const numeroBibliothecaire = this.generateNumero();
        const user = await this.utilisateursService.create({
            ...createBibliothecaireDto,
            role: 'BIBLIOTHECAIRE',
        });
        const bibliothecaire = await this.prismaService.bibliothecaire.create({
            data: {
                numeroBibliothecaire,
                user: {
                    connect: { id: user.id },
                },
            },
        });
        const universiteId = await this.prismaService.universite.findFirst();
        return {
            ...bibliothecaire,
            user: {
                ...user,
                role: 'BIBLIOTHECAIRE',
            },
            universite: universiteId,
        };
    }
    findAll(options = {}) {
        const { page = 1, limit = 10, search = '' } = options;
        return this.prismaService.bibliothecaire.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: {
                user: {
                    nom: {
                        contains: search,
                    },
                    prenom: {
                        contains: search,
                    },
                    email: {
                        contains: search,
                    },
                },
            },
            include: {
                user: true,
            },
        });
    }
    findOne(id) {
        return this.prismaService.bibliothecaire.findUnique({
            where: { id },
            include: {
                user: true,
            },
        });
    }
    async update(id, updateBibliothecaireDto) {
        return this.prismaService.bibliothecaire.update({
            where: { id },
            data: {
                ...updateBibliothecaireDto,
            },
            include: {
                user: true,
            },
        });
    }
    remove(id) {
        return this.prismaService.bibliothecaire.delete({
            where: { id },
        });
    }
    generateNumero() {
        const prefix = 'BIB';
        const randomNumber = Math.floor(Math.random() * 1000000);
        return `${prefix}${randomNumber.toString().padStart(6, '0')}`;
    }
};
exports.BibliothecaireService = BibliothecaireService;
exports.BibliothecaireService = BibliothecaireService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [utilisateurs_service_1.UtilisateursService,
        prisma_service_1.PrismaService])
], BibliothecaireService);
//# sourceMappingURL=bibliothecaire.service.js.map