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
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let UtilisateursService = class UtilisateursService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async create(createUtilisateurDto) {
        const { email } = createUtilisateurDto;
        const existingUser = await this.prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            throw new common_1.HttpException('Cet email est déjà utilisé.', common_1.HttpStatus.CONFLICT);
        }
        const hashedPassword = await bcrypt.hash(createUtilisateurDto.motDePasse, 10);
        return this.prisma.user.create({
            data: {
                nom: createUtilisateurDto.nom,
                prenom: createUtilisateurDto.prenom,
                email: createUtilisateurDto.email,
                motDePasse: hashedPassword,
                role: createUtilisateurDto.role,
                image: createUtilisateurDto.image,
                universiteId: createUtilisateurDto.universiteId,
            },
        });
    }
    async login(loginData) {
        console.log('Login attempt with data:', loginData);
        const user = await this.prisma.user.findUnique({
            where: { email: loginData.email },
        });
        if (!user) {
            throw new common_1.HttpException('Email ou mot de passe incorrect.', common_1.HttpStatus.UNAUTHORIZED);
        }
        const isPasswordValid = await bcrypt.compare(loginData.motDePasse, user.motDePasse);
        if (!isPasswordValid) {
            throw new common_1.HttpException('Email ou mot de passe incorrect.', common_1.HttpStatus.UNAUTHORIZED);
        }
        await this.updateDerniereConnexion(user.id);
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            universite: loginData.universite || null,
        };
        const token = this.jwtService.sign(payload);
        const { motDePasse, ...userData } = user;
        return {
            user: {
                id: userData.id,
                nom: userData.nom,
                prenom: userData.prenom,
                email: userData.email,
                role: userData.role,
                image: userData.image,
                universite: loginData.universite,
            },
            token,
        };
    }
    async logout(logoutData) {
        return { message: 'Déconnexion réussie.' };
    }
    async findAll(options = {}) {
        const { page = 1, limit = 10, search = '' } = options;
        const skip = (page - 1) * limit;
        const where = search
            ? {
                OR: [
                    { nom: { contains: search, lte: 'insensitive' } },
                    { prenom: { contains: search, lte: 'insensitive' } },
                    { email: { contains: search, lte: 'insensitive' } },
                ],
            }
            : {};
        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: +limit,
                include: { universite: true },
            }),
            this.prisma.user.count({ where }),
        ]);
        const sanitizedUsers = users.map(({ motDePasse, ...user }) => user);
        return {
            data: sanitizedUsers,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: { universite: true },
        });
        if (!user) {
            throw new common_1.HttpException('Utilisateur non trouvé.', common_1.HttpStatus.NOT_FOUND);
        }
        const { motDePasse, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: { email },
            include: { universite: true },
        });
        if (!user) {
            throw new common_1.HttpException('Utilisateur non trouvé.', common_1.HttpStatus.NOT_FOUND);
        }
        const { motDePasse, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async update(id, updateData) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.HttpException('Utilisateur non trouvé.', common_1.HttpStatus.NOT_FOUND);
        }
        let hashedPassword;
        if (updateData.motDePasse) {
            hashedPassword = await bcrypt.hash(updateData.motDePasse, 10);
        }
        const dataToUpdate = {
            ...(updateData.nom && { nom: updateData.nom }),
            ...(updateData.prenom && { prenom: updateData.prenom }),
            ...(updateData.email && { email: updateData.email }),
            ...(hashedPassword && { motDePasse: hashedPassword }),
            ...(updateData.role && { role: updateData.role }),
            ...(updateData.image && { image: updateData.image }),
            ...(updateData.universiteId !== undefined && {
                universiteId: updateData.universiteId,
            }),
        };
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: dataToUpdate,
            include: { universite: true },
        });
        const { motDePasse, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }
    async remove(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.HttpException('Utilisateur non trouvé.', common_1.HttpStatus.NOT_FOUND);
        }
        await this.prisma.user.delete({ where: { id } });
        return { message: 'Utilisateur supprimé avec succès.' };
    }
    async updateDerniereConnexion(id) {
        return this.prisma.user.update({
            where: { id },
            data: { derniereConnexion: new Date() },
        });
    }
};
exports.UtilisateursService = UtilisateursService;
exports.UtilisateursService = UtilisateursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UtilisateursService);
//# sourceMappingURL=utilisateurs.service.js.map