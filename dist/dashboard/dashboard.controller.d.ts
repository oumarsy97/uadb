import { DashboardService, DashboardData } from './dashboard.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DashboardController {
    private readonly dashboardService;
    private readonly jwtService;
    private readonly prisma;
    constructor(dashboardService: DashboardService, jwtService: JwtService, prisma: PrismaService);
    private extractUserIdFromToken;
    getDashboard(data: {
        token: string;
    }): Promise<DashboardData | {
        error: boolean;
        message: string;
        statusCode: number;
    }>;
    getDashboardStats(data: {
        token: string;
    }): Promise<{
        userId: string;
        role: any;
        statistiques: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        role?: undefined;
        statistiques?: undefined;
    }>;
    getDashboardActivities(data: {
        token: string;
        limit?: number;
    }): Promise<{
        userId: string;
        role: any;
        activitesRecentes: any[];
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        role?: undefined;
        activitesRecentes?: undefined;
    }>;
    getDashboardNotifications(data: {
        token: string;
        limit?: number;
    }): Promise<{
        userId: string;
        notifications: any[];
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        notifications?: undefined;
    }>;
    getDashboardRecommendations(data: {
        token: string;
        limit?: number;
    }): Promise<{
        userId: string;
        role: any;
        recommandations: any[];
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        role?: undefined;
        recommandations?: undefined;
    }>;
    getDashboardProfile(data: {
        token: string;
    }): Promise<{
        user: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        user?: undefined;
    }>;
    getDashboardRessourcesRecentes(data: {
        token: string;
        limit?: number;
    }): Promise<{
        userId: string;
        ressourcesRecentes: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        ressourcesRecentes?: undefined;
    }>;
    getDashboardTachesUrgentes(data: {
        token: string;
    }): Promise<{
        userId: string;
        tachesUrgentes: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        tachesUrgentes?: undefined;
    }>;
    getDashboardAlertesSysteme(data: {
        token: string;
    }): Promise<{
        userId: string;
        alertesSysteme: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        alertesSysteme?: undefined;
    }>;
    getDashboardTendances(data: {
        token: string;
    }): Promise<{
        userId: string;
        tendances: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        tendances?: undefined;
    }>;
    getDashboardRapportsMensuels(data: {
        token: string;
    }): Promise<{
        userId: string;
        rapportsMensuels: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        rapportsMensuels?: undefined;
    }>;
    getDashboardReglesEmprunt(data: {
        token: string;
    }): Promise<{
        userId: string;
        reglesEmprunt: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        reglesEmprunt?: undefined;
    }>;
    getDashboardSummary(data: {
        token: string;
    }): Promise<any>;
    markNotificationsAsRead(data: {
        token: string;
        notificationIds?: string[];
    }): Promise<{
        success: boolean;
        message: string;
        userId: string;
        error?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        success?: undefined;
        userId?: undefined;
    }>;
    getEtudiantDashboardData(data: {
        token: string;
    }): Promise<{
        userId: string;
        statistiques: any;
        activitesRecentes: any[];
        recommandations: any[] | undefined;
        reglesEmprunt: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        statistiques?: undefined;
        activitesRecentes?: undefined;
        recommandations?: undefined;
        reglesEmprunt?: undefined;
    }>;
    getEnseignantDashboardData(data: {
        token: string;
    }): Promise<{
        userId: string;
        statistiques: any;
        activitesRecentes: any[];
        recommandations: any[] | undefined;
        ressourcesRecentes: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        statistiques?: undefined;
        activitesRecentes?: undefined;
        recommandations?: undefined;
        ressourcesRecentes?: undefined;
    }>;
    getBibliothecaireDashboardData(data: {
        token: string;
    }): Promise<{
        userId: string;
        statistiques: any;
        activitesRecentes: any[];
        tachesUrgentes: any;
        rapportsMensuels: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        statistiques?: undefined;
        activitesRecentes?: undefined;
        tachesUrgentes?: undefined;
        rapportsMensuels?: undefined;
    }>;
    getAdminDashboardData(data: {
        token: string;
    }): Promise<{
        userId: string;
        statistiques: any;
        activitesRecentes: any[];
        alertesSysteme: any;
        tendances: any;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        userId?: undefined;
        statistiques?: undefined;
        activitesRecentes?: undefined;
        alertesSysteme?: undefined;
        tendances?: undefined;
    }>;
    refreshDashboard(data: {
        token: string;
    }): Promise<DashboardData | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    validateToken(data: {
        token: string;
    }): Promise<{
        valid: boolean;
        userId: string;
        role: import("generated/prisma").$Enums.RoleUser;
        email: string;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: number;
        valid?: undefined;
        userId?: undefined;
        role?: undefined;
        email?: undefined;
    }>;
}
