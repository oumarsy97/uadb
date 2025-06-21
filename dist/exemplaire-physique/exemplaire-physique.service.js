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
var ExemplairePhysiqueService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExemplairePhysiqueService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const ressources_service_1 = require("../ressources/ressources.service");
let ExemplairePhysiqueService = ExemplairePhysiqueService_1 = class ExemplairePhysiqueService {
    prisma;
    ressourcesService;
    logger = new common_1.Logger(ExemplairePhysiqueService_1.name);
    constructor(prisma, ressourcesService) {
        this.prisma = prisma;
        this.ressourcesService = ressourcesService;
    }
    async create(createExemplairePhysiqueDto, userId) {
        try {
            this.logger.log(`Création d'un exemplaire physique par l'utilisateur: ${userId}`);
            this.logger.log(`Création d'un exemplaire physique: ${JSON.stringify(createExemplairePhysiqueDto, null, 2)}`);
            if (!createExemplairePhysiqueDto.cote) {
                throw new common_1.BadRequestException('La cote est obligatoire');
            }
            const existingExemplaire = await this.prisma.exemplairePhysique.findFirst({
                where: {
                    cote: createExemplairePhysiqueDto.cote,
                },
            });
            const ressource = await this.ressourcesService.create({
                titre: createExemplairePhysiqueDto.titre,
                description: createExemplairePhysiqueDto.description,
                langue: createExemplairePhysiqueDto.langue || 'fr',
                urlFichierLocal: createExemplairePhysiqueDto.urlFichierLocal,
                format: 'PHYSIQUE',
                image: createExemplairePhysiqueDto.image,
                niveauAcces: createExemplairePhysiqueDto.niveauAcces || 'PUBLIC',
                datePublication: createExemplairePhysiqueDto.datePublication || new Date(),
                motsCles: createExemplairePhysiqueDto.motsCles,
                auteurId: userId,
                categorieId: createExemplairePhysiqueDto.categorieId,
            });
            const ressourceId = ressource.id;
            if (existingExemplaire) {
                throw new common_1.BadRequestException('Un exemplaire avec cette cote existe déjà');
            }
            const qrCode = await this.generateQRCode();
            const exemplaireData = {
                id: ressourceId,
                cote: createExemplairePhysiqueDto.cote,
                etat: createExemplairePhysiqueDto.etat || 'BON',
                disponible: createExemplairePhysiqueDto.disponible ?? true,
                localisation: createExemplairePhysiqueDto.localisation || 'Non spécifiée',
                dateAcquisition: createExemplairePhysiqueDto.dateAcquisition || new Date(),
                qrCode,
                dureeMaxEmpruntExterne: createExemplairePhysiqueDto.dureeMaxEmpruntExterne != null ? +createExemplairePhysiqueDto.dureeMaxEmpruntExterne : 14,
                nbMaxExemplairesExterne: createExemplairePhysiqueDto.nbMaxExemplairesExterne !== undefined && createExemplairePhysiqueDto.nbMaxExemplairesExterne !== null
                    ? +createExemplairePhysiqueDto.nbMaxExemplairesExterne
                    : 1,
                ressource: {
                    connect: { id: ressourceId }
                },
            };
            this.logger.log(`Données finales pour création: ${JSON.stringify(exemplaireData, null, 2)}`);
            const exemplairePhysique = await this.prisma.exemplairePhysique.create({
                data: exemplaireData,
                include: {
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            isbnglobale: true,
                            auteur: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                }
                            },
                            categorie: {
                                select: {
                                    id: true,
                                    libelle: true,
                                }
                            }
                        }
                    },
                },
            });
            this.logger.log(`Exemplaire physique créé avec succès: ${exemplairePhysique.id}`);
            return exemplairePhysique;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la création de l'exemplaire physique: ${error.message}`);
            this.logger.error(`Stack trace: ${error.stack}`);
            throw error;
        }
    }
    async findAll(options = {}) {
        const { page = 1, limit = 10, search = '', etat, disponible, ressourceId, localisation, orderBy = 'dateAcquisition', orderDirection = 'desc', } = options;
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { cote: { contains: search } },
                { localisation: { contains: search } },
                { qrCode: { contains: search } },
                { ressource: { titre: { contains: search } } },
                { ressource: { isbnglobale: { contains: search } } },
            ];
        }
        if (etat)
            where.etat = etat;
        if (ressourceId)
            where.ressourceId = ressourceId;
        if (localisation)
            where.localisation = { contains: localisation };
        try {
            const total = await this.prisma.exemplairePhysique.count({ where });
            const exemplaires = await this.prisma.exemplairePhysique.findMany({
                where,
                skip,
                take: +limit,
                orderBy: { [orderBy]: orderDirection },
                include: {
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            isbnglobale: true,
                            auteur: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                }
                            },
                            categorie: {
                                select: {
                                    id: true,
                                    libelle: true,
                                }
                            }
                        }
                    },
                    _count: {
                        select: {
                            emprunts: true,
                        },
                    },
                },
            });
            return {
                data: exemplaires,
                meta: {
                    total,
                    page: Number(page),
                    limit: Number(limit),
                    pages: Math.ceil(total / limit),
                },
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des exemplaires physiques: ${error.message}`);
            throw error;
        }
    }
    async findOne(id) {
        try {
            const exemplairePhysique = await this.prisma.exemplairePhysique.findUnique({
                where: { id },
                include: {
                    ressource: {
                        include: {
                            auteur: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                    role: true,
                                }
                            },
                            categorie: {
                                select: {
                                    id: true,
                                    libelle: true,
                                    description: true,
                                }
                            }
                        }
                    },
                    emprunts: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                }
                            }
                        },
                        orderBy: {
                            dateEmprunt: 'desc'
                        },
                        take: 5,
                    },
                    _count: {
                        select: {
                            emprunts: true,
                        },
                    },
                },
            });
            if (!exemplairePhysique) {
                throw new common_1.NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
            }
            return exemplairePhysique;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de l'exemplaire physique ${id}: ${error.message}`);
            throw error;
        }
    }
    async update(id, updateExemplairePhysiqueDto) {
        try {
            const exemplaireExists = await this.prisma.exemplairePhysique.findUnique({
                where: { id },
            });
            if (!exemplaireExists) {
                throw new common_1.NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
            }
            if (updateExemplairePhysiqueDto.cote && updateExemplairePhysiqueDto.cote !== exemplaireExists.cote) {
                const existingWithSameCote = await this.prisma.exemplairePhysique.findFirst({
                    where: {
                        cote: updateExemplairePhysiqueDto.cote,
                        id: { not: id }
                    },
                });
                if (existingWithSameCote) {
                    throw new common_1.BadRequestException('Un exemplaire avec cette cote existe déjà');
                }
            }
            const updateData = { ...updateExemplairePhysiqueDto };
            if (updateExemplairePhysiqueDto.ressourceId) {
                const ressourceExists = await this.prisma.ressource.findUnique({
                    where: { id: updateExemplairePhysiqueDto.ressourceId }
                });
                if (!ressourceExists) {
                    throw new common_1.BadRequestException('La ressource spécifiée n\'existe pas');
                }
                updateData.ressource = { connect: { id: updateExemplairePhysiqueDto.ressourceId } };
                delete updateData.ressourceId;
            }
            return await this.prisma.exemplairePhysique.update({
                where: { id },
                data: updateData,
                include: {
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            isbnglobale: true,
                            auteur: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                }
                            },
                            categorie: {
                                select: {
                                    id: true,
                                    libelle: true,
                                }
                            }
                        }
                    },
                },
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors de la mise à jour de l'exemplaire physique ${id}: ${error.message}`);
            throw error;
        }
    }
    async remove(id) {
        try {
            const exemplaireExists = await this.prisma.exemplairePhysique.findUnique({
                where: { id },
                include: {
                    _count: {
                        select: {
                            emprunts: true,
                        }
                    }
                }
            });
            if (!exemplaireExists) {
                throw new common_1.NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
            }
            const empruntsEnCours = await this.prisma.emprunt.count({
                where: {
                    exemplaireId: id,
                    dateRetourEffective: null,
                }
            });
            if (empruntsEnCours > 0) {
                throw new common_1.BadRequestException('Impossible de supprimer un exemplaire ayant des emprunts en cours');
            }
            await this.prisma.$transaction([
                this.prisma.emprunt.deleteMany({ where: { exemplaireId: id } }),
                this.prisma.exemplairePhysique.delete({ where: { id } }),
            ]);
            return { id, message: 'Exemplaire physique supprimé avec succès' };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la suppression de l'exemplaire physique ${id}: ${error.message}`);
            throw error;
        }
    }
    async findByRessource(ressourceId, options = {}) {
        return this.findAll({
            ...options,
            ressourceId,
        });
    }
    async findByQRCode(qrCode) {
        try {
            const exemplairePhysique = await this.prisma.exemplairePhysique.findFirst({
                where: { qrCode },
                include: {
                    ressource: {
                        include: {
                            auteur: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                }
                            },
                            categorie: {
                                select: {
                                    id: true,
                                    libelle: true,
                                }
                            }
                        }
                    },
                },
            });
            if (!exemplairePhysique) {
                throw new common_1.NotFoundException(`Exemplaire physique avec le QR Code ${qrCode} non trouvé`);
            }
            return exemplairePhysique;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la recherche par QR Code ${qrCode}: ${error.message}`);
            throw error;
        }
    }
    async toggleDisponibilite(id) {
        try {
            const exemplairePhysique = await this.prisma.exemplairePhysique.findUnique({
                where: { id },
            });
            if (!exemplairePhysique) {
                throw new common_1.NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
            }
            return await this.prisma.exemplairePhysique.update({
                where: { id },
                include: {
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                        }
                    }
                },
                data: {
                    disponible: !exemplairePhysique.disponible
                }
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors du changement de disponibilité de l'exemplaire physique ${id}: ${error.message}`);
            throw error;
        }
    }
    async getStatistiques(ressourceId) {
        try {
            const where = ressourceId ? { ressourceId } : {};
            const totalExemplaires = await this.prisma.exemplairePhysique.count({ where });
            const parEtat = await this.prisma.exemplairePhysique.groupBy({
                by: ['etat'],
                where,
                _count: {
                    etat: true,
                },
            });
            const disponibles = await this.prisma.exemplairePhysique.count({
                where: { ...where, disponible: true }
            });
            const nonDisponibles = await this.prisma.exemplairePhysique.count({
                where: { ...where, disponible: false }
            });
            return {
                totalExemplaires,
                disponibles,
                nonDisponibles,
                parEtat: parEtat.reduce((acc, stat) => {
                    acc[stat.etat] = stat._count.etat;
                    return acc;
                }, {}),
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des statistiques: ${error.message}`);
            throw error;
        }
    }
    async generateQRCode() {
        const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
        const randomSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        const qrCode = `QR-${timestamp}-${randomSuffix}`;
        const existing = await this.prisma.exemplairePhysique.findFirst({
            where: { qrCode }
        });
        if (existing) {
            return this.generateQRCode();
        }
        this.logger.log(`Génération du QR Code: ${qrCode}`);
        return qrCode;
    }
};
exports.ExemplairePhysiqueService = ExemplairePhysiqueService;
exports.ExemplairePhysiqueService = ExemplairePhysiqueService = ExemplairePhysiqueService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ressources_service_1.RessourcesService])
], ExemplairePhysiqueService);
//# sourceMappingURL=exemplaire-physique.service.js.map