// ressources.service.ts
import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
import { Prisma, Ressource, TypeAcces, TypeValidation } from 'generated/prisma';

@Injectable()
export class RessourcesService {
  private readonly logger = new Logger(RessourcesService.name);

  constructor(private readonly prisma: PrismaService) {}

  // ressources.service.ts (méthode create complètement refactorisée)
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

    // ✅ Gestion intelligente de la catégorie
    let categorieId: string | null = createRessourceDto.categorieId;
    
    if (categorieId) {
      // Vérifier si la catégorie fournie existe
      const categorieExists = await this.prisma.categorie.findUnique({
        where: { id: categorieId }
      });
      
      if (!categorieExists) {
        this.logger.warn(`Catégorie ${categorieId} non trouvée, utilisation de la catégorie par défaut`);
        categorieId = null; // Force l'utilisation de la catégorie par défaut
      }
    }
    
    if (!categorieId) {
      // Chercher ou créer une catégorie par défaut
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
        // Créer une catégorie par défaut
        categorieParDefaut = await this.prisma.categorie.create({
          data: {
            libelle: 'Non classé',
            description: 'Catégorie par défaut pour les ressources non classées',
            // Ajoutez d'autres champs obligatoires de votre modèle Categorie si nécessaire
          }
        });
        this.logger.log(`Nouvelle catégorie par défaut créée: ${categorieParDefaut.libelle} (ID: ${categorieParDefaut.id})`);
      }
      
      categorieId = categorieParDefaut.id;
      this.logger.log(`Catégorie par défaut utilisée: ${categorieParDefaut.libelle} (ID: ${categorieId})`);
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
    
  } catch (error) {
    this.logger.error(`Erreur lors de la création de la ressource: ${error.message}`);
    this.logger.error(`Stack trace: ${error.stack}`);
    throw error;
  }
}

// ✅ Méthode utilitaire pour obtenir ou créer une catégorie par défaut
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

    // Construire la requête dynamiquement
    const where: Prisma.RessourceWhereInput = {};

    // Recherche textuelle
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
      // Récupération du nombre total pour la pagination
      const total = await this.prisma.ressource.count({ where });

      // Récupération des ressources avec toutes les relations
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

      // Calculer les notes moyennes
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

  async findOne(id: string) {
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
          // exemplaires: {
          //   include: {
          //     exemplairePhysique: {
          //       select: {
          //         id: true,
          //         code: true,
          //         etat: true,
          //         dateCreation: true,
          //       }
          //     }
          //   }
          // },
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
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      // Calculer la note moyenne
      const noteMoyenne = ressource.notations.length > 0
        ? ressource.notations.reduce((sum, notation) => sum + notation.note, 0) / ressource.notations.length
        : 0;

      return {
        ...ressource,
        noteMoyenne: parseFloat(noteMoyenne.toFixed(1)),
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updateRessourceDto: UpdateRessourceDto) {
    try {
      // Vérifier si la ressource existe
      const ressourceExists = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressourceExists) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      // Préparer les données de mise à jour
      const updateData: any = { ...updateRessourceDto };

      // Gérer les relations si elles sont modifiées
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
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      // Vérifier si la ressource existe
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
        this.prisma.reservation.deleteMany({ where: { ressourceId: id } }),
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

  async toggleArchivage(id: string) {
    try {
      const ressource = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressource) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      return this.prisma.ressource.update({
        where: { id },
        data: { estArchive: !ressource.estArchive },
      });
    } catch (error) {
      this.logger.error(`Erreur lors du changement d'archivage de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

 

  async enregistrerAcces(data: { 
    userId: string; 
    ressourceId: string; 
    typeAcces: TypeAcces;
    ipAcces: string;
    universiteSrc?: string;
  }) {
    try {
      return this.prisma.historiqueAcces.create({
        data: {
          userId: data.userId,
          ressourceId: data.ressourceId,
          typeAcces: data.typeAcces,
          universiteSrc: data.universiteSrc,
        },
      });
    } catch (error) {
      this.logger.error(`Erreur lors de l'enregistrement de l'accès: ${error.message}`);
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
    // Générer un code ISBN unique UADB-datenow
    const dateNow = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14); // Format YYYYMMDDHHMMSS
    const randomSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // 4 chiffres aléatoires
    const isbnCode = `UADB-${dateNow}-${randomSuffix}`;
    this.logger.log(`Génération de l'ISBN: ${isbnCode}`);
    return isbnCode;
  
  }
}