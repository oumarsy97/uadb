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
var RessourcesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RessourcesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RessourcesService = RessourcesService_1 = class RessourcesService {
    prisma;
    logger = new common_1.Logger(RessourcesService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRessourceDto) {
        try {
            this.logger.log(`Création d'une ressource: ${JSON.stringify(createRessourceDto, null, 2)}`);
            if (!createRessourceDto.auteurId) {
                throw new common_1.BadRequestException('L\'ID de l\'auteur est obligatoire');
            }
            const auteurExists = await this.prisma.user.findUnique({
                where: { id: createRessourceDto.auteurId }
            });
            if (!auteurExists) {
                throw new common_1.BadRequestException('L\'auteur spécifié n\'existe pas');
            }
            const existingRessource = await this.prisma.ressource.findFirst({
                where: {
                    titre: createRessourceDto.titre,
                    auteurId: createRessourceDto.auteurId,
                },
            });
            if (existingRessource) {
                throw new common_1.BadRequestException('Une ressource avec le même titre existe déjà pour cet auteur');
            }
            let categorieId = createRessourceDto.categorieId;
            if (categorieId) {
                const categorieExists = await this.prisma.categorie.findUnique({
                    where: { id: categorieId }
                });
                if (!categorieExists) {
                    this.logger.warn(`Catégorie ${categorieId} non trouvée, utilisation de la catégorie par défaut`);
                    categorieId = null;
                }
            }
            if (!categorieId) {
                let categorieParDefaut = await this.prisma.categorie.findFirst({
                    where: {
                        OR: [
                            { libelle: { contains: 'Général' } },
                            { libelle: { contains: 'Non classé' } },
                            { libelle: { contains: 'Divers' } },
                            { libelle: { contains: 'Autre' } }
                        ]
                    }
                });
                if (!categorieParDefaut) {
                    categorieParDefaut = await this.prisma.categorie.create({
                        data: {
                            libelle: 'Non classé',
                            description: 'Catégorie par défaut pour les ressources non classées',
                        }
                    });
                    this.logger.log(`Nouvelle catégorie par défaut créée: ${categorieParDefaut.libelle} (ID: ${categorieParDefaut.id})`);
                }
                categorieId = categorieParDefaut.id;
                this.logger.log(`Catégorie par défaut utilisée: ${categorieParDefaut.libelle} (ID: ${categorieId})`);
            }
            const isbnglobale = await this.generateIsbnCode();
            const data = {
                titre: createRessourceDto.titre,
                isbnglobale,
                description: createRessourceDto.description,
                langue: createRessourceDto.langue || 'fr',
                urlFichier: createRessourceDto.urlFichier,
                urlFichierLocal: createRessourceDto.urlFichierLocal || "file:///tmp/ressource.pdf",
                format: createRessourceDto.format || 'PDF',
                estArchive: createRessourceDto.estArchive || false,
                motsCles: createRessourceDto.motsCles,
                image: createRessourceDto.image,
                niveauAcces: createRessourceDto.niveauAcces || 'PUBLIC',
                datePublication: new Date(),
                auteur: {
                    connect: { id: createRessourceDto.auteurId }
                },
                categorie: {
                    connect: { id: categorieId }
                },
            };
            this.logger.log(`Données finales pour création: ${JSON.stringify(data, null, 2)}`);
            const ressource = await this.prisma.ressource.create({
                data,
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
                    },
                },
            });
            this.logger.log(`Ressource créée avec succès: ${ressource.id}`);
            return ressource;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la création de la ressource: ${error.message}`);
            this.logger.error(`Stack trace: ${error.stack}`);
            throw error;
        }
    }
    async getOrCreateDefaultCategory() {
        let categorieParDefaut = await this.prisma.categorie.findFirst({
            where: {
                OR: [
                    { libelle: { contains: 'Général' } },
                    { libelle: { contains: 'Non classé' } },
                    { libelle: { contains: 'Divers' } }
                ]
            }
        });
        if (!categorieParDefaut) {
            categorieParDefaut = await this.prisma.categorie.create({
                data: {
                    libelle: 'Non classé',
                    description: 'Catégorie par défaut pour les ressources non classées'
                }
            });
            this.logger.log(`Catégorie par défaut créée: ${categorieParDefaut.libelle}`);
        }
        return categorieParDefaut.id;
    }
    async findAll(options = {}) {
        const { page = 1, limit = 10, search = '', langue, niveauAcces, estArchive, auteurId, categorieId, orderBy = 'datePublication', orderDirection = 'desc', } = options;
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { titre: { contains: search } },
                { description: { contains: search } },
                { motsCles: { contains: search } },
                { isbnglobale: { contains: search } },
            ];
        }
        if (langue)
            where.langue = langue;
        if (estArchive !== undefined)
            where.estArchive = estArchive;
        if (niveauAcces)
            where.niveauAcces = niveauAcces;
        if (auteurId)
            where.auteurId = auteurId;
        if (categorieId)
            where.categorieId = categorieId;
        try {
            const total = await this.prisma.ressource.count({ where });
            const ressources = await this.prisma.ressource.findMany({
                where,
                skip,
                take: +limit,
                orderBy: { [orderBy]: orderDirection },
                include: {
                    auteur: {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            role: true,
                        },
                    },
                    categorie: {
                        select: {
                            id: true,
                            libelle: true,
                            description: true,
                        }
                    },
                    _count: {
                        select: {
                            favoris: true,
                            commentaires: true,
                            notations: true,
                            historiques: true,
                            exemplaires: true,
                            reservations: true,
                        },
                    },
                },
            });
            const ressourcesAvecNotes = await Promise.all(ressources.map(async (ressource) => {
                const notations = await this.prisma.notation.findMany({
                    where: { ressourceId: ressource.id },
                    select: { note: true },
                });
                const noteMoyenne = notations.length > 0
                    ? notations.reduce((sum, notation) => sum + notation.note, 0) / notations.length
                    : 0;
                return {
                    ...ressource,
                    noteMoyenne: parseFloat(noteMoyenne.toFixed(1)),
                };
            }));
            return {
                data: ressourcesAvecNotes,
                meta: {
                    total,
                    page: Number(page),
                    limit: Number(limit),
                    pages: Math.ceil(total / limit),
                },
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des ressources: ${error.message}`);
            throw error;
        }
    }
    async findOne(id) {
        try {
            const ressource = await this.prisma.ressource.findUnique({
                where: { id },
                include: {
                    auteur: {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            role: true,
                        },
                    },
                    categorie: {
                        select: {
                            id: true,
                            libelle: true,
                            description: true,
                        }
                    },
                    commentaires: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                    role: true,
                                }
                            }
                        },
                        orderBy: {
                            dateCreation: 'desc'
                        },
                    },
                    notations: {
                        select: {
                            note: true,
                            dateNotation: true,
                            userId: true,
                        }
                    },
                    reservations: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    nom: true,
                                    prenom: true,
                                }
                            }
                        }
                    },
                    _count: {
                        select: {
                            favoris: true,
                            commentaires: true,
                            notations: true,
                            historiques: true,
                            exemplaires: true,
                            reservations: true,
                        },
                    },
                },
            });
            if (!ressource) {
                throw new common_1.NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
            }
            const noteMoyenne = ressource.notations.length > 0
                ? ressource.notations.reduce((sum, notation) => sum + notation.note, 0) / ressource.notations.length
                : 0;
            return {
                ...ressource,
                noteMoyenne: parseFloat(noteMoyenne.toFixed(1)),
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de la ressource ${id}: ${error.message}`);
            throw error;
        }
    }
    async update(id, updateRessourceDto) {
        try {
            const ressourceExists = await this.prisma.ressource.findUnique({
                where: { id },
            });
            if (!ressourceExists) {
                throw new common_1.NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
            }
            const updateData = { ...updateRessourceDto };
            if (updateRessourceDto.auteurId) {
                updateData.auteur = { connect: { id: updateRessourceDto.auteurId } };
                delete updateData.auteurId;
            }
            if (updateRessourceDto.universiteId) {
                updateData.universite = { connect: { id: updateRessourceDto.universiteId } };
                delete updateData.universiteId;
            }
            if (updateRessourceDto.categorieId) {
                updateData.categorie = { connect: { id: updateRessourceDto.categorieId } };
                delete updateData.categorieId;
            }
            return this.prisma.ressource.update({
                where: { id },
                data: updateData,
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
                    },
                },
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors de la mise à jour de la ressource ${id}: ${error.message}`);
            throw error;
        }
    }
    async remove(id) {
        try {
            const ressourceExists = await this.prisma.ressource.findUnique({
                where: { id },
            });
            if (!ressourceExists) {
                throw new common_1.NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
            }
            await this.prisma.$transaction([
                this.prisma.favori.deleteMany({ where: { ressourceId: id } }),
                this.prisma.commentaire.deleteMany({ where: { ressourceId: id } }),
                this.prisma.notation.deleteMany({ where: { ressourceId: id } }),
                this.prisma.historiqueAcces.deleteMany({ where: { ressourceId: id } }),
                this.prisma.collectionRessource.deleteMany({ where: { ressourceId: id } }),
                this.prisma.reservation.deleteMany({ where: { ressourceId: id } }),
                this.prisma.exemplairePhysique.deleteMany({ where: { ressourceId: id } }),
                this.prisma.recommandation.deleteMany({ where: { ressourceId: id } }),
                this.prisma.donneesRecommandation.deleteMany({ where: { ressourceId: id } }),
                this.prisma.ressource.delete({ where: { id } }),
            ]);
            return { id, message: 'Ressource supprimée avec succès' };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la suppression de la ressource ${id}: ${error.message}`);
            throw error;
        }
    }
    async findByAuteur(auteurId, options = {}) {
        return this.findAll({
            ...options,
            auteurId,
        });
    }
    async findByUniversite(universiteId, options = {}) {
        return this.findAll({
            ...options,
        });
    }
    async findByCategorie(categorieId, options = {}) {
        return this.findAll({
            ...options,
            categorieId,
        });
    }
    async toggleArchivage(id) {
        try {
            const ressource = await this.prisma.ressource.findUnique({
                where: { id },
            });
            if (!ressource) {
                throw new common_1.NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
            }
            return this.prisma.ressource.update({
                where: { id },
                data: { estArchive: !ressource.estArchive },
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors du changement d'archivage de la ressource ${id}: ${error.message}`);
            throw error;
        }
    }
    async enregistrerAcces(data) {
        try {
            return this.prisma.historiqueAcces.create({
                data: {
                    userId: data.userId,
                    ressourceId: data.ressourceId,
                    typeAcces: data.typeAcces,
                    universiteSrc: data.universiteSrc,
                },
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors de l'enregistrement de l'accès: ${error.message}`);
            throw error;
        }
    }
    async getStatistiques(ressourceId) {
        try {
            const stats = await this.prisma.historiqueAcces.groupBy({
                by: ['typeAcces'],
                where: { ressourceId },
                _count: {
                    typeAcces: true,
                },
            });
            const totalAcces = await this.prisma.historiqueAcces.count({
                where: { ressourceId },
            });
            return {
                totalAcces,
                parType: stats.reduce((acc, stat) => {
                    acc[stat.typeAcces] = stat._count.typeAcces;
                    return acc;
                }, {}),
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des statistiques: ${error.message}`);
            throw error;
        }
    }
    async generateIsbnCode() {
        const dateNow = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
        const randomSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        const isbnCode = `UADB-${dateNow}-${randomSuffix}`;
        this.logger.log(`Génération de l'ISBN: ${isbnCode}`);
        return isbnCode;
    }
};
exports.RessourcesService = RessourcesService;
exports.RessourcesService = RessourcesService = RessourcesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RessourcesService);
//# sourceMappingURL=ressources.service.js.map