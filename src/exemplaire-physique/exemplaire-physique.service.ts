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
      
      // Validation des champs obligatoires
      if (!createExemplairePhysiqueDto.cote) {
        throw new BadRequestException('La cote est obligatoire');
      }

      // Vérifier si un exemplaire avec la même cote existe déjà
      const existingExemplaire = await this.prisma.exemplairePhysique.findFirst({
        where: {
          cote: createExemplairePhysiqueDto.cote,
        },
      });

      // Gérer la ressource : créer la ressource
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
        auteurId: userId, // Utilisateur qui crée la ressource
        categorieId: createExemplairePhysiqueDto.categorieId,
      });
      
      const ressourceId = ressource.id;

      

      if (existingExemplaire) {
        throw new BadRequestException('Un exemplaire avec cette cote existe déjà');
      }

      // Générer un code QR unique
      const qrCode = await this.generateQRCode();

      // Préparer l'objet exemplaireData
      const exemplaireData: Prisma.ExemplairePhysiqueCreateInput = {
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
      disponible,
      ressourceId,
      localisation,
      orderBy = 'dateAcquisition',
      orderDirection = 'desc',
    } = options;

    const skip = (page - 1) * limit;

    // Construire la requête dynamiquement
    const where: Prisma.ExemplairePhysiqueWhereInput = {};

    // Recherche textuelle
    if (search) {
      where.OR = [
        { cote: { contains: search } },
        { localisation: { contains: search } },
        { qrCode: { contains: search } },
        { ressource: { titre: { contains: search } } },
        { ressource: { isbnglobale: { contains: search } } },
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
            take: 5, // Les 5 derniers emprunts
          },
          _count: {
            select: {
              emprunts: true,
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

      // Vérifier si la cote est unique (si elle est modifiée)
      if (updateExemplairePhysiqueDto.cote && updateExemplairePhysiqueDto.cote !== exemplaireExists.cote) {
        const existingWithSameCote = await this.prisma.exemplairePhysique.findFirst({
          where: {
            cote: updateExemplairePhysiqueDto.cote,
            id: { not: id }
          },
        });

        if (existingWithSameCote) {
          throw new BadRequestException('Un exemplaire avec cette cote existe déjà');
        }
      }

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
              emprunts: true,
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

  async toggleDisponibilite(id: string) {
    try {
      const exemplairePhysique = await this.prisma.exemplairePhysique.findUnique({
        where: { id },
      });

      if (!exemplairePhysique) {
        throw new NotFoundException(`Exemplaire physique avec l'ID ${id} non trouvé`);
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
    } catch (error) {
      this.logger.error(`Erreur lors du changement de disponibilité de l'exemplaire physique ${id}: ${error.message}`);
      throw error;
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
        }, {} as Record<EtatExemplaire, number>),
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des statistiques: ${error.message}`);
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
}