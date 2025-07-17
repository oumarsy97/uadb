import { RmqContext } from '@nestjs/microservices';
import { CreateEmpruntDto, ReturnEmpruntDto, ExtendEmpruntDto } from './dto/create-emprunte.dto';
import { EmprunteService } from './emprunte.service';
import { StatutEmprunt } from 'generated/prisma';
export declare class EmprunteController {
    private readonly empruntService;
    private readonly logger;
    constructor(empruntService: EmprunteService);
    createEmprunt(data: CreateEmpruntDto): Promise<{
        success: boolean;
        data: {
            user: {
                email: string;
                nom: string;
                prenom: string;
                id: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            email: string;
                            motDePasse: string;
                            nom: string;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            id: string;
                            telephone: string | null;
                            derniereConnexion: Date | null;
                            estActif: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            preferencesRecommandation: string | null;
                            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
                        } | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourEffective: Date | null;
                empruntId: string;
                dateRetourPrevue: Date;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            dateEmprunt: Date;
            exemplaireId: string;
            dateRetourEffective: Date | null;
            dateRetourPrevue: Date;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        };
        message: string;
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        message?: undefined;
    }>;
    getEmprunt(data: {
        id: string;
    }): Promise<{
        success: boolean;
        data: {
            user: {
                email: string;
                nom: string;
                prenom: string;
                id: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            email: string;
                            motDePasse: string;
                            nom: string;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            id: string;
                            telephone: string | null;
                            derniereConnexion: Date | null;
                            estActif: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            preferencesRecommandation: string | null;
                            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
                        } | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourEffective: Date | null;
                empruntId: string;
                dateRetourPrevue: Date;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            dateEmprunt: Date;
            exemplaireId: string;
            dateRetourEffective: Date | null;
            dateRetourPrevue: Date;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        };
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
    }>;
    getEmprunts(data: {
        userId?: string;
        statut?: StatutEmprunt;
        universiteEmprunteur?: string;
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
        success: boolean;
        data: ({
            user: {
                email: string;
                nom: string;
                prenom: string;
                id: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            email: string;
                            motDePasse: string;
                            nom: string;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            id: string;
                            telephone: string | null;
                            derniereConnexion: Date | null;
                            estActif: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            preferencesRecommandation: string | null;
                            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
                        } | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourEffective: Date | null;
                empruntId: string;
                dateRetourPrevue: Date;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            dateEmprunt: Date;
            exemplaireId: string;
            dateRetourEffective: Date | null;
            dateRetourPrevue: Date;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        meta?: undefined;
    }>;
    returnExemplaires(data: ReturnEmpruntDto): Promise<{
        success: boolean;
        data: {
            user: {
                email: string;
                nom: string;
                prenom: string;
                id: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            email: string;
                            motDePasse: string;
                            nom: string;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            id: string;
                            telephone: string | null;
                            derniereConnexion: Date | null;
                            estActif: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            preferencesRecommandation: string | null;
                            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
                        } | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourEffective: Date | null;
                empruntId: string;
                dateRetourPrevue: Date;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            dateEmprunt: Date;
            exemplaireId: string;
            dateRetourEffective: Date | null;
            dateRetourPrevue: Date;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        };
        message: string;
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        message?: undefined;
    }>;
    extendEmprunt(data: ExtendEmpruntDto, context: RmqContext): Promise<{
        success: boolean;
        data: {
            user: {
                email: string;
                nom: string;
                prenom: string;
                id: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            email: string;
                            motDePasse: string;
                            nom: string;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            id: string;
                            telephone: string | null;
                            derniereConnexion: Date | null;
                            estActif: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            preferencesRecommandation: string | null;
                            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
                        } | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourEffective: Date | null;
                empruntId: string;
                dateRetourPrevue: Date;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            dateEmprunt: Date;
            exemplaireId: string;
            dateRetourEffective: Date | null;
            dateRetourPrevue: Date;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        };
        message: string;
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        message?: undefined;
    }>;
    getEmpruntsEnRetard(data: {}, context: RmqContext): Promise<{
        success: boolean;
        data: ({
            user: {
                email: string;
                nom: string;
                prenom: string;
                id: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        auteur: {
                            email: string;
                            motDePasse: string;
                            nom: string;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            id: string;
                            telephone: string | null;
                            derniereConnexion: Date | null;
                            estActif: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            preferencesRecommandation: string | null;
                            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
                        } | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourEffective: Date | null;
                empruntId: string;
                dateRetourPrevue: Date;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            dateEmprunt: Date;
            exemplaireId: string;
            dateRetourEffective: Date | null;
            dateRetourPrevue: Date;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        })[];
        count: number;
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        count?: undefined;
    }>;
    getUserEmprunts(data: {
        userId: string;
        statut?: StatutEmprunt;
        page?: number;
        limit?: number;
    }, context: RmqContext): Promise<{
        success: boolean;
        data: ({
            user: {
                email: string;
                nom: string;
                prenom: string;
                id: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            email: string;
                            motDePasse: string;
                            nom: string;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            id: string;
                            telephone: string | null;
                            derniereConnexion: Date | null;
                            estActif: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            preferencesRecommandation: string | null;
                            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
                        } | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourEffective: Date | null;
                empruntId: string;
                dateRetourPrevue: Date;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            dateEmprunt: Date;
            exemplaireId: string;
            dateRetourEffective: Date | null;
            dateRetourPrevue: Date;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        meta?: undefined;
    }>;
    getUserHistory(data: {
        userId: string;
        page?: number;
        limit?: number;
    }, context: RmqContext): Promise<{
        success: boolean;
        data: ({
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            email: string;
                            motDePasse: string;
                            nom: string;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            id: string;
                            telephone: string | null;
                            derniereConnexion: Date | null;
                            estActif: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            preferencesRecommandation: string | null;
                            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
                        } | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourEffective: Date | null;
                empruntId: string;
                dateRetourPrevue: Date;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            dateEmprunt: Date;
            exemplaireId: string;
            dateRetourEffective: Date | null;
            dateRetourPrevue: Date;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        meta?: undefined;
    }>;
    getEmpruntStats(data: {}, context: RmqContext): Promise<{
        success: boolean;
        data: import("./dto/create-emprunte.dto").EmpruntStats;
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
    }>;
    markEmpruntsEnRetard(data: {}, context: RmqContext): Promise<{
        success: boolean;
        data: {
            count: number;
        };
        message: string;
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        message?: undefined;
    }>;
    checkExemplaireAvailability(data: {
        exemplaireIds: string[];
    }, context: RmqContext): Promise<{
        success: boolean;
        data: {
            id: string;
            etat: import("generated/prisma").$Enums.EtatExemplaire;
            peutEtreEmprunte: boolean;
        }[];
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
    }>;
    handleUserSuspended(data: {
        userId: string;
        reason: string;
        suspendedUntil: Date;
    }): Promise<void>;
    handleExemplaireDamaged(data: {
        exemplaireId: string;
        severity: 'LEGER' | 'GRAVE';
        description: string;
    }): Promise<void>;
    handleExemplaireLost(data: {
        exemplaireId: string;
        lastKnownLocation: string;
        reportedBy: string;
    }): Promise<void>;
    handleDailycheckRetards(data: {}): Promise<void>;
}
