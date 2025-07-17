import { Injectable, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpruntDto, ReturnEmpruntDto, ExtendEmpruntDto, EmpruntStats } from './dto/create-emprunte.dto';
import { EtatExemplaire , StatutEmprunt } from 'generated/prisma';


@Injectable()
export class EmprunteService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Créer un nouvel emprunt
   */
  async createEmprunt(dto: CreateEmpruntDto) {
    // Vérifier si l'utilisateur existe
    // const user = await this.prisma.user.findUnique({
    //   where: { id: dto.userId }
    // });

    // if (!user) {
    //   throw new NotFoundException('Utilisateur non trouvé');
    // }

    // Vérifier la disponibilité des exemplaires
    const exemplaires = await this.prisma.exemplairePhysique.findMany({
      where: {
        id: { in: dto.exemplaireIds },
        nombreDisponible: { gt: 0 }, // Doit être disponible
      }
    });
    console.log(`Exemplaires trouvés: ${exemplaires.length}, demandés: ${dto.exemplaireIds.length}`);

    if (exemplaires.length !== dto.exemplaireIds.length) {
      throw new BadRequestException('Certains exemplaires ne sont pas disponibles');
    }

    // Déterminer si c'est un emprunt externe
    const isEmpruntExterne = dto.universiteEmprunteur && dto.universiteEmprunteur !== 'uadb';


    // Calculer la durée d'emprunt
    let dureeEmprunt = dto.dureeEmprunt || 14; // 14 jours par défaut
    console.log(dto.empreunteurId);

    const dateRetourPrevue = new Date();
    dateRetourPrevue.setDate(dateRetourPrevue.getDate() + dureeEmprunt);

    // Créer l'emprunt avec transaction
    const result = await this.prisma.$transaction(async (prisma) => {
      // Créer l'emprunt principal
      const emprunt = await prisma.emprunt.create({
        data: {
          userId: dto.empreunteurId,
          dateRetourPrevue,
          universiteEmprunteur: dto.universiteEmprunteur || 'LOCALE',
          statut: StatutEmprunt.EN_COURS,
          exemplaireId: exemplaires[0].id // Champ requis pour compatibilité
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
   * Retourner des exemplaires d'un emprunt
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

      // Mettre à jour l'état des exemplaires si spécifié
      if (dto.nouvelEtat) {
        await prisma.exemplairePhysique.updateMany({
          where: { id: { in: dto.exemplaireIds } },
          data: { 
            etat: dto.nouvelEtat,
            nombreDisponible: { increment: 1 } // Incrémenter le nombre disponible
          }
        });
      } else {
        // Simplement marquer comme disponible
        await prisma.exemplairePhysique.updateMany({
          where: { id: { in: dto.exemplaireIds } },
          data: {  }
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
    });

    return this.getEmpruntById(dto.empruntId);
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

    

    const nouvelleDateRetour = new Date();
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

    return this.getEmpruntById(dto.empruntId);
  }

  /**
   * Obtenir un emprunt par ID
   */
  async getEmpruntById(id: string) {
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

  /**
   * Lister les emprunts avec filtres
   */
 /**
 * Lister les emprunts avec filtres
 */
async getEmprunts(params: {
  userId?: string;
  statut?: StatutEmprunt;
  universiteEmprunteur?: string;
  page?: number | string;  // Accepter string aussi
  limit?: number | string; // Accepter string aussi
  search?: string;
}) {
  const {
    userId,
    statut,
    universiteEmprunteur,
    page = 1,
    limit = 10,
    search
  } = params;

  // Convertir en nombres entiers
  const pageNum = typeof page === 'string' ? parseInt(page, 10) : page;
  const limitNum = typeof limit === 'string' ? parseInt(limit, 10) : limit;

  // Validation des valeurs
  const validPage = Math.max(1, pageNum || 1);
  const validLimit = Math.max(1, Math.min(100, limitNum || 10)); // Limite max de 100

  const skip = (validPage - 1) * validLimit;

  const where: any = {};

  if (userId) where.userId = userId;
  if (statut) where.statut = statut;
  if (universiteEmprunteur) where.universiteEmprunteur = universiteEmprunteur;

  if (search) {
    where.OR = [
      {
        user: {
          OR: [
            { nom: { contains: search, mode: 'insensitive' } },
            { prenom: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } }
          ]
        }
      },
      {
        empruntExemplaires: {
          some: {
            exemplaire: {
              ressource: {
                OR: [
                  { titre: { contains: search, mode: 'insensitive' } },
                  { auteur: { contains: search, mode: 'insensitive' } },
                  { isbn: { contains: search, mode: 'insensitive' } }
                ]
              }
            }
          }
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
      },
      skip,
      take: validLimit, // Utiliser la valeur numérique validée
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