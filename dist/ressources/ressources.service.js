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
const prisma_1 = require("../../generated/prisma/index.js");
const historique_acces_service_1 = require("../interactions/historique-acces/historique-acces.service");
let RessourcesService = RessourcesService_1 = class RessourcesService {
    prisma;
    historiqueAccesService;
    logger = new common_1.Logger(RessourcesService_1.name);
    constructor(prisma, historiqueAccesService) {
        this.prisma = prisma;
        this.historiqueAccesService = historiqueAccesService;
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
            console.log('ID de la catégorie:', categorieId);
            if (!categorieId) {
                this.logger.log('Aucune catégorie spécifiée, utilisation de la catégorie par défaut');
                categorieId = await this.getOrCreateDefaultCategory();
            }
            let finalAuteurId;
            let finalNomAuteur;
            if (auteurExists.role === 'ENSEIGNANT') {
                finalAuteurId = createRessourceDto.auteurId;
                finalNomAuteur = `${auteurExists.prenom} ${auteurExists.nom}`;
            }
            else {
                finalAuteurId = null;
                finalNomAuteur = createRessourceDto.nomAuteur || '';
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
                ...(finalAuteurId
                    ? { auteur: { connect: { id: finalAuteurId } } }
                    : {}),
                nomAuteur: finalNomAuteur,
                categorie: {
                    connect: { id: categorieId }
                },
            };
            this.logger.log(`Données finales pour création: ${JSON.stringify(data, null, 2)}`);
            const ressource = await this.prisma.ressource.create({
                data,
                include: {
                    auteur: finalAuteurId ? {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            role: true,
                        }
                    } : undefined,
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
                    favoris: true,
                    auteur: {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            role: true,
                        },
                    },
                    exemplaire: true,
                    categorie: {
                        select: {
                            id: true,
                            libelle: true,
                            description: true,
                        }
                    },
                    _count: {
                        select: {
                            commentaires: true,
                            notations: true,
                            historiques: true,
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
    async findOne(id, userId) {
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
                    _count: {
                        select: {
                            commentaires: true,
                            notations: true,
                            historiques: true,
                        },
                    },
                },
            });
            if (!ressource) {
                throw new common_1.NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
            }
            if (userId) {
                try {
                    await this.historiqueAccesService.enregistrerAcces(userId, id, prisma_1.TypeAcces.CONSULTATION, process.env.CURRENT_UNIVERSITY || 'uadb');
                    this.logger.log(`Accès CONSULTATION enregistré pour la ressource ${id} par l'utilisateur ${userId}`);
                }
                catch (historiqueError) {
                    this.logger.warn(`Erreur lors de l'enregistrement de l'historique: ${historiqueError.message}`);
                }
            }
            return ressource;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de la ressource ${id}: ${error.message}`);
            throw error;
        }
    }
    async downloadRessource(id, userId) {
        try {
            const ressource = await this.findOne(id);
            if (!ressource) {
                throw new common_1.NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
            }
            await this.historiqueAccesService.enregistrerAcces(userId, id, prisma_1.TypeAcces.TELECHARGEMENT, process.env.CURRENT_UNIVERSITY || 'uadb');
            this.logger.log(`Accès TELECHARGEMENT enregistré pour la ressource ${id} par l'utilisateur ${userId}`);
            return {
                message: 'Téléchargement autorisé',
                ressource: {
                    id: ressource.id,
                    titre: ressource.titre,
                    urlFichier: ressource.urlFichier,
                    urlFichierLocal: ressource.urlFichierLocal,
                    format: ressource.format
                }
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors du téléchargement de la ressource ${id}: ${error.message}`);
            throw error;
        }
    }
    async update(id, updateRessourceDto, userId) {
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
            const updatedRessource = await this.prisma.ressource.update({
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
            return updatedRessource;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la mise à jour de la ressource ${id}: ${error.message}`);
            throw error;
        }
    }
    async remove(id, userId) {
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
    async toggleArchivage(id, userId) {
        try {
            const ressource = await this.prisma.ressource.findUnique({
                where: { id },
            });
            if (!ressource) {
                throw new common_1.NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
            }
            const updatedRessource = await this.prisma.ressource.update({
                where: { id },
                data: { estArchive: !ressource.estArchive },
            });
            return updatedRessource;
        }
        catch (error) {
            this.logger.error(`Erreur lors du changement d'archivage de la ressource ${id}: ${error.message}`);
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
    async findTopRated(options = {}) {
        const { limit = 5, orderBy = 'noteMoyenne', orderDirection = 'desc' } = options;
        try {
            const ressources = await this.prisma.ressource.findMany({
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
                    _count: {
                        select: {
                            commentaires: true,
                            notations: true,
                            historiques: true,
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
            return ressourcesAvecNotes;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des ressources les mieux notées: ${error.message}`);
            throw error;
        }
    }
    async findRecentlyAccessed(limit = 5) {
        try {
            const ressources = await this.prisma.historiqueAcces.findMany({
                take: +limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    ressource: {
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
                                },
                            },
                        },
                    },
                },
            });
            return ressources.map((ha) => ha.ressource);
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des ressources récemment accédées: ${error.message}`);
            throw error;
        }
    }
    async findTopAccessed(options = {}) {
        const { limit = 5, orderBy = 'dateAcces', orderDirection = 'desc' } = options;
        try {
            const ressources = await this.prisma.historiqueAcces.groupBy({
                by: ['ressourceId'],
                _count: {
                    ressourceId: true,
                },
                orderBy: {
                    _count: {
                        ressourceId: orderDirection,
                    },
                },
                take: +limit,
            });
            return ressources;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des ressources les plus consultées: ${error.message}`);
            throw error;
        }
    }
    async getHistoriqueRessource(ressourceId, limit = 50) {
        try {
            return await this.historiqueAccesService.getHistoriqueRessource(ressourceId, false, limit);
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de l'historique de la ressource ${ressourceId}: ${error.message}`);
            throw error;
        }
    }
    async compterAccesRessource(ressourceId, typeAcces) {
        try {
            return await this.historiqueAccesService.compterAcces(ressourceId, false, typeAcces);
        }
        catch (error) {
            this.logger.error(`Erreur lors du comptage des accès de la ressource ${ressourceId}: ${error.message}`);
            throw error;
        }
    }
    async incrementVue(ressourceId) {
        try {
            return await this.prisma.ressource.update({
                where: { id: ressourceId },
                data: { vues: { increment: 1 } },
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors de l'incrementation des vues de la ressource ${ressourceId}: ${error.message}`);
            throw error;
        }
    }
    async incrementTelechargement(ressourceId) {
        try {
            return await this.prisma.ressource.update({
                where: { id: ressourceId },
                data: { telechargements: { increment: 1 } },
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors de l'incrementation des téléchargements de la ressource ${ressourceId}: ${error.message}`);
            throw error;
        }
    }
};
exports.RessourcesService = RessourcesService;
exports.RessourcesService = RessourcesService = RessourcesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        historique_acces_service_1.HistoriqueAccesService])
], RessourcesService);
//# sourceMappingURL=ressources.service.js.map