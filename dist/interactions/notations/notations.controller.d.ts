import { JwtService } from '@nestjs/jwt';
import { NotationsService } from './notations.service';
interface CreateNotationPayload {
    token: string;
    ressourceId: string;
    note: number;
    universite: string;
    universiteUser?: string;
    externUserId?: string;
}
interface GetNotationsByRessourcePayload {
    ressourceId: string;
    page?: number;
    limit?: number;
}
interface GetUserNotationsPayload {
    token: string;
    page?: number;
    limit?: number;
}
interface FindOneNotationPayload {
    id: string;
}
interface UpdateNotationPayload {
    token: string;
    id: string;
    note?: number;
}
interface DeleteNotationPayload {
    token: string;
    id: string;
}
interface GetStatsPayload {
    ressourceId: string;
}
export declare class NotationsController {
    private readonly notationService;
    private readonly jwtService;
    private readonly logger;
    constructor(notationService: NotationsService, jwtService: JwtService);
    private extractUserIdFromToken;
    createNotation(data: CreateNotationPayload): Promise<{
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
    getNotationsByRessourceId(data: GetNotationsByRessourcePayload): Promise<{
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
    getUserNotations(data: GetUserNotationsPayload): Promise<{
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
    findOneNotation(data: FindOneNotationPayload): Promise<{
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
    updateNotation(data: UpdateNotationPayload): Promise<{
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
    deleteNotation(data: DeleteNotationPayload): Promise<{
        success: boolean;
        message: string;
    }>;
    getNotationStats(data: GetStatsPayload): Promise<{
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
    createExternalNotation(data: {
        externUserId: string;
        universiteUser: string;
        ressourceId: string;
        note: number;
        universite: string;
    }): Promise<{
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
    getNotationsByRessourcePaginated(data: {
        ressourceId: string;
        page: number;
        limit: number;
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
    private validateNotationData;
}
export {};
