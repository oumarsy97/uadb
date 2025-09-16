import { PrismaService } from "src/prisma/prisma.service";
export interface DashboardData {
    user: any;
    statistiques: any;
    activitesRecentes: any[];
    notifications: any[];
    recommandations?: any[];
    [key: string]: any;
}
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDashboard(userId: string): Promise<DashboardData>;
    private getStatsEtudiant;
    private getStatsEnseignant;
    private getStatsBibliothecaire;
    private getStatsAdmin;
    private getNotifications;
    private getRecommandations;
    private getActivitesEtudiant;
    private getCategoriesPreferes;
    private getActivitesMensuelleEnseignant;
    private getStatistiquesGenerales;
    private getRessourcesPlusEmpruntees;
    private getActiviteBibliotheque;
    private getStatistiquesParUniversite;
    private getAlertesSystemeAdmin;
    private getTendancesMensuellesAdmin;
    private getActivitesEnseignant;
    private getActivitesBibliothecaire;
    private getActivitesAdmin;
    private getRessourcesRecentes;
    private getTachesUrgentes;
    private getRapportsMensuels;
    private getAlertesSysteme;
    private getTendancesPlatforme;
    private getReglesEmprunt;
}
