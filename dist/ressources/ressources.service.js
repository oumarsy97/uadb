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
            if (createRessourceDto.auteurId) {
                const existingRessource = await this.prisma.ressource.findFirst({
                    where: {
                        titre: createRessourceDto.titre,
                        auteurId: createRessourceDto.auteurId,
                    },
                });
                if (existingRessource) {
                    throw new common_1.BadRequestException('Une ressource avec le même titre existe déjà pour cet auteur');
                }
            }
            const data = {
                titre: createRessourceDto.titre,
                description: createRessourceDto.description,
                type: createRessourceDto.type,
                langue: createRessourceDto.langue || 'fr',
                urlFichier: createRessourceDto.urlFichier,
                format: createRessourceDto.format,
                motsCles: createRessourceDto.motsCles,
                universiteId: createRessourceDto.universiteId,
                image: createRessourceDto.image,
                niveauAcces: createRessourceDto.niveauAcces || 'PUBLIC',
                urlFichierLocal: createRessourceDto.urlFichierLocal,
                datePublication: new Date(),
            };
            if (createRessourceDto.auteurId) {
                data.auteurId = createRessourceDto.auteurId;
            }
            return this.prisma.ressource.create({
                data,
                include: {
                    auteur: true,
                },
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors de la création de la ressource: ${error.message}`);
            throw error;
        }
    }
    async findAll(options = {}) {
        const { page = 1, limit = 10, search = '', type, langue, universiteId, niveauAcces, estValide, estArchive, auteurId, orderBy = 'dateCreation', orderDirection = 'desc', } = options;
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { titre: { contains: search } },
                { description: { contains: search } },
                { motsCles: { contains: search } },
                { nomAuteurExterne: { contains: search } },
                { prenomAuteurExterne: { contains: search } },
            ];
        }
        if (type)
            where.type = type;
        if (langue)
            where.langue = langue;
        if (universiteId)
            where.universiteId = universiteId;
        if (niveauAcces)
            where.niveauAcces = niveauAcces;
        if (estValide !== undefined)
            where.estValide = estValide;
        if (estArchive !== undefined)
            where.estArchive = estArchive;
        if (auteurId)
            where.auteurId = auteurId;
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
                    _count: {
                        select: {
                            favoris: true,
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
                            favoris: true,
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
            return {
                ...ressource,
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
            return this.prisma.ressource.update({
                where: { id },
                data: updateRessourceDto,
                include: {
                    auteur: true,
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
            universiteId,
        });
    }
    async toggleValidation(id) {
        try {
            const ressource = await this.prisma.ressource.findUnique({
                where: { id },
            });
            if (!ressource) {
                throw new common_1.NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
            }
            return this.prisma.ressource.update({
                where: { id },
                data: { estValide: !ressource.estValide },
            });
        }
        catch (error) {
            this.logger.error(`Erreur lors du changement de validation de la ressource ${id}: ${error.message}`);
            throw error;
        }
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
};
exports.RessourcesService = RessourcesService;
exports.RessourcesService = RessourcesService = RessourcesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RessourcesService);
//# sourceMappingURL=ressources.service.js.map