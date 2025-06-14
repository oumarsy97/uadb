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
exports.EtudiantService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_1 = require("../../generated/prisma/index.js");
const utilisateurs_service_1 = require("../users/utilisateurs.service");
let EtudiantService = class EtudiantService {
    prisma;
    utilisateursService;
    constructor(prisma, utilisateursService) {
        this.prisma = prisma;
        this.utilisateursService = utilisateursService;
    }
    async generatenumeroEtudiant() {
        const currentYear = new Date().getFullYear();
        let numeroEtudiant = '';
        let isUnique = false;
        while (!isUnique) {
            const randomNumber = Math.floor(100000 + Math.random() * 900000);
            numeroEtudiant = `ETU-${currentYear}-${randomNumber}`;
            const existingEtudiant = await this.prisma.etudiant.findUnique({
                where: { numeroEtudiant: numeroEtudiant }
            });
            if (!existingEtudiant) {
                isUnique = true;
            }
        }
        return numeroEtudiant;
    }
    async create(createEtudiantDto) {
        try {
            const userData = {
                nom: createEtudiantDto.nom,
                prenom: createEtudiantDto.prenom,
                email: createEtudiantDto.email,
                dateInscription: new Date(),
                derniereConnexion: new Date(),
                estValide: true,
                estActif: true,
                motDePasse: 'MotDePasse123',
                role: prisma_1.RoleUser.ETUDIANT,
                telephone: createEtudiantDto.telephone || null,
                image: createEtudiantDto.image || 'https://example.com/default-avatar.png',
            };
            const user = await this.utilisateursService.create(userData);
            if (!user || !user.id) {
                throw new common_1.BadRequestException('Erreur lors de la création de l\'utilisateur');
            }
            const numeroEtudiant = await this.generatenumeroEtudiant();
            const etudiant = await this.prisma.etudiant.create({
                data: {
                    userId: user.id,
                    numeroEtudiant,
                    dateNaissance: new Date(createEtudiantDto.dateNaissance),
                    niveauEtudes: createEtudiantDto.niveauEtudes || prisma_1.NiveauEtudes.LICENCE_1,
                    filiereId: createEtudiantDto.filiereId,
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            nom: true,
                            prenom: true,
                            telephone: true,
                            role: true,
                            estActif: true,
                        }
                    }
                }
            });
            return {
                success: true,
                message: 'Étudiant créé avec succès',
                data: etudiant
            };
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Un étudiant avec ces informations existe déjà');
            }
            throw new common_1.BadRequestException(`Erreur lors de la création de l'étudiant: ${error.message}`);
        }
    }
    async findAll(options) {
        const page = options.page || 1;
        const limit = options.limit || 10;
        const skip = (page - 1) * limit;
        const whereConditions = {};
        if (options.search) {
            whereConditions.OR = [
                { numeroEtudiant: { contains: options.search, mode: 'insensitive' } },
                { user: { nom: { contains: options.search, mode: 'insensitive' } } },
                { user: { prenom: { contains: options.search, mode: 'insensitive' } } },
                { user: { email: { contains: options.search, mode: 'insensitive' } } },
            ];
        }
        if (options.departement) {
            whereConditions.departement = { contains: options.departement, mode: 'insensitive' };
        }
        if (options.faculte) {
            whereConditions.faculte = { contains: options.faculte, mode: 'insensitive' };
        }
        if (options.niveauEtudes) {
            whereConditions.niveauEtudes = options.niveauEtudes;
        }
        if (options.universiteId) {
            whereConditions.user = {
                universiteId: options.universiteId
            };
        }
        const [etudiants, total] = await Promise.all([
            this.prisma.etudiant.findMany({
                where: whereConditions,
                skip,
                take: limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            nom: true,
                            prenom: true,
                            telephone: true,
                            role: true,
                            estActif: true,
                            derniereConnexion: true,
                        }
                    }
                },
                orderBy: {
                    dateInscription: 'desc'
                }
            }),
            this.prisma.etudiant.count({ where: whereConditions })
        ]);
        return {
            success: true,
            data: etudiants,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        };
    }
    async findOne(id) {
        const etudiant = await this.prisma.etudiant.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        nom: true,
                        prenom: true,
                        telephone: true,
                        role: true,
                        estActif: true,
                        derniereConnexion: true,
                    }
                }
            }
        });
        if (!etudiant) {
            throw new common_1.NotFoundException('Étudiant non trouvé');
        }
        return {
            success: true,
            data: etudiant
        };
    }
    async findByNumeroEtudiant(numeroEtudiant) {
        const etudiant = await this.prisma.etudiant.findUnique({
            where: { numeroEtudiant },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        nom: true,
                        prenom: true,
                        telephone: true,
                        role: true,
                        estActif: true,
                        derniereConnexion: true,
                    }
                }
            }
        });
        if (!etudiant) {
            throw new common_1.NotFoundException('Étudiant non trouvé avec ce numéro');
        }
        return {
            success: true,
            data: etudiant
        };
    }
    async findByUserId(etudiantId) {
        const etudiant = await this.prisma.etudiant.findUnique({
            where: { id: etudiantId },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        nom: true,
                        prenom: true,
                        telephone: true,
                        role: true,
                        estActif: true,
                        derniereConnexion: true,
                    }
                }
            }
        });
        if (!etudiant) {
            throw new common_1.NotFoundException('Étudiant non trouvé pour cet utilisateur');
        }
        return {
            success: true,
            data: etudiant
        };
    }
    async update(id, updateEtudiantDto) {
        try {
            const existingEtudiant = await this.prisma.etudiant.findUnique({
                where: { id },
                include: { user: true }
            });
            if (!existingEtudiant) {
                throw new common_1.NotFoundException('Étudiant non trouvé');
            }
            const updateData = {};
            if (updateEtudiantDto.dateNaissance) {
                updateData.dateNaissance = new Date(updateEtudiantDto.dateNaissance);
            }
            if (updateEtudiantDto.departement !== undefined) {
                updateData.departement = updateEtudiantDto.departement;
            }
            if (updateEtudiantDto.faculte !== undefined) {
                updateData.faculte = updateEtudiantDto.faculte;
            }
            if (updateEtudiantDto.specialite !== undefined) {
                updateData.specialite = updateEtudiantDto.specialite;
            }
            if (updateEtudiantDto.niveauEtudes) {
                updateData.niveauEtudes = updateEtudiantDto.niveauEtudes;
            }
            const etudiant = await this.prisma.etudiant.update({
                where: { id },
                data: updateData,
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            nom: true,
                            prenom: true,
                            telephone: true,
                            role: true,
                            estActif: true,
                        }
                    }
                }
            });
            if (updateEtudiantDto.userData) {
                await this.utilisateursService.update(existingEtudiant.userId, updateEtudiantDto.userData);
            }
            return {
                success: true,
                message: 'Étudiant mis à jour avec succès',
                data: etudiant
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Erreur lors de la mise à jour: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const etudiant = await this.prisma.etudiant.findUnique({
                where: { id },
                include: { user: true }
            });
            if (!etudiant) {
                throw new common_1.NotFoundException('Étudiant non trouvé');
            }
            await this.prisma.etudiant.delete({
                where: { id }
            });
            await this.utilisateursService.remove(etudiant.userId);
            return {
                success: true,
                message: 'Étudiant supprimé avec succès'
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException(`Erreur lors de la suppression: ${error.message}`);
        }
    }
    async getStatistics() {
        const totalEtudiants = await this.prisma.etudiant.count({
            where: {
                user: {
                    role: prisma_1.RoleUser.ETUDIANT,
                }
            }
        });
        const etudiantsActifs = await this.prisma.etudiant.count({
            where: {
                user: {
                    role: prisma_1.RoleUser.ETUDIANT,
                    estActif: true,
                }
            }
        });
        const etudiantsInactifs = await this.prisma.etudiant.count({
            where: {
                user: {
                    role: prisma_1.RoleUser.ETUDIANT,
                    estActif: false,
                }
            }
        });
        const etudiantsParNiveau = await this.prisma.etudiant.groupBy({
            by: ['niveauEtudes'],
            _count: {
                id: true,
            },
            where: {
                user: {
                    role: prisma_1.RoleUser.ETUDIANT,
                    estActif: true,
                }
            }
        });
        return {
            totalEtudiants,
            etudiantsActifs,
            etudiantsInactifs,
            etudiantsParNiveau,
        };
    }
};
exports.EtudiantService = EtudiantService;
exports.EtudiantService = EtudiantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        utilisateurs_service_1.UtilisateursService])
], EtudiantService);
//# sourceMappingURL=etudiant.service.js.map