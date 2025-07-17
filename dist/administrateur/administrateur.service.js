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
exports.AdministrateurService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const utilisateurs_service_1 = require("../users/utilisateurs.service");
let AdministrateurService = class AdministrateurService {
    prismaService;
    utilisateursService;
    constructor(prismaService, utilisateursService) {
        this.prismaService = prismaService;
        this.utilisateursService = utilisateursService;
    }
    async create(createAdministrateurDto) {
        const numeroAdmin = this.generateNumero();
        const user = await this.utilisateursService.create({
            ...createAdministrateurDto,
            role: 'ADMIN',
        });
        const administrateur = await this.prismaService.administrateur.create({
            data: {
                numeroAdmin,
                user: {
                    connect: { id: user.id },
                },
            },
            include: {
                user: true,
            },
        });
        const universiteId = await this.prismaService.universite.findFirst();
        return {
            ...administrateur,
            universite: universiteId,
        };
    }
    findAll(options = {}) {
        const { page = 1, limit = 10, search = '' } = options;
        const skip = (Number(page) - 1) * Number(limit);
        const take = Number(limit);
        return this.prismaService.administrateur.findMany({
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
    async findOne(id) {
        return this.prismaService.administrateur.findUnique({
            where: { id },
            include: {
                user: true,
            },
        });
    }
    update(id, updateAdministrateurDto) {
        return this.prismaService.administrateur.update({
            where: { id },
            data: updateAdministrateurDto,
        });
    }
    remove(id) {
        return this.prismaService.administrateur.delete({
            where: { id },
        });
    }
    generateNumero() {
        const prefix = 'ADM';
        const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        return `${prefix}${randomPart}`;
    }
};
exports.AdministrateurService = AdministrateurService;
exports.AdministrateurService = AdministrateurService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        utilisateurs_service_1.UtilisateursService])
], AdministrateurService);
//# sourceMappingURL=administrateur.service.js.map