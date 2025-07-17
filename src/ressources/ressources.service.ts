// ressources.service.ts
import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
import { Prisma, Ressource, TypeAcces,  } from 'generated/prisma';
import { HistoriqueAccesService } from 'src/interactions/historique-acces/historique-acces.service';

@Injectable()
export class RessourcesService {
  private readonly logger = new Logger(RessourcesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly historiqueAccesService: HistoriqueAccesService // Injection du service d'historique
  ) {}

  async create(createRessourceDto: CreateRessourceDto): Promise<Ressource> {
    try {
      this.logger.log(`Création d'une ressource: ${JSON.stringify(createRessourceDto, null, 2)}`);
      
      // Validation des champs obligatoires
      if (!createRessourceDto.auteurId) {
        throw new BadRequestException('L\'ID de l\'auteur est obligatoire');
      }

      // Vérifier si l'auteur existe
      const auteurExists = await this.prisma.user.findUnique({
        where: { id: createRessourceDto.auteurId }
      });
      
      if (!auteurExists) {
        throw new BadRequestException('L\'auteur spécifié n\'existe pas');
      }

      // Vérifier si une ressource existe déjà avec le même titre et le même auteur
      const existingRessource = await this.prisma.ressource.findFirst({
        where: {
          titre: createRessourceDto.titre,
          auteurId: createRessourceDto.auteurId,
        },
      });

      if (existingRessource) {
        throw new BadRequestException('Une ressource avec le même titre existe déjà pour cet auteur');
      }

      // Gestion de la catégorie - utiliser directement categorieId s'il est fourni
      let categorieId = createRessourceDto.categorieId;
      
      if (!categorieId) {
        this.logger.log('Aucune catégorie spécifiée, utilisation de la catégorie par défaut');
        categorieId = await this.getOrCreateDefaultCategory();
      }

      // Vérifier le rôle de l'auteur et définir les variables appropriées
      let finalAuteurId: string | null;
      let finalNomAuteur: string;

      if (auteurExists.role === 'ENSEIGNANT') {
        finalAuteurId = createRessourceDto.auteurId;
        finalNomAuteur = `${auteurExists.prenom} ${auteurExists.nom}`;
      } else {
        finalAuteurId = null;
        finalNomAuteur = createRessourceDto.nomAuteur || `${auteurExists.prenom} ${auteurExists.nom}`;
      }

      // Générer un ISBN global unique
      const isbnglobale = await this.generateIsbnCode();

      // Préparer l'objet data avec tous les champs du modèle
      const data: Prisma.RessourceCreateInput = {
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
      
    } catch (error) {
      this.logger.error(`Erreur lors de la création de la ressource: ${error.message}`);
      this.logger.error(`Stack trace: ${error.stack}`);
      throw error;
    }
  }

  private async getOrCreateDefaultCategory(): Promise<string> {
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

  async findAll(options: SearchRessourceDto = {}) {
    const {
      page = 1,
      limit = 10,
      search = '',
      langue,
      niveauAcces,
      estArchive,
      auteurId,
      categorieId,
      orderBy = 'datePublication',
      orderDirection = 'desc',
    } = options;

    const skip = (page - 1) * limit;

    const where: Prisma.RessourceWhereInput = {};

    if (search) {
      where.OR = [
        { titre: { contains: search } },
        { description: { contains: search } },
        { motsCles: { contains: search } },
        { isbnglobale: { contains: search } },
      ];
    }

    if (langue) where.langue = langue;
    if (estArchive !== undefined) where.estArchive = estArchive;
    if (niveauAcces) where.niveauAcces = niveauAcces;
    if (auteurId) where.auteurId = auteurId;
    if (categorieId) where.categorieId = categorieId;

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

      const ressourcesAvecNotes = await Promise.all(
        ressources.map(async (ressource) => {
          const notations = await this.prisma.notation.findMany({
            where: { ressourceId: ressource.id },
            select: { note: true },
          });

          const noteMoyenne =
            notations.length > 0
              ? notations.reduce((sum, notation) => sum + notation.note, 0) / notations.length
              : 0;

          return {
            ...ressource,
            noteMoyenne: parseFloat(noteMoyenne.toFixed(1)),
          };
        }),
      );

      return {
        data: ressourcesAvecNotes,
        meta: {
          total,
          page: Number(page),
          limit: Number(limit),
          pages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des ressources: ${error.message}`);
      throw error;
    }
  }

  // Méthode modifiée pour enregistrer les accès de consultation
  async findOne(id: string, userId?: string) {
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
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      // Enregistrer l'accès de consultation si un userId est fourni
      if (userId) {
        try {
          await this.historiqueAccesService.enregistrerAcces(
            userId,
            id,
            TypeAcces.CONSULTATION,
            process.env.CURRENT_UNIVERSITY || 'uadb'
          );
          this.logger.log(`Accès CONSULTATION enregistré pour la ressource ${id} par l'utilisateur ${userId}`);
        } catch (historiqueError) {
          this.logger.warn(`Erreur lors de l'enregistrement de l'historique: ${historiqueError.message}`);
        }
      }

      return ressource;
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  // Méthode pour enregistrer le téléchargement d'une ressource
  async downloadRessource(id: string, userId: string) {
    try {
      const ressource = await this.findOne(id);
      
      if (!ressource) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      // Enregistrer l'accès de téléchargement
      await this.historiqueAccesService.enregistrerAcces(
        userId,
        id,
        TypeAcces.TELECHARGEMENT,
        process.env.CURRENT_UNIVERSITY || 'uadb'
      );

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
    } catch (error) {
      this.logger.error(`Erreur lors du téléchargement de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updateRessourceDto: UpdateRessourceDto, userId?: string) {
    try {
      const ressourceExists = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressourceExists) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      const updateData: any = { ...updateRessourceDto };

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
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string, userId?: string) {
    try {
      const ressourceExists = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressourceExists) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

     
      // Suppression avec toutes les relations
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
    } catch (error) {
      this.logger.error(`Erreur lors de la suppression de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async findByAuteur(auteurId: string, options: SearchRessourceDto = {}) {
    return this.findAll({
      ...options,
      auteurId,
    });
  }

  async findByUniversite(universiteId: string, options: SearchRessourceDto = {}) {
    return this.findAll({
      ...options,
    });
  }

  async findByCategorie(categorieId: string, options: SearchRessourceDto = {}) {
    return this.findAll({
      ...options,
      categorieId,
    });
  }

  async toggleArchivage(id: string, userId?: string) {
    try {
      const ressource = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressource) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      const updatedRessource = await this.prisma.ressource.update({
        where: { id },
        data: { estArchive: !ressource.estArchive },
      });

     

      return updatedRessource;
    } catch (error) {
      this.logger.error(`Erreur lors du changement d'archivage de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async getStatistiques(ressourceId: string) {
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
        }, {} as Record<string, number>),
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des statistiques: ${error.message}`);
      throw error;
    }
  }

  private async generateIsbnCode(): Promise<string> {
    const dateNow = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
    const randomSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const isbnCode = `UADB-${dateNow}-${randomSuffix}`;
    this.logger.log(`Génération de l'ISBN: ${isbnCode}`);
    return isbnCode;
  }

  async findTopRated(options: SearchRessourceDto = {}) {
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

      const ressourcesAvecNotes = await Promise.all(
        ressources.map(async (ressource) => {
          const notations = await this.prisma.notation.findMany({
            where: { ressourceId: ressource.id },
            select: { note: true },
          });

          const noteMoyenne =
            notations.length > 0
              ? notations.reduce((sum, notation) => sum + notation.note, 0) / notations.length
              : 0;

          return {
            ...ressource,
            noteMoyenne: parseFloat(noteMoyenne.toFixed(1)),
          };
        }),
      );

      return ressourcesAvecNotes;
    } catch (error) {
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
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des ressources récemment accédées: ${error.message}`);
      throw error;
    }
  }

  async findTopAccessed(options: SearchRessourceDto = {}) {
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
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des ressources les plus consultées: ${error.message}`);
      throw error;
    }
  }

  // Méthode pour obtenir l'historique d'une ressource
  async getHistoriqueRessource(ressourceId: string, limit = 50) {
    try {
      return await this.historiqueAccesService.getHistoriqueRessource(ressourceId, false, limit);
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de l'historique de la ressource ${ressourceId}: ${error.message}`);
      throw error;
    }
  }

  // Méthode pour compter les accès d'une ressource
  async compterAccesRessource(ressourceId: string, typeAcces?: TypeAcces) {
    try {
      return await this.historiqueAccesService.compterAcces(ressourceId, false, typeAcces);
    } catch (error) {
      this.logger.error(`Erreur lors du comptage des accès de la ressource ${ressourceId}: ${error.message}`);
      throw error;
    }
  }
}