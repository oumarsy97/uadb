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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma/index.js");
const date_fns_1 = require("date-fns");
const prisma_service_1 = require("../prisma/prisma.service");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboard(userId) {
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
                case prisma_1.RoleUser.ETUDIANT:
                    return {
                        ...baseData,
                        statistiques: await this.getStatsEtudiant(userId),
                        activitesRecentes: await this.getActivitesEtudiant(userId),
                        recommandations: await this.getRecommandations(userId),
                        reglesEmprunt: await this.getReglesEmprunt(user.etudiant?.filiereId),
                    };
                case prisma_1.RoleUser.ENSEIGNANT:
                    return {
                        ...baseData,
                        statistiques: await this.getStatsEnseignant(userId),
                        activitesRecentes: await this.getActivitesEnseignant(userId),
                        recommandations: await this.getRecommandations(userId),
                        ressourcesRecentes: await this.getRessourcesRecentes(userId),
                    };
                case prisma_1.RoleUser.BIBLIOTHECAIRE:
                    return {
                        ...baseData,
                        statistiques: await this.getStatsBibliothecaire(userId),
                        activitesRecentes: await this.getActivitesBibliothecaire(),
                        tachesUrgentes: await this.getTachesUrgentes(),
                        rapportsMensuels: await this.getRapportsMensuels(),
                    };
                case prisma_1.RoleUser.ADMIN:
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
        }
        catch (error) {
            console.error('Erreur lors de la récupération du dashboard:', error);
            throw new Error(`Erreur lors de la récupération du dashboard: ${error.message}`);
        }
    }
    async getStatsEtudiant(userId) {
        const now = new Date();
        const startMonth = (0, date_fns_1.startOfMonth)(now);
        const empruntsActifs = await this.prisma.emprunt.count({
            where: {
                userId,
                statut: prisma_1.StatutEmprunt.EN_COURS,
            },
        });
        const empruntsTermines = await this.prisma.emprunt.count({
            where: {
                userId,
                statut: prisma_1.StatutEmprunt.RETOURNE,
            },
        });
        const favorisCount = await this.prisma.favori.count({
            where: { userId },
        });
        const collectionsCount = await this.prisma.collection.count({
            where: { userId },
        });
        const ressourcesConsultees = await this.prisma.historiqueAcces.count({
            where: {
                userId,
                createdAt: { gte: startMonth },
                typeAcces: prisma_1.TypeAcces.CONSULTATION,
            },
        });
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
        const prochainRetour = await this.prisma.emprunt.findFirst({
            where: {
                userId,
                statut: prisma_1.StatutEmprunt.EN_COURS,
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
            reservationsEnAttente: 0,
            favorisCount,
            collectionsCount,
            penalitesActives: 0,
            ressourcesConsultees,
            dernierEmprunt,
            prochainRetour,
        };
    }
    async getStatsEnseignant(userId) {
        const startMonth = (0, date_fns_1.startOfMonth)(new Date());
        const ressourcesPubliees = await this.prisma.ressource.count({
            where: { auteurId: userId },
        });
        const ressourcesVues = await this.prisma.ressource.aggregate({
            where: { auteurId: userId },
            _sum: { vues: true },
        });
        const ressourcesTelechargees = await this.prisma.ressource.aggregate({
            where: { auteurId: userId },
            _sum: { telechargements: true },
        });
        const empruntsActifs = await this.prisma.emprunt.count({
            where: {
                userId,
                statut: prisma_1.StatutEmprunt.EN_COURS,
            },
        });
        const notificationsPendantes = await this.prisma.notification.count({
            where: {
                userId,
                estLue: false,
            },
        });
        const categoriesPreferes = await this.getCategoriesPreferes(userId);
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
    async getStatsBibliothecaire(userId) {
        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setHours(23, 59, 59, 999));
        const empruntsAujourdhui = await this.prisma.emprunt.count({
            where: {
                dateEmprunt: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        });
        const retoursPrevusAujourdhui = await this.prisma.emprunt.count({
            where: {
                dateRetourPrevue: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
                statut: prisma_1.StatutEmprunt.EN_COURS,
            },
        });
        const empruntsEnRetard = await this.prisma.emprunt.count({
            where: {
                statut: prisma_1.StatutEmprunt.RETARD,
            },
        });
        const statistiquesGenerales = await this.getStatistiquesGenerales();
        const ressourcesPlusEmpruntees = await this.getRessourcesPlusEmpruntees();
        const activiteBibliotheque = await this.getActiviteBibliotheque();
        return {
            empruntsAujourdhui,
            retoursPrevusAujourdhui,
            empruntsEnRetard,
            nouvellesesReservations: 0,
            statistiquesGenerales,
            ressourcesPlusEmpruntees,
            activiteBibliotheque,
        };
    }
    async getStatsAdmin() {
        const dateLimit = (0, date_fns_1.subMonths)(new Date(), 1);
        const utilisateursActifs = await this.prisma.user.count({
            where: {
                derniereConnexion: { gte: dateLimit },
                estActif: true,
            },
        });
        const ressourcesTotales = await this.prisma.ressource.count();
        const empruntsEnCours = await this.prisma.emprunt.count({
            where: { statut: prisma_1.StatutEmprunt.EN_COURS },
        });
        const conventionsActives = await this.prisma.conventionInteruniversitaire.count({
            where: { estActive: true },
        });
        const statistiquesUniversite = await this.getStatistiquesParUniversite();
        const alertesSysteme = await this.getAlertesSystemeAdmin();
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
    async getNotifications(userId) {
        return await this.prisma.notification.findMany({
            where: { userId },
            orderBy: { dateCreation: 'desc' },
            take: 10,
        });
    }
    async getRecommandations(userId) {
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
    async getActivitesEtudiant(userId) {
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
    async getCategoriesPreferes(userId) {
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
        }, {});
        return Object.entries(categoriesCount)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([cat]) => cat);
    }
    async getActivitesMensuelleEnseignant(userId) {
        const derniersMois = Array.from({ length: 6 }, (_, i) => {
            const date = (0, date_fns_1.subMonths)(new Date(), i);
            return {
                mois: (0, date_fns_1.format)(date, 'MMM yyyy'),
                start: (0, date_fns_1.startOfMonth)(date),
                end: (0, date_fns_1.endOfMonth)(date),
            };
        }).reverse();
        const activites = await Promise.all(derniersMois.map(async ({ mois, start, end }) => {
            const vues = await this.prisma.historiqueAcces.count({
                where: {
                    createdAt: { gte: start, lte: end },
                    ressource: { auteurId: userId },
                    typeAcces: prisma_1.TypeAcces.CONSULTATION,
                },
            });
            const telechargements = await this.prisma.historiqueAcces.count({
                where: {
                    createdAt: { gte: start, lte: end },
                    ressource: { auteurId: userId },
                    typeAcces: prisma_1.TypeAcces.TELECHARGEMENT,
                },
            });
            return { mois, vues, telechargements };
        }));
        return activites;
    }
    async getStatistiquesGenerales() {
        const totalRessources = await this.prisma.ressource.count();
        const totalUtilisateurs = await this.prisma.user.count();
        const empruntsActifs = await this.prisma.emprunt.count({
            where: { statut: prisma_1.StatutEmprunt.EN_COURS },
        });
        return {
            totalRessources,
            totalUtilisateurs,
            empruntsActifs,
        };
    }
    async getRessourcesPlusEmpruntees() {
        return await this.prisma.ressource.findMany({
            include: {
                categorie: true,
            },
            orderBy: { createdAt: 'desc' },
            take: 10,
        });
    }
    async getActiviteBibliotheque() {
        const derniersMois = Array.from({ length: 30 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            return date;
        }).reverse();
        return await Promise.all(derniersMois.map(async (date) => {
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
                    statut: prisma_1.StatutEmprunt.RETOURNE,
                },
            });
            return {
                date: (0, date_fns_1.format)(date, 'dd/MM'),
                emprunts,
                retours,
            };
        }));
    }
    async getStatistiquesParUniversite() {
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
    async getAlertesSystemeAdmin() {
        const alertes = [];
        const empruntsRetard = await this.prisma.emprunt.count({
            where: { statut: prisma_1.StatutEmprunt.RETARD },
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
    async getTendancesMensuellesAdmin() {
        const derniersMois = Array.from({ length: 12 }, (_, i) => {
            const date = (0, date_fns_1.subMonths)(new Date(), i);
            return {
                mois: (0, date_fns_1.format)(date, 'MMM yyyy'),
                start: (0, date_fns_1.startOfMonth)(date),
                end: (0, date_fns_1.endOfMonth)(date),
            };
        }).reverse();
        return await Promise.all(derniersMois.map(async ({ mois, start, end }) => {
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
        }));
    }
    async getActivitesEnseignant(userId) {
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
    async getActivitesBibliothecaire() {
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
    async getActivitesAdmin() {
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
    async getRessourcesRecentes(userId) {
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
    async getTachesUrgentes() {
        const taches = [];
        const empruntsRetard = await this.prisma.emprunt.count({
            where: { statut: prisma_1.StatutEmprunt.RETARD },
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
        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setHours(23, 59, 59, 999));
        const retoursPrevus = await this.prisma.emprunt.count({
            where: {
                dateRetourPrevue: { gte: startOfDay, lte: endOfDay },
                statut: prisma_1.StatutEmprunt.EN_COURS,
            },
        });
        if (retoursPrevus > 0) {
        }
        return taches;
    }
    async getRapportsMensuels() {
        const moisActuel = (0, date_fns_1.startOfMonth)(new Date());
        const empruntsMonth = await this.prisma.emprunt.count({
            where: {
                dateEmprunt: { gte: moisActuel },
            },
        });
        const retoursMonth = await this.prisma.emprunt.count({
            where: {
                dateRetourEffective: { gte: moisActuel },
                statut: prisma_1.StatutEmprunt.RETOURNE,
            },
        });
        return {
            mois: (0, date_fns_1.format)(new Date(), 'MMMM yyyy'),
            emprunts: empruntsMonth,
            retours: retoursMonth,
            taux: empruntsMonth > 0 ? Math.round((retoursMonth / empruntsMonth) * 100) : 0,
        };
    }
    async getAlertesSysteme() {
        return await this.getAlertesSystemeAdmin();
    }
    async getTendancesPlatforme() {
        return await this.getTendancesMensuellesAdmin();
    }
    async getReglesEmprunt(filiereId) {
        if (!filiereId)
            return null;
        return await this.prisma.reglePret.findFirst({
            where: {
                roleUtilisateur: prisma_1.RoleUser.ETUDIANT,
            },
        });
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map