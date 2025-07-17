import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExemplairePhysiqueDto } from './dto/create-exemplaire-physique.dto';
import { SearchExemplairePhysiqueDto, UpdateExemplairePhysiqueDto } from './dto/update-exemplaire-physique.dto';
import { Prisma, ExemplairePhysique, EtatExemplaire } from 'generated/prisma';
import { RessourcesService } from 'src/ressources/ressources.service';

@Injectable()
export class ExemplairePhysiqueService {
  
  private readonly logger = new Logger(ExemplairePhysiqueService.name);

  constructor(
    private readonly prisma: PrismaService, 
    private readonly ressourcesService: RessourcesService
  ) {}

  async create(createExemplairePhysiqueDto: CreateExemplairePhysiqueDto, userId: string) {
    try {
      this.logger.log(`Création d'un exemplaire physique par l'utilisateur: ${userId}`);
      this.logger.log(`Création d'un exemplaire physique: ${JSON.stringify(createExemplairePhysiqueDto, null, 2)}`);

      // Vérifier si l'utilisateur existe et récupérer ses informations
      const userExists = await this.prisma.user.findUnique({
        where: { id: userId }
      });
      
      if (!userExists) {
        throw new BadRequestException('L\'utilisateur spécifié n\'existe pas');
      }

      // Déterminer l'auteur selon la même logique que RessourcesService
      let finalAuteurId: string | null;
      let finalNomAuteur: string;

      if (userExists.role === 'ENSEIGNANT') {
        // Si c'est un enseignant, on garde l'auteurId et on utilise ses nom/prénom
        finalAuteurId = userId;
        finalNomAuteur = `${userExists.prenom} ${userExists.nom}`;
      } else {
        // Si ce n'est pas un enseignant, auteurId devient null et on utilise nomAuteur du DTO ou nom/prénom
        finalAuteurId = null;
        finalNomAuteur = createExemplairePhysiqueDto.nomAuteur || `${userExists.prenom} ${userExists.nom}`;
      }

      // Gérer la ressource : créer la ressource avec la logique d'auteur
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
        auteurId: userId, // Peut être null si ce n'est pas un enseignant
        nomAuteur: finalNomAuteur, // Nom d'auteur déterminé selon la logique
        categorieId: createExemplairePhysiqueDto.categorieId,
      });
      
      const ressourceId = ressource.id;

      // Générer un code QR unique
      const qrCode = await this.generateQRCode();

      // Préparer l'objet exemplaireData
      const exemplaireData: Prisma.ExemplairePhysiqueCreateInput = {
        id: ressourceId,
        localisation: createExemplairePhysiqueDto.localisation || 'Tiroir 1, Etagère 2',
        qrCode,
        nombre: createExemplairePhysiqueDto.nombre || 1,
        nombreDisponible: createExemplairePhysiqueDto.nombre || 1,
        etat: EtatExemplaire.BON,
        dateAcquisition: new Date(),
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
              nomAuteur: true, // Inclure le nom d'auteur calculé
              auteur: finalAuteurId ? {
                select: {
                  id: true,
                  nom: true,
                  prenom: true,
                  role: true,
                }
              } : undefined, // N'inclure l'auteur que s'il y en a un
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

    } catch (error) {
      this.logger.error(`Erreur lors de la création de l'exemplaire physique: ${error.message}`);
      this.logger.error(`Stack trace: ${error.stack}`);
      throw error;
    }
  }

  async findAll(options: SearchExemplairePhysiqueDto = {}) {
    const {
      page = 1,
      limit = 10,
      search = '',
      etat,
      ressourceId,
      localisation,
      orderBy = 'dateAcquisition',
      orderDirection = 'desc',
    } = options;

    const skip = (page - 1) * limit;

    // Construire la requête dynamiquement
    const where: Prisma.ExemplairePhysiqueWhereInput = {};

    // Recherche textuelle incluant le nom d'auteur
    if (search) {
      where.OR = [
        { localisation: { contains: search } },
        { qrCode: { contains: search } },
        { ressource: { titre: { contains: search } } },
        { ressource: { isbnglobale: { contains: search } } },
        { ressource: { nomAuteur: { contains: search } } }, // Recherche dans nomAuteur
      ];
    }

    if (etat) where.etat = etat;
    if (ressourceId) where.ressourceId = ressourceId;
    if (localisation) where.localisation = { contains: localisation };

    try {
      // Récupération du nombre total pour la pagination
      const total = await this.prisma.exemplairePhysique.count({ where });

      // Récupération des exemplaires avec relations
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
              image: true,
              nomAuteur: true, // Inclure le nom d'auteur
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
                }
              }
            }
          },
          _count: {
            select: {
              empruntExemplaires: true,
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
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des exemplaires physiques: ${error.message}`);
      throw error;
    }
  }

  async findOne(id: string) {
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
          empruntExemplaires: {
            include: {
             emprunt: {
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
          },
          orderBy: {
            dateEmprunt: 'desc'
          },
          take: 5, // Les 5 derniers emprunts
        },
        _count: {
          select: {
            empruntExemplaires: true,
          },
        },
        },
      });
      
      if (!exemplairePhysique) {
        throw new NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
      }

      return exemplairePhysique;
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de l'exemplaire physique ${id}: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updateExemplairePhysiqueDto: UpdateExemplairePhysiqueDto) {
    try {
      // Vérifier si l'exemplaire existe
      const exemplaireExists = await this.prisma.exemplairePhysique.findUnique({
        where: { id },
      });

      if (!exemplaireExists) {
        throw new NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
      }

      this.logger.log(`Mise à jour de l'exemplaire physique ${id} avec les données: ${JSON.stringify(updateExemplairePhysiqueDto, null, 2)}`);

      // Préparer les données de mise à jour
      const updateData: any = { ...updateExemplairePhysiqueDto };

      // Gérer la relation ressource si elle est modifiée
      if (updateExemplairePhysiqueDto.ressourceId) {
        // Vérifier si la nouvelle ressource existe
        const ressourceExists = await this.prisma.ressource.findUnique({
          where: { id: updateExemplairePhysiqueDto.ressourceId }
        });

        if (!ressourceExists) {
          throw new BadRequestException('La ressource spécifiée n\'existe pas');
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
              nomAuteur: true, // Inclure le nom d'auteur
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
                }
              }
            }
          },
        },
      });
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de l'exemplaire physique ${id}: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      // Vérifier si l'exemplaire existe
      const exemplaireExists = await this.prisma.exemplairePhysique.findUnique({
        where: { id },
        include: {
          _count: {
            select: {
              empruntExemplaires: true,
            }
          }
        }
      });

      if (!exemplaireExists) {
        throw new NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
      }

      // Vérifier s'il y a des emprunts en cours
      const empruntsEnCours = await this.prisma.emprunt.count({
        where: {
          exemplaireId: id,
          dateRetourEffective: null, // Emprunts non retournés
        }
      });

      if (empruntsEnCours > 0) {
        throw new BadRequestException('Impossible de supprimer un exemplaire ayant des emprunts en cours');
      }

      // Suppression avec toutes les relations
      await this.prisma.$transaction([
        this.prisma.emprunt.deleteMany({ where: { exemplaireId: id } }),
        this.prisma.exemplairePhysique.delete({ where: { id } }),
      ]);

      return { id, message: 'Exemplaire physique supprimé avec succès' };
    } catch (error) {
      this.logger.error(`Erreur lors de la suppression de l'exemplaire physique ${id}: ${error.message}`);
      throw error;
    }
  }

  async findByRessource(ressourceId: string, options: SearchExemplairePhysiqueDto = {}) {
    return this.findAll({
      ...options,
      ressourceId,
    });
  }

  async findByQRCode(qrCode: string) {
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
                  role: true,
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
        throw new NotFoundException(`Exemplaire physique avec le QR Code ${qrCode} non trouvé`);
      }

      return exemplairePhysique;
    } catch (error) {
      this.logger.error(`Erreur lors de la recherche par QR Code ${qrCode}: ${error.message}`);
      throw error;
    }
  }

  // Nouvelle méthode pour gérer la disponibilité basée sur nombredisponible
  async updateDisponibilite(id: string, quantite: number) {
    try {
      const exemplairePhysique = await this.prisma.exemplairePhysique.findUnique({
        where: { id },
      });

      if (!exemplairePhysique) {
        throw new NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
      }

      const nouveauNombreDisponible = exemplairePhysique.nombreDisponible + quantite;
      
      // Vérifier que le nombre disponible ne dépasse pas le nombre total
      if (nouveauNombreDisponible > exemplairePhysique.nombre) {
        throw new BadRequestException('Le nombre disponible ne peut pas dépasser le nombre total d\'exemplaires');
      }

      // Vérifier que le nombre disponible ne soit pas négatif
      if (nouveauNombreDisponible < 0) {
        throw new BadRequestException('Le nombre disponible ne peut pas être négatif');
      }

      return await this.prisma.exemplairePhysique.update({
        where: { id },
        data: {
          nombreDisponible: nouveauNombreDisponible
        },
        include: {
          ressource: {
            select: {
              id: true,
              titre: true,
              nomAuteur: true,
            }
          }
        }
      });
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de la disponibilité de l'exemplaire physique ${id}: ${error.message}`);
      throw error;
    }
  }

  // Méthode pour vérifier la disponibilité
  async isDisponible(id: string, quantiteDemandee: number = 1): Promise<boolean> {
    try {
      const exemplairePhysique = await this.prisma.exemplairePhysique.findUnique({
        where: { id },
        select: { nombreDisponible: true }
      });

      if (!exemplairePhysique) {
        return false;
      }

      return exemplairePhysique.nombreDisponible >= quantiteDemandee;
    } catch (error) {
      this.logger.error(`Erreur lors de la vérification de disponibilité de l'exemplaire physique ${id}: ${error.message}`);
      return false;
    }
  }

  async getStatistiques(ressourceId?: string) {
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

      // Calcul des statistiques de disponibilité
      const exemplaires = await this.prisma.exemplairePhysique.findMany({
        where,
        select: {
          nombre: true,
          nombreDisponible: true,
        }
      });

      const totalStock = exemplaires.reduce((sum, ex) => sum + ex.nombre, 0);
      const totalDisponible = exemplaires.reduce((sum, ex) => sum + ex.nombreDisponible, 0);
      const totalEmprunte = totalStock - totalDisponible;

      // Exemplaires avec au moins un exemplaire disponible
      const exemplairesDispo = exemplaires.filter(ex => ex.nombreDisponible > 0).length;
      const exemplairesEpuises = exemplaires.filter(ex => ex.nombreDisponible === 0).length;

      return {
        totalExemplaires,
        totalStock,
        totalDisponible,
        totalEmprunte,
        exemplairesDispo,
        exemplairesEpuises,
        parEtat: parEtat.reduce((acc, stat) => {
          acc[stat.etat] = stat._count.etat;
          return acc;
        }, {} as Record<EtatExemplaire, number>),
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des statistiques: ${error.message}`);
      throw error;
    }
  }

  // Méthode pour ajuster le stock (augmenter/diminuer le nombre d'exemplaires)
  async ajusterStock(id: string, nouveauNombre: number) {
    try {
      const exemplairePhysique = await this.prisma.exemplairePhysique.findUnique({
        where: { id },
      });

      if (!exemplairePhysique) {
        throw new NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
      }

      if (nouveauNombre < 0) {
        throw new BadRequestException('Le nombre d\'exemplaires ne peut pas être négatif');
      }

      // Calculer le nouveau nombre disponible
      const difference = nouveauNombre - exemplairePhysique.nombre;
      const nouveauNombreDisponible = Math.max(0, exemplairePhysique.nombreDisponible + difference);

      return await this.prisma.exemplairePhysique.update({
        where: { id },
        data: {
          nombre: nouveauNombre,
          nombreDisponible: nouveauNombreDisponible
        },
        include: {
          ressource: {
            select: {
              id: true,
              titre: true,
              nomAuteur: true,
            }
          }
        }
      });
    } catch (error) {
      this.logger.error(`Erreur lors de l'ajustement du stock de l'exemplaire physique ${id}: ${error.message}`);
      throw error;
    }
  }

  private async generateQRCode(): Promise<string> {
    // Générer un code QR unique basé sur timestamp et random
    const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
    const randomSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const qrCode = `QR-${timestamp}-${randomSuffix}`;
    
    // Vérifier l'unicité
    const existing = await this.prisma.exemplairePhysique.findFirst({
      where: { qrCode }
    });
    
    if (existing) {
      // Récursion si le code existe déjà (très peu probable)
      return this.generateQRCode();
    }
    
    this.logger.log(`Génération du QR Code: ${qrCode}`);
    return qrCode;
  }

  toggleDisponibilite(id: string) {
    return this.prisma.exemplairePhysique.update({
      where: { id },
      data: {
        nombreDisponible: {
          decrement: 1
        }
      },
      include: {
        ressource: {
          select: {
            id: true,
            titre: true,
            nomAuteur: true, // Inclure le nom d'auteur
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
              }
            }
          }
        }
      },
    });
  }

  async findByLocalisation(localisation: string) {
    try {
      const exemplaires = await this.prisma.exemplairePhysique.findMany({
        where: {
          localisation: {
            contains: localisation
          }
        },
        include: {
          ressource: {
            select: {
              id: true,
              titre: true,
              isbnglobale: true,
              nomAuteur: true, // Inclure le nom d'auteur
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
                }
              }
            }
          },
        },
      });

      if (exemplaires.length === 0) {
        throw new NotFoundException(`Aucun exemplaire physique trouvé pour la localisation "${localisation}"`);
      }

      return exemplaires;
    } catch (error) {
      this.logger.error(`Erreur lors de la recherche par localisation "${localisation}": ${error.message}`);
      throw error;
    }
  }

  async findByEtat(etat: EtatExemplaire) {
    try {
      const exemplaires = await this.prisma.exemplairePhysique.findMany({
        where: { etat },
        include: {
          ressource: {
            select: {
              id: true,
              titre: true,
              isbnglobale: true,
              nomAuteur: true, // Inclure le nom d'auteur
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
                }
              }
            }
          },
        },
      });

      if (exemplaires.length === 0) {
        throw new NotFoundException(`Aucun exemplaire physique trouvé pour l'état "${etat}"`);
      }

      return exemplaires;
    } catch (error) {
      this.logger.error(`Erreur lors de la recherche par état "${etat}": ${error.message}`);
      throw error;
    }
  }

  async findByRessourceAndEtat(ressourceId: string, etat: EtatExemplaire) {
    try {
      const exemplaires = await this.prisma.exemplairePhysique.findMany({
        where: {
          ressourceId,
          etat,
        },
        include: {
          ressource: {
            select: {
              id: true,
              titre: true,
              isbnglobale: true,
              nomAuteur: true, // Inclure le nom d'auteur
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
                }
              }
            }
          },
        },
      });

      if (exemplaires.length === 0) {
        throw new NotFoundException(`Aucun exemplaire physique trouvé pour la ressource ID "${ressourceId}" et l'état "${etat}"`);
      }

      return exemplaires;
    } catch (error) {
      this.logger.error(`Erreur lors de la recherche par ressource ID "${ressourceId}" et état "${etat}": ${error.message}`);
      throw error;
    }
  }
}