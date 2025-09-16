import { Injectable, BadRequestException, NotFoundException, ForbiddenException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpruntDto, ReturnEmpruntDto, ExtendEmpruntDto, EmpruntStats, CreateEmpruntExterneDto } from './dto/create-emprunte.dto';
import { EtatExemplaire , StatutEmprunt } from 'generated/prisma';


@Injectable()
export class EmprunteService {
  constructor(private readonly prisma: PrismaService,) {}

  /**
   * Créer un emprunt externe (pour utilisateurs d'autres universités)
   */
  async createEmpruntExterne(dto: CreateEmpruntExterneDto) {
    // Vérifier la disponibilité des exemplaires
    const exemplaires = await this.prisma.exemplairePhysique.findMany({
      where: {
        id: { in: dto.exemplaireIds },
        nombreDisponible: { gt: 0 },
        // Vérifier que les exemplaires sont autorisés pour emprunts externes
        // autorisationEmpruntExterne: true // À ajouter dans votre modèle si nécessaire
      }
    });

    if (exemplaires.length !== dto.exemplaireIds.length) {
      throw new BadRequestException('Certains exemplaires ne sont pas disponibles pour emprunt externe');
    }

    // Durée spécifique pour emprunts externes (généralement plus courte)
    const dureeEmpruntExterne = dto.dureeEmprunt || 7; // 7 jours par défaut pour externes
    const dateRetourPrevue = new Date();
    dateRetourPrevue.setDate(dateRetourPrevue.getDate() + dureeEmpruntExterne);

    const result = await this.prisma.$transaction(async (prisma) => {
      // Créer l'emprunt externe
      const emprunt = await prisma.emprunt.create({
        data: {
          userId: null, // Pas d'utilisateur local
          externUserId: dto.externUserId,
          dateRetourPrevue,
          universiteEmprunteur: dto.universiteEmprunteur,
          statut: StatutEmprunt.EN_COURS,
          exemplaireId: exemplaires[0].id
        }
      });

      // Créer les relations emprunt-exemplaire
      const empruntExemplaires = await Promise.all(
        dto.exemplaireIds.map(exemplaireId =>
          prisma.empruntExemplaire.create({
            data: {
              empruntId: emprunt.id,
              exemplaireId,
              dateRetourPrevue
            }
          })
        )
      );

      // Marquer les exemplaires comme non disponibles
      await prisma.exemplairePhysique.updateMany({
        where: { id: { in: dto.exemplaireIds } },
        data: { nombreDisponible: { decrement: 1 } }
      });

      return { emprunt, empruntExemplaires };
    });

    return this.getEmpruntById(result.emprunt.id);
  }



    /**
   * Créer un nouvel emprunt (interne ou externe)
   */
  async createEmprunt(dto: CreateEmpruntDto) {
    // Si c'est un emprunt externe, utiliser la méthode dédiée
    if (dto.universiteEmprunteur && dto.universiteEmprunteur !== 'uadb') {
      return this.createEmpruntExterne({
        exemplaireIds: dto.exemplaireIds,
        externUserId: dto.empreunteurId, // Considéré comme ID externe
        universiteEmprunteur: dto.universiteEmprunteur,
        dureeEmprunt: dto.dureeEmprunt,
        commentaire: dto.commentaire
      });
    }

    // Vérifier la disponibilité des exemplaires
    const exemplaires = await this.prisma.exemplairePhysique.findMany({
      where: {
        id: { in: dto.exemplaireIds },
        nombreDisponible: { gt: 0 },
      }
    });

    if (exemplaires.length !== dto.exemplaireIds.length) {
      throw new BadRequestException('Certains exemplaires ne sont pas disponibles');
    }

    // Calculer la durée d'emprunt
    let dureeEmprunt = dto.dureeEmprunt || 14; // 14 jours par défaut
    const dateRetourPrevue = new Date();
    dateRetourPrevue.setDate(dateRetourPrevue.getDate() + dureeEmprunt);

    // Créer l'emprunt avec transaction
    const result = await this.prisma.$transaction(async (prisma) => {
      // Créer l'emprunt principal
      const emprunt = await prisma.emprunt.create({
        data: {
          userId: dto.empreunteurId,
          dateRetourPrevue,
          universiteEmprunteur: 'uadb',
          statut: StatutEmprunt.EN_COURS,
          exemplaireId: exemplaires[0].id
        }
      });

      // Créer les relations emprunt-exemplaire
      const empruntExemplaires = await Promise.all(
        dto.exemplaireIds.map(exemplaireId =>
          prisma.empruntExemplaire.create({
            data: {
              empruntId: emprunt.id,
              exemplaireId,
              dateRetourPrevue
            }
          })
        )
      );

      // Marquer les exemplaires comme non disponibles
      await prisma.exemplairePhysique.updateMany({
        where: { id: { in: dto.exemplaireIds } },
        data: { nombreDisponible: { decrement: 1 } }
      });

      return { emprunt, empruntExemplaires };
    });

    return this.getEmpruntById(result.emprunt.id);
  }

  /**
   * Retourner des exemplaires d'un emprunt (interne ou externe)
   */
  async returnExemplaires(dto: ReturnEmpruntDto) {
    const emprunt = await this.prisma.emprunt.findUnique({
      where: { id: dto.empruntId },
      include: {
        empruntExemplaires: {
          include: { exemplaire: true }
        }
      }
    });

    if (!emprunt) {
      throw new NotFoundException('Emprunt non trouvé');
    }

    const exemplairesToReturn = emprunt.empruntExemplaires.filter(
      ee => dto.exemplaireIds.includes(ee.exemplaireId) && ee.statut === StatutEmprunt.EN_COURS
    );

    if (exemplairesToReturn.length === 0) {
      throw new BadRequestException('Aucun exemplaire valide à retourner');
    }

    const dateRetourEffective = new Date();

    // Calculer les pénalités pour emprunts en retard
    //const penalites = await this.calculatePenalities(emprunt, exemplairesToReturn, dateRetourEffective);

    await this.prisma.$transaction(async (prisma) => {
      // Mettre à jour les relations emprunt-exemplaire
      await prisma.empruntExemplaire.updateMany({
        where: {
          empruntId: dto.empruntId,
          exemplaireId: { in: dto.exemplaireIds }
        },
        data: {
          statut: StatutEmprunt.RETOURNE,
          dateRetourEffective,
          commentaire: dto.commentaire
        }
      });

      // Mettre à jour l'état des exemplaires
      if (dto.nouvelEtat) {
        await prisma.exemplairePhysique.updateMany({
          where: { id: { in: dto.exemplaireIds } },
          data: { 
            etat: dto.nouvelEtat,
            nombreDisponible: { increment: 1 }
          }
        });
      } else {
        await prisma.exemplairePhysique.updateMany({
          where: { id: { in: dto.exemplaireIds } },
          data: { nombreDisponible: { increment: 1 } }
        });
      }

      // Vérifier si tous les exemplaires de l'emprunt sont retournés
      const empruntsRestants = await prisma.empruntExemplaire.count({
        where: {
          empruntId: dto.empruntId,
          statut: StatutEmprunt.EN_COURS
        }
      });

      // Si tous les exemplaires sont retournés, marquer l'emprunt comme terminé
      if (empruntsRestants === 0) {
        await prisma.emprunt.update({
          where: { id: dto.empruntId },
          data: { 
            statut: StatutEmprunt.RETOURNE,
            dateRetourEffective
          }
        });
      }

      // Enregistrer les pénalités s'il y en a
      // if (penalites.montant > 0) {
      //   await this.createPenalite(prisma, emprunt, penalites);
      // }
    });

    const result = await this.getEmpruntById(dto.empruntId);
    return {
      ...result,
      //penalites: penalites.montant > 0 ? penalites : null
    };
  }
  /**
   * Prolonger un emprunt
   */
  async extendEmprunt(dto: ExtendEmpruntDto) {
    const emprunt = await this.prisma.emprunt.findUnique({
      where: { id: dto.empruntId },
      include: {
        empruntExemplaires: {
          where: { statut: StatutEmprunt.EN_COURS },
          include: { exemplaire: true }
        }
      }
    });

    if (!emprunt) {
      throw new NotFoundException('Emprunt non trouvé');
    }

    if (emprunt.statut !== StatutEmprunt.EN_COURS) {
      throw new BadRequestException('Cet emprunt ne peut pas être prolongé');
    }

    const nouvelleDateRetour = new Date(emprunt.dateRetourPrevue);
    nouvelleDateRetour.setDate(nouvelleDateRetour.getDate() + dto.nouvelleDuree);

    await this.prisma.$transaction(async (prisma) => {
      // Mettre à jour l'emprunt principal
      await prisma.emprunt.update({
        where: { id: dto.empruntId },
        data: {
          dateRetourPrevue: nouvelleDateRetour,
        }
      });

      // Mettre à jour toutes les relations emprunt-exemplaire en cours
      await prisma.empruntExemplaire.updateMany({
        where: {
          empruntId: dto.empruntId,
          statut: StatutEmprunt.EN_COURS
        },
        data: {
          dateRetourPrevue: nouvelleDateRetour
        }
      });
    });
    //incrementer renouvellement
    await this.prisma.emprunt.update({
      where: { id: dto.empruntId },
      data: {
        renouvellement: { increment: 1 }
      }
    });

    return this.getEmpruntById(dto.empruntId);
  }

  /**
   * Obtenir un emprunt par ID
   */
  async getEmpruntById(id: string) {
    console.log('ID de l\'emprunt:', id);
    const emprunt = await this.prisma.emprunt.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        empruntExemplaires: {
          include: {
            exemplaire: {
              include: {
                ressource: {
                  select: {
                    id: true,
                    titre: true,
                    auteur: true,
                    isbnglobale: true
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!emprunt) {
      throw new NotFoundException('Emprunt non trouvé');
    }

    return emprunt;
  }

 async getMesEmprunts(params: {
  userId?: string;
  statut?: StatutEmprunt;
  externUserId?: string;
  page?: number | string;
  limit?: number | string;
  search?: string;
}) {
  const {
    userId,
    statut,
    externUserId,
    page = 1,
    limit = 10,
    search
  } = params;

  // Vérification des paramètres requis
  if (!userId && !externUserId) {
    throw new BadRequestException('userId ou externUserId est requis');
  }

  // Conversion et validation des paramètres de pagination
  const pageNum = typeof page === 'string' ? parseInt(page, 10) : page;
  const limitNum = typeof limit === 'string' ? parseInt(limit, 10) : limit;
  
  const validPage = Math.max(1, pageNum || 1);
  const validLimit = Math.max(1, Math.min(100, limitNum || 10));
  
  const skip = (validPage - 1) * validLimit;
  const take = validLimit;

  // Construction de la clause WHERE
  const whereClause: any = {
    OR: []
  };

  // Ajout des conditions pour userId ou externUserId
  if (userId) {
    whereClause.OR.push({ userId });
  }
  if (externUserId) {
    whereClause.OR.push({ externUserId });
  }

  // Ajout du filtre statut si fourni
  if (statut) {
    whereClause.statut = statut;
  }

  // Ajout du filtre de recherche si fourni
  if (search && search.trim()) {
    whereClause.AND = [
      {
        OR: [
          {
            user: {
              OR: [
                { nom: { contains: search.trim(), mode: 'insensitive' } },
                { prenom: { contains: search.trim(), mode: 'insensitive' } },
                { email: { contains: search.trim(), mode: 'insensitive' } }
              ]
            }
          },
          {
            empruntExemplaires: {
              some: {
                exemplaire: {
                  ressource: {
                    OR: [
                      { titre: { contains: search.trim(), mode: 'insensitive' } },
                      { auteur: { contains: search.trim(), mode: 'insensitive' } },
                      { isbnglobale: { contains: search.trim(), mode: 'insensitive' } }
                    ]
                  }
                }
              }
            }
          }
        ]
      }
    ];
  }

  try {
    // Exécution des requêtes en parallèle pour optimiser les performances
    const [emprunts, total] = await Promise.all([
      this.prisma.emprunt.findMany({
        where: whereClause,
        skip,
        take,
        include: {
          user: {
            select: {
              id: true,
              nom: true,
              prenom: true,
              email: true
            }
          },
          empruntExemplaires: {
            include: {
              exemplaire: {
                include: {
                  ressource: {
                    select: {
                      id: true,
                      titre: true,
                      auteur: true,
                      isbnglobale: true,
                      image: true,
                      description: true,
                      nomAuteur: true

                    }
                  }
                }
              }
            }
          }
        },
        orderBy: {
          createdAt: 'desc' // Tri par date de création décroissante
        }
      }),
      this.prisma.emprunt.count({
        where: whereClause
      })
    ]);

    return {
      data: emprunts,
      meta: {
        total: Number(total),
        page: validPage,
        limit: validLimit,
        totalPages: Math.ceil(Number(total) / validLimit)
      }
    };

  } catch (error) {
    // Gestion des erreurs
    throw new InternalServerErrorException(
      'Erreur lors de la récupération des emprunts: ' + error.message
    );
  }
}
  /**
   * Lister les emprunts avec filtres
   */
 /**
 * Lister les emprunts avec filtres
 */
/**
 * Solution pour MySQL - Version simplifiée sans recherche complexe
 */
async getEmprunts(params: {
  userId?: string;
  statut?: StatutEmprunt;
  externUserId?: string;
  universiteEmprunteur?: string;
  page?: number | string;
  limit?: number | string;
  search?: string;
}) {
  const {
    userId,
    statut,
    universiteEmprunteur,
    page = 1,
    limit = 10,
    search,
    externUserId
  } = params;

  // Convertir en nombres entiers
  const pageNum = typeof page === 'string' ? parseInt(page, 10) : page;
  const limitNum = typeof limit === 'string' ? parseInt(limit, 10) : limit;

  // Validation des valeurs
  const validPage = Math.max(1, pageNum || 1);
  const validLimit = Math.max(1, Math.min(100, limitNum || 10));

  const skip = (validPage - 1) * validLimit;

  const where: any = {};

  if (userId) where.userId = userId;
  if (statut) where.statut = statut;
  if (universiteEmprunteur) where.universiteEmprunteur = universiteEmprunteur;
  if (externUserId) where.externUserId = externUserId;

  // VERSION 1: Recherche simple (testez d'abord celle-ci)
  if (search) {
    where.OR = [
      {
        user: {
          nom: { contains: search }
        }
      },
      {
        user: {
          prenom: { contains: search }
        }
      },
      {
        user: {
          email: { contains: search }
        }
      }
    ];
  }

  const [emprunts, total] = await Promise.all([
    this.prisma.emprunt.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        empruntExemplaires: {
          include: {
            exemplaire: {
              include: {
                ressource: true,
              }
            }
          }
        }
      },
      skip,
      take: validLimit,
      orderBy: { dateEmprunt: 'desc' }
    }),
    this.prisma.emprunt.count({ where })
  ]);

  return {
    data: emprunts,
    meta: {
      total,
      page: validPage,
      limit: validLimit,
      totalPages: Math.ceil(total / validLimit)
    }
  };
}

  /**
   * Obtenir les emprunts en retard
   */
  async getEmpruntsEnRetard() {
    const aujourd  = new Date();
    
    return this.prisma.emprunt.findMany({
      where: {
        statut: StatutEmprunt.EN_COURS,
        dateRetourPrevue: {
          lt: aujourd // Date actuelle
        }
      },
      include: {
        user: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        empruntExemplaires: {
          where: { statut: StatutEmprunt.EN_COURS },
          include: {
            exemplaire: {
              include: {
                ressource: {
                  select: {
                    id: true,
                    titre: true,
                    auteur: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: { dateRetourPrevue: 'asc' }
    });
  }

  /**
   * Obtenir les statistiques des emprunts
   */
  async getEmpruntStats(): Promise<EmpruntStats> {
    const [total, enCours, retournes, enRetard, externes] = await Promise.all([
      this.prisma.emprunt.count(),
      this.prisma.emprunt.count({ where: { statut: StatutEmprunt.EN_COURS } }),
      this.prisma.emprunt.count({ where: { statut: StatutEmprunt.RETOURNE } }),
      this.prisma.emprunt.count({
        where: {
          statut: StatutEmprunt.EN_COURS,
          dateRetourPrevue: { lt: new Date() }
        }
      }),
      this.prisma.emprunt.count({
        where: { universiteEmprunteur: { not: 'LOCALE' } }
      })
    ]);

    return {
      totalEmprunts: total,
      empruntsEnCours: enCours,
      empruntsEnRetard: enRetard,
      empruntsRetournes: retournes,
      empruntsExternes: externes
    };
  }

  /**
   * Marquer les emprunts en retard
   */
  async markEmpruntsEnRetard() {
    const aujourd  = new Date();
    
    const result = await this.prisma.$transaction(async (prisma) => {
      // Marquer les emprunts en retard
      const empruntsEnRetard = await prisma.emprunt.updateMany({
        where: {
          statut: StatutEmprunt.EN_COURS,
          dateRetourPrevue: { lt: aujourd }
        },
        data: { statut: StatutEmprunt.RETARD }
      });

      // Marquer les relations emprunt-exemplaire en retard
      await prisma.empruntExemplaire.updateMany({
        where: {
          statut: StatutEmprunt.EN_COURS,
          dateRetourPrevue: { lt: aujourd }
        },
        data: { statut: StatutEmprunt.RETARD }
      });

      return empruntsEnRetard;
    });

    return result;
  }

  /**
   * Vérifier les limites pour emprunts externes
   */
  private async checkEmpruntExterneLimits(exemplaireIds: string[], userId: string) {
    const exemplaires = await this.prisma.exemplairePhysique.findMany({
      where: { id: { in: exemplaireIds } }
    });

   

    // Vérifier si l'utilisateur n'a pas déjà trop d'emprunts externes en cours
    const empruntsExternesEnCours = await this.prisma.emprunt.count({
      where: {
        userId,
        statut: StatutEmprunt.EN_COURS,
        universiteEmprunteur: { not: 'LOCALE' }
      }
    });

    if (empruntsExternesEnCours >= 3) { // Limite configurable
      throw new ForbiddenException('Limite d\'emprunts externes atteinte');
    }
  }

  /**
   * Obtenir l'historique des emprunts d'un utilisateur
   */
 /**
 * Obtenir l'historique des emprunts d'un utilisateur
 */
async getUserEmpruntHistory(userId: string, page: number | string = 1, limit: number | string = 10) {
  // Convertir en nombres entiers
  const pageNum = typeof page === 'string' ? parseInt(page, 10) : page;
  const limitNum = typeof limit === 'string' ? parseInt(limit, 10) : limit;

  // Validation des valeurs
  const validPage = Math.max(1, pageNum || 1);
  const validLimit = Math.max(1, Math.min(100, limitNum || 10)); // Limite max de 100

  const skip = (validPage - 1) * validLimit;

  const [emprunts, total] = await Promise.all([
    this.prisma.emprunt.findMany({
      where: { userId },
      include: {
        empruntExemplaires: {
          include: {
            exemplaire: {
              include: {
                ressource:{
                  select: {
                    id: true,
                    titre: true,
                    auteur: true,
                    isbnglobale: true,
                    image: true,
                    description: true

                  }
                }
              }
            }
          }
        }
      },
      skip,
      take: validLimit, // Utiliser la valeur numérique validée
      orderBy: { dateEmprunt: 'desc' }
    }),
    this.prisma.emprunt.count({ where: { userId } })
  ]);

  return {
    data: emprunts,
    meta: {
      total,
      page: validPage,
      limit: validLimit,
      totalPages: Math.ceil(total / validLimit)
    }
  };
}
}