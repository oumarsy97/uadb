import { PrismaService } from 'src/prisma/prisma.service';
interface CreateNotationData {
    userId?: string;
    externUserId?: string;
    universiteUser?: string;
    ressourceId: string;
    note: number;
    universite: string;
}
interface UpdateNotationData {
    note?: number;
    userId?: string;
}
export declare class NotationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createNotation(data: CreateNotationData): Promise<{
        data: {
            user: {
                id: string;
                email: string;
                motDePasse: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
                createdAt: Date;
                updatedAt: Date;
                preferencesRecommandation: string | null;
                frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            } | null;
            ressource: {
                id: string;
                titre: string;
            };
        } & {
            userId: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ressourceId: string;
            externUserId: string | null;
            universiteUser: string | null;
            note: number;
        };
    }>;
    getNotationsByRessourceId(ressourceId: string, options?: {
        page?: number;
        limit?: number;
    }): Promise<{
        data: {
            notations: ({
                user: {
                    id: string;
                    email: string;
                    nom: string;
                    prenom: string;
                } | null;
                ressource: {
                    id: string;
                    titre: string;
                };
            } & {
                userId: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ressourceId: string;
                externUserId: string | null;
                universiteUser: string | null;
                note: number;
            })[];
            pagination: {
                page: number;
                limit: number;
                total: number;
                totalPages: number;
            };
        };
    }>;
    getUserNotations(userId: string, options: {
        page: number;
        limit: number;
    }): Promise<{
        data: {
            notations: ({
                ressource: {
                    id: string;
                    titre: string;
                    description: string;
                };
            } & {
                userId: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ressourceId: string;
                externUserId: string | null;
                universiteUser: string | null;
                note: number;
            })[];
            pagination: {
                page: number;
                limit: number;
                total: number;
                totalPages: number;
            };
            user: {
                id: string;
            };
        };
    }>;
    findOneNotation(id: string): Promise<{
        success: boolean;
        data: {
            user: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            ressource: {
                id: string;
                titre: string;
                description: string;
            };
        } & {
            userId: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ressourceId: string;
            externUserId: string | null;
            universiteUser: string | null;
            note: number;
        };
    }>;
    updateNotation(id: string, data: UpdateNotationData): Promise<{
        data: {
            user: {
                id: string;
                email: string;
                motDePasse: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
                createdAt: Date;
                updatedAt: Date;
                preferencesRecommandation: string | null;
                frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            } | null;
            ressource: {
                id: string;
                titre: string;
            };
        } & {
            userId: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ressourceId: string;
            externUserId: string | null;
            universiteUser: string | null;
            note: number;
        };
    }>;
    deleteNotation(id: string, userId?: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getNotationStats(ressourceId: string): Promise<{
        success: boolean;
        data: {
            moyenne: number;
            totalNotations: number;
            noteMin: number;
            noteMax: number;
            repartitionNotes: Record<string, number>;
            utilisateursInternes: number;
            utilisateursExternes: number;
            repartitionUniversites: {
                universite: string | null;
                nombreNotations: number;
                moyenneNote: number;
            }[];
        };
    }>;
    private findExistingNotation;
}
export {};
