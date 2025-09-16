import { RmqContext } from '@nestjs/microservices';
import { CreateEmpruntDto, CreateEmpruntExterneDto, ReturnEmpruntDto, ExtendEmpruntDto } from './dto/create-emprunte.dto';
import { EmprunteService } from './emprunte.service';
import { StatutEmprunt } from 'generated/prisma';
import { JwtService } from '@nestjs/jwt';
export declare class EmprunteController {
    private readonly empruntService;
    private readonly jwtService;
    private readonly logger;
    constructor(empruntService: EmprunteService, jwtService: JwtService);
    private extractUserIdFromToken;
    getCurrentUserHistory(data: {
        token: string;
        page?: number;
        limit?: number;
    }): Promise<{
        success: boolean;
        data: ({
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        image: string | null;
                        titre: string;
                        isbnglobale: string;
                        description: string;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        userId: string;
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        meta?: undefined;
        userId?: undefined;
    }>;
    getCurrentUserActiveEmprunts(data: {
        token: string;
        page?: number;
        limit?: number;
    }): Promise<{
        success: boolean;
        data: ({
            user: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        image: string | null;
                        titre: string;
                        isbnglobale: string;
                        description: string;
                        langue: string;
                        urlFichier: string | null;
                        urlFichierLocal: string | null;
                        format: string;
                        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
                        datePublication: Date | null;
                        motsCles: string;
                        auteurId: string | null;
                        nomAuteur: string | null;
                        telechargements: number;
                        vues: number;
                        estArchive: boolean;
                        noteMoyenne: number;
                        categorieId: string;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        userId: string;
        error?: undefined;
        code?: undefined;
    } | {
        success: boolean;
        error: any;
        code: any;
        data?: undefined;
        meta?: undefined;
        userId?: undefined;
    }>;
    createEmprunt(data: CreateEmpruntDto): Promise<{
        success: boolean;
        data: {
            user: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
    createEmpruntExterne(data: CreateEmpruntExterneDto, context: RmqContext): Promise<{
        success: boolean;
        data: {
            user: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        includeExternal?: boolean;
    }): Promise<{
        success: boolean;
        data: ({
            user: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        image: string | null;
                        titre: string;
                        isbnglobale: string;
                        description: string;
                        langue: string;
                        urlFichier: string | null;
                        urlFichierLocal: string | null;
                        format: string;
                        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
                        datePublication: Date | null;
                        motsCles: string;
                        auteurId: string | null;
                        nomAuteur: string | null;
                        telechargements: number;
                        vues: number;
                        estArchive: boolean;
                        noteMoyenne: number;
                        categorieId: string;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        isbnglobale: string;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
    getEmpruntsEnRetard(data: {
        includeExternal?: boolean;
    }, context: RmqContext): Promise<{
        success: boolean;
        data: ({
            user: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        titre: string;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        externUserId?: string;
    }): Promise<{
        success: boolean;
        data: ({
            user: {
                id: string;
                email: string;
                nom: string;
                prenom: string;
            } | null;
            empruntExemplaires: ({
                exemplaire: {
                    ressource: {
                        id: string;
                        image: string | null;
                        titre: string;
                        isbnglobale: string;
                        description: string;
                        nomAuteur: string | null;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
                        image: string | null;
                        titre: string;
                        isbnglobale: string;
                        description: string;
                        auteur: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            motDePasse: string;
                            nom: string;
                            telephone: string | null;
                            prenom: string;
                            image: string | null;
                            role: import("generated/prisma").$Enums.RoleUser;
                            derniereConnexion: Date | null;
                            estActif: boolean;
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
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                createdAt: Date;
                updatedAt: Date;
                empruntId: string;
            })[];
        } & {
            id: string;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            renouvellement: number;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
            externUserId: string | null;
            createdAt: Date;
            updatedAt: Date;
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
            nombreDisponible: number;
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
    handleExternalUserBlocked(data: {
        externUserId: string;
        universiteEmprunteur: string;
        reason: string;
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
    handleDailyCheckRetards(data: {}): Promise<void>;
}
