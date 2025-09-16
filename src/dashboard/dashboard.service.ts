import { Injectable } from '@nestjs/common';
import { PrismaClient, RoleUser, StatutEmprunt, TypeAcces } from "generated/prisma";
import { endOfMonth, startOfMonth, subMonths, format } from "date-fns";
import { ca, fr } from "date-fns/locale";
import { PrismaService } from "src/prisma/prisma.service";

export interface DashboardData {
  user: any;
  statistiques: any;
  activitesRecentes: any[];
  notifications: any[];
  recommandations?: any[];
  [key: string]: any;
}

interface StatsEtudiant {
  empruntsActifs: number;
  empruntsTermines: number;
  reservationsEnAttente: number;
  favorisCount: number;
  collectionsCount: number;
  penalitesActives: number;
  ressourcesConsultees: number;
  dernierEmprunt?: any;
  prochainRetour?: any;
}

interface StatsEnseignant {
  ressourcesPubliees: number;
  ressourcesVues: number;
  ressourcesTelechargees: number;
  empruntsActifs: number;
  notificationsPendantes: number;
  categoriesPreferes: string[];
  activitesMensuelle: any[];
}

interface StatsBibliothecaire {
  empruntsAujourdhui: number;
  retoursPrevusAujourdhui: number;
  empruntsEnRetard: number;
  nouvellesesReservations: number;
  statistiquesGenerales: any;
  ressourcesPlusEmpruntees: any[];
  activiteBibliotheque: any[];
}

interface StatsAdmin {
  utilisateursActifs: number;
  ressourcesTotales: number;
  empruntsEnCours: number;
  statistiquesUniversite: any;
  conventionsActives: number;
  alertesSysteme: any[];
  tendancesMensuelles: any[];
}

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Point d'entrée principal pour récupérer le dashboard selon le profil
   */
  async getDashboard(userId: string): Promise<DashboardData> {
    try {
      console.log(`Récupération du dashboard pour l'utilisateur ID: ${userId}`);
      
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: {
          etudiant: true,
          enseignant: true,
          bibliothecaire: true,
          administrateur: true,
        },
      });

      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }

      console.log('Utilisateur trouvé:', user);

      const baseData = {
        user: {
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          role: user.role,
          image: user.image,
          derniereConnexion: user.derniereConnexion,
        },
        notifications: await this.getNotifications(userId),
      };

      switch (user.role) {
        case RoleUser.ETUDIANT:
          return {
            ...baseData,
            statistiques: await this.getStatsEtudiant(userId),
            activitesRecentes: await this.getActivitesEtudiant(userId),
            recommandations: await this.getRecommandations(userId),
            reglesEmprunt: await this.getReglesEmprunt(user.etudiant?.filiereId),
          };

        case RoleUser.ENSEIGNANT:
          return {
            ...baseData,
            statistiques: await this.getStatsEnseignant(userId),
            activitesRecentes: await this.getActivitesEnseignant(userId),
            recommandations: await this.getRecommandations(userId),
            ressourcesRecentes: await this.getRessourcesRecentes(userId),
          };

        case RoleUser.BIBLIOTHECAIRE:
          return {
            ...baseData,
            statistiques: await this.getStatsBibliothecaire(userId),
            activitesRecentes: await this.getActivitesBibliothecaire(),
            tachesUrgentes: await this.getTachesUrgentes(),
            rapportsMensuels: await this.getRapportsMensuels(),
          };

        case RoleUser.ADMIN:
          return {
            ...baseData,
            statistiques: await this.getStatsAdmin(),
            activitesRecentes: await this.getActivitesAdmin(),
            alertesSysteme: await this.getAlertesSysteme(),
            tendances: await this.getTendancesPlatforme(),
          };

        default:
          throw new Error('Rôle utilisateur non supporté');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du dashboard:', error);
      throw new Error(`Erreur lors de la récupération du dashboard: ${error.message}`);
    }
  }

  /**
   * Statistiques pour les étudiants
   */
  private async getStatsEtudiant(userId: string): Promise<StatsEtudiant> {
    const now = new Date();
    const startMonth = startOfMonth(now);

    // Emprunts actifs
    const empruntsActifs = await this.prisma.emprunt.count({
      where: {
        userId,
        statut: StatutEmprunt.EN_COURS,
      },
    });

    // Emprunts terminés
    const empruntsTermines = await this.prisma.emprunt.count({
      where: {
        userId,
        statut: StatutEmprunt.RETOURNE,
      },
    });

    // Favoris
    const favorisCount = await this.prisma.favori.count({
      where: { userId },
    });

    // Collections
    const collectionsCount = await this.prisma.collection.count({
      where: { userId },
    });

    // Ressources consultées ce mois
    const ressourcesConsultees = await this.prisma.historiqueAcces.count({
      where: {
        userId,
        createdAt: { gte: startMonth },
        typeAcces: TypeAcces.CONSULTATION,
      },
    });

    // Dernier emprunt
    const dernierEmprunt = await this.prisma.emprunt.findFirst({
      where: { userId },
      orderBy: { dateEmprunt: 'desc' },
      include: {
        empruntExemplaires: {
          include: {
            exemplaire: {
              include: {
                ressource: true,
              },
            },
          },
        },
      },
    });

    // Prochain retour
    const prochainRetour = await this.prisma.emprunt.findFirst({
      where: {
        userId,
        statut: StatutEmprunt.EN_COURS,
      },
      orderBy: { dateRetourPrevue: 'asc' },
      include: {
        empruntExemplaires: {
          include: {
            exemplaire: {
              include: {
                ressource: true,
              },
            },
          },
        },
      },
    });

    return {
      empruntsActifs,
      empruntsTermines,
      reservationsEnAttente: 0, // À implémenter si vous ajoutez le modèle Reservation
      favorisCount,
      collectionsCount,
      penalitesActives: 0, // À implémenter selon votre logique de pénalités
      ressourcesConsultees,
      dernierEmprunt,
      prochainRetour,
    };
  }

  /**
   * Statistiques pour les enseignants
   */
  private async getStatsEnseignant(userId: string): Promise<StatsEnseignant> {
    const startMonth = startOfMonth(new Date());

    // Ressources publiées
    const ressourcesPubliees = await this.prisma.ressource.count({
      where: { auteurId: userId },
    });

    // Total des vues sur les ressources de l'enseignant
    const ressourcesVues = await this.prisma.ressource.aggregate({
      where: { auteurId: userId },
      _sum: { vues: true },
    });

    // Total des téléchargements
    const ressourcesTelechargees = await this.prisma.ressource.aggregate({
      where: { auteurId: userId },
      _sum: { telechargements: true },
    });

    // Emprunts actifs de l'enseignant
    const empruntsActifs = await this.prisma.emprunt.count({
      where: {
        userId,
        statut: StatutEmprunt.EN_COURS,
      },
    });

    // Notifications non lues
    const notificationsPendantes = await this.prisma.notification.count({
      where: {
        userId,
        estLue: false,
      },
    });

    // Catégories préférées basées sur l'historique
    const categoriesPreferes = await this.getCategoriesPreferes(userId);

    // Activité mensuelle
    const activitesMensuelle = await this.getActivitesMensuelleEnseignant(userId);

    return {
      ressourcesPubliees,
      ressourcesVues: ressourcesVues._sum.vues || 0,
      ressourcesTelechargees: ressourcesTelechargees._sum.telechargements || 0,
      empruntsActifs,
      notificationsPendantes,
      categoriesPreferes,
      activitesMensuelle,
    };
  }

  /**
   * Statistiques pour les bibliothécaires
   */
  private async getStatsBibliothecaire(userId: string): Promise<StatsBibliothecaire> {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    // Emprunts aujourd'hui
    const empruntsAujourdhui = await this.prisma.emprunt.count({
      where: {
        dateEmprunt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    // Retours prévus aujourd'hui
    const retoursPrevusAujourdhui = await this.prisma.emprunt.count({
      where: {
        dateRetourPrevue: {
          gte: startOfDay,
          lte: endOfDay,
        },
        statut: StatutEmprunt.EN_COURS,
      },
    });

    // Emprunts en retard
    const empruntsEnRetard = await this.prisma.emprunt.count({
      where: {
        statut: StatutEmprunt.RETARD,
      },
    });

    // Statistiques générales
    const statistiquesGenerales = await this.getStatistiquesGenerales();

    // Ressources les plus empruntées
    const ressourcesPlusEmpruntees = await this.getRessourcesPlusEmpruntees();

    // Activité de la bibliothèque (graphique)
    const activiteBibliotheque = await this.getActiviteBibliotheque();

    return {
      empruntsAujourdhui,
      retoursPrevusAujourdhui,
      empruntsEnRetard,
      nouvellesesReservations: 0, // À implémenter
      statistiquesGenerales,
      ressourcesPlusEmpruntees,
      activiteBibliotheque,
    };
  }

  /**
   * Statistiques pour les administrateurs
   */
  private async getStatsAdmin(): Promise<StatsAdmin> {
    // Utilisateurs actifs (connectés dans les 30 derniers jours)
    const dateLimit = subMonths(new Date(), 1);
    const utilisateursActifs = await this.prisma.user.count({
      where: {
        derniereConnexion: { gte: dateLimit },
        estActif: true,
      },
    });

    // Total des ressources
    const ressourcesTotales = await this.prisma.ressource.count();

    // Emprunts en cours
    const empruntsEnCours = await this.prisma.emprunt.count({
      where: { statut: StatutEmprunt.EN_COURS },
    });

    // Conventions actives
    const conventionsActives = await this.prisma.conventionInteruniversitaire.count({
      where: { estActive: true },
    });

    // Statistiques par université
    const statistiquesUniversite = await this.getStatistiquesParUniversite();

    // Alertes système
    const alertesSysteme = await this.getAlertesSystemeAdmin();

    // Tendances mensuelles
    const tendancesMensuelles = await this.getTendancesMensuellesAdmin();

    return {
      utilisateursActifs,
      ressourcesTotales,
      empruntsEnCours,
      statistiquesUniversite,
      conventionsActives,
      alertesSysteme,
      tendancesMensuelles,
    };
  }

  /**
   * Récupère les notifications de l'utilisateur
   */
  private async getNotifications(userId: string) {
    return await this.prisma.notification.findMany({
      where: { userId },
      orderBy: { dateCreation: 'desc' },
      take: 10,
    });
  }

  /**
   * Récupère les recommandations pour un utilisateur
   */
  private async getRecommandations(userId: string) {
    return await this.prisma.recommandation.findMany({
      where: {
        userId,
        estVue: false,
      },
      include: {
        ressource: {
          include: {
            categorie: true,
          },
        },
      },
      orderBy: { score: 'desc' },
      take: 5,
    });
  }

  /**
   * Activités récentes pour étudiant
   */
  private async getActivitesEtudiant(userId: string) {
    const historique = await this.prisma.historiqueAcces.findMany({
      where: { userId },
      include: {
        ressource: {
          select: {
            titre: true,
            format: true,
            image: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    const emprunts = await this.prisma.emprunt.findMany({
      where: { userId },
      include: {
        empruntExemplaires: {
          include: {
            exemplaire: {
              include: {
                ressource: {
                  select: {
                    titre: true,
                    format: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { dateEmprunt: 'desc' },
      take: 5,
    });

    return [...historique.map(h => ({
      type: 'consultation',
      date: h.createdAt,
      ressource: h.ressource,
      action: h.typeAcces,
    })), ...emprunts.map(e => ({
      type: 'emprunt',
      date: e.dateEmprunt,
      ressource: e.empruntExemplaires[0]?.exemplaire.ressource,
      statut: e.statut,
    }))].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);
  }

  /**
   * Méthodes utilitaires
   */
  private async getCategoriesPreferes(userId: string): Promise<string[]> {
    const historique = await this.prisma.historiqueAcces.findMany({
      where: { userId },
      include: {
        ressource: {
          include: {
            categorie: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    const categoriesCount = historique.reduce((acc, h) => {
      if (h.ressource?.categorie?.libelle) {
        acc[h.ressource.categorie.libelle] = (acc[h.ressource.categorie.libelle] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoriesCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([cat]) => cat);
  }

  private async getActivitesMensuelleEnseignant(userId: string) {
    const derniersMois = Array.from({ length: 6 }, (_, i) => {
      const date = subMonths(new Date(), i);
      return {
        mois: format(date, 'MMM yyyy'),
        start: startOfMonth(date),
        end: endOfMonth(date),
      };
    }).reverse();

    const activites = await Promise.all(
      derniersMois.map(async ({ mois, start, end }) => {
        const vues = await this.prisma.historiqueAcces.count({
          where: {
            createdAt: { gte: start, lte: end },
            ressource: { auteurId: userId },
            typeAcces: TypeAcces.CONSULTATION,
          },
        });

        const telechargements = await this.prisma.historiqueAcces.count({
          where: {
            createdAt: { gte: start, lte: end },
            ressource: { auteurId: userId },
            typeAcces: TypeAcces.TELECHARGEMENT,
          },
        });

        return { mois, vues, telechargements };
      })
    );

    return activites;
  }

  private async getStatistiquesGenerales() {
    const totalRessources = await this.prisma.ressource.count();
    const totalUtilisateurs = await this.prisma.user.count();
    const empruntsActifs = await this.prisma.emprunt.count({
      where: { statut: StatutEmprunt.EN_COURS },
    });

    return {
      totalRessources,
      totalUtilisateurs,
      empruntsActifs,
    };
  }

  private async getRessourcesPlusEmpruntees() {
    // Simple implementation - vous pouvez l'améliorer selon vos besoins
    return await this.prisma.ressource.findMany({
      include: {
        categorie: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
  }

  private async getActiviteBibliotheque() {
    // Activité des 30 derniers jours
    const derniersMois = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date;
    }).reverse();

    return await Promise.all(
      derniersMois.map(async (date) => {
        const startDay = new Date(date);
        startDay.setHours(0, 0, 0, 0);
        const endDay = new Date(date);
        endDay.setHours(23, 59, 59, 999);

        const emprunts = await this.prisma.emprunt.count({
          where: {
            dateEmprunt: { gte: startDay, lte: endDay },
          },
        });

        const retours = await this.prisma.emprunt.count({
          where: {
            dateRetourEffective: { gte: startDay, lte: endDay },
            statut: StatutEmprunt.RETOURNE,
          },
        });

        return {
          date: format(date, 'dd/MM'),
          emprunts,
          retours,
        };
      })
    );
  }

  private async getStatistiquesParUniversite() {
    return await this.prisma.universite.findMany({
      include: {
        _count: {
          select: {
            ufrs: true,
            statistiquesBibliotheque: true,
          },
        },
        statistiquesBibliotheque: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });
  }

  private async getAlertesSystemeAdmin() {
    const alertes: { type: string; titre: string; message: string; priorite: string }[] = [];

    // Emprunts en retard
    const empruntsRetard = await this.prisma.emprunt.count({
      where: { statut: StatutEmprunt.RETARD },
    });
    
    if (empruntsRetard > 0) {
      alertes.push({
        type: 'warning',
        titre: 'Emprunts en retard',
        message: `${empruntsRetard} emprunt(s) en retard`,
        priorite: 'haute',
      });
    }

    return alertes;
  }

  private async getTendancesMensuellesAdmin() {
    const derniersMois = Array.from({ length: 12 }, (_, i) => {
      const date = subMonths(new Date(), i);
      return {
        mois: format(date, 'MMM yyyy'),
        start: startOfMonth(date),
        end: endOfMonth(date),
      };
    }).reverse();

    return await Promise.all(
      derniersMois.map(async ({ mois, start, end }) => {
        const nouveauxUtilisateurs = await this.prisma.user.count({
          where: {
            createdAt: { gte: start, lte: end },
          },
        });

        const nouvellesRessources = await this.prisma.ressource.count({
          where: {
            createdAt: { gte: start, lte: end },
          },
        });

        const emprunts = await this.prisma.emprunt.count({
          where: {
            dateEmprunt: { gte: start, lte: end },
          },
        });

        return {
          mois,
          nouveauxUtilisateurs,
          nouvellesRessources,
          emprunts,
        };
      })
    );
  }

  // Méthodes pour les autres activités (implémentations basiques)
  private async getActivitesEnseignant(userId: string) {
    // Ressources récemment publiées par l'enseignant
    const ressources = await this.prisma.ressource.findMany({
      where: { auteurId: userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: {
        categorie: true,
      },
    });

    return ressources.map(r => ({
      type: 'publication',
      date: r.createdAt,
      ressource: {
        titre: r.titre,
        format: r.format,
        image: r.image,
      },
      action: 'publication',
    }));
  }

  private async getActivitesBibliothecaire() {
    // Activités récentes de gestion de la bibliothèque
    const empruntsRecents = await this.prisma.emprunt.findMany({
      orderBy: { dateEmprunt: 'desc' },
      take: 10,
      include: {
        user: {
          select: {
            nom: true,
            prenom: true,
          },
        },
        empruntExemplaires: {
          include: {
            exemplaire: {
              include: {
                ressource: {
                  select: {
                    titre: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return empruntsRecents.map(e => ({
      type: 'emprunt',
      date: e.dateEmprunt,
      user: e.user,
      ressource: e.empruntExemplaires[0]?.exemplaire.ressource,
      statut: e.statut,
    }));
  }

  private async getActivitesAdmin() {
    // Activités d'administration système
    const nouvellesRessources = await this.prisma.ressource.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        auteur: {
          select: {
            nom: true,
            prenom: true,
          },
        },
        categorie: true,
      },
    });

    const nouveauxUtilisateurs = await this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        nom: true,
        prenom: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return [
      ...nouvellesRessources.map(r => ({
        type: 'nouvelle_ressource',
        date: r.createdAt,
        ressource: r,
        auteur: r.auteur,
      })),
      ...nouveauxUtilisateurs.map(u => ({
        type: 'nouvel_utilisateur',
        date: u.createdAt,
        user: u,
      })),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);
  }

  private async getRessourcesRecentes(userId: string) {
    return await this.prisma.ressource.findMany({
      where: { auteurId: userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        categorie: true,
        _count: {
          select: {
            historiques: true,
            favoris: true,
          },
        },
      },
    });
  }

  private async getTachesUrgentes() {
    // Tâches urgentes pour bibliothécaire
    const taches: {
      type: string;
      titre: string;
      description: string;
      priorite: string;
      nombre: number;
    }[] = [];
    
    // Emprunts en retard
    const empruntsRetard = await this.prisma.emprunt.count({
      where: { statut: StatutEmprunt.RETARD },
    });
    
    if (empruntsRetard > 0) {
      taches.push({
        type: 'emprunts_retard',
        titre: 'Emprunts en retard',
        description: `${empruntsRetard} emprunt(s) à traiter`,
        priorite: 'haute',
        nombre: empruntsRetard,
      });
    }

    // Retours prévus aujourd'hui
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));
    
    const retoursPrevus = await this.prisma.emprunt.count({
      where: {
        dateRetourPrevue: { gte: startOfDay, lte: endOfDay },
        statut: StatutEmprunt.EN_COURS,
      },
    });

    if (retoursPrevus > 0) {
      // taches.push({
      //   type: 'retours_prevus',
      //   titre: 'Retours prévus aujourd\'hui',
      //   description: `${retoursPrevus} retour(s) attendu(s)`,
      //   priorite: 'moyenne',
      //   nombre: retoursPrevus,
      // });
    }

    return taches;
  }

  private async getRapportsMensuels() {
    // Rapports mensuels pour bibliothécaire
    const moisActuel = startOfMonth(new Date());
    
    const empruntsMonth = await this.prisma.emprunt.count({
      where: {
        dateEmprunt: { gte: moisActuel },
      },
    });

    const retoursMonth = await this.prisma.emprunt.count({
      where: {
        dateRetourEffective: { gte: moisActuel },
        statut: StatutEmprunt.RETOURNE,
      },
    });

    return {
      mois: format(new Date(), 'MMMM yyyy'),
      emprunts: empruntsMonth,
      retours: retoursMonth,
      taux: empruntsMonth > 0 ? Math.round((retoursMonth / empruntsMonth) * 100) : 0,
    };
  }

  private async getAlertesSysteme() {
    // Alertes système pour admin - version simplifiée
    return await this.getAlertesSystemeAdmin();
  }

  private async getTendancesPlatforme() {
    // Tendances générales de la plateforme
    return await this.getTendancesMensuellesAdmin();
  }

  private async getReglesEmprunt(filiereId?: string) {
    if (!filiereId) return null;
    
    return await this.prisma.reglePret.findFirst({
      where: {
        roleUtilisateur: RoleUser.ETUDIANT,
      },
    });
  }
}