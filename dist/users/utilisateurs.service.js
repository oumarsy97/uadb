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
exports.UtilisateursService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UtilisateursService = class UtilisateursService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUtilisateurDto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: createUtilisateurDto.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Cet email est déjà utilisé');
        }
        const hashedPassword = await bcrypt.hash(createUtilisateurDto.motDePasse, 10);
        return this.prisma.user.create({
            data: {
                ...createUtilisateurDto,
                motDePasse: hashedPassword,
                dateInscription: new Date(),
            },
        });
    }
    async findAll() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                nom: true,
                prenom: true,
                image: true,
                role: true,
                departement: true,
                faculte: true,
                specialite: true,
                niveauEtudes: true,
                dateInscription: true,
                derniereConnexion: true,
                estActif: true,
                universite: true,
            },
        });
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                nom: true,
                prenom: true,
                image: true,
                role: true,
                departement: true,
                faculte: true,
                specialite: true,
                niveauEtudes: true,
                dateInscription: true,
                derniereConnexion: true,
                estActif: true,
                universite: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Utilisateur avec l'ID ${id} non trouvé`);
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Utilisateur avec l'email ${email} non trouvé`);
        }
        return user;
    }
    async update(id, updateData) {
        const existingUser = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!existingUser) {
            throw new common_1.NotFoundException(`Utilisateur avec l'ID ${id} non trouvé`);
        }
        if (updateData.motDePasse) {
            updateData.motDePasse = await bcrypt.hash(updateData.motDePasse, 10);
        }
        if (updateData.email && updateData.email !== existingUser.email) {
            const emailExists = await this.prisma.user.findUnique({
                where: { email: updateData.email },
            });
            if (emailExists) {
                throw new common_1.ConflictException('Cet email est déjà utilisé');
            }
        }
        return this.prisma.user.update({
            where: { id },
            data: {
                ...updateData,
                derniereConnexion: updateData.hasOwnProperty('derniereConnexion')
                    ? updateData.derniereConnexion
                    : undefined,
            },
        });
    }
    async remove(id) {
        const existingUser = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!existingUser) {
            throw new common_1.NotFoundException(`Utilisateur avec l'ID ${id} non trouvé`);
        }
        return this.prisma.user.delete({
            where: { id },
        });
    }
};
exports.UtilisateursService = UtilisateursService;
exports.UtilisateursService = UtilisateursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UtilisateursService);
//# sourceMappingURL=utilisateurs.service.js.map