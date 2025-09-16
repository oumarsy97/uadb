import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpruntDto, ReturnEmpruntDto, ExtendEmpruntDto, EmpruntStats, CreateEmpruntExterneDto } from './dto/create-emprunte.dto';
import { StatutEmprunt } from 'generated/prisma';
export declare class EmprunteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createEmpruntExterne(dto: CreateEmpruntExterneDto): Promise<{
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
    }>;
    createEmprunt(dto: CreateEmpruntDto): Promise<{
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
    }>;
    returnExemplaires(dto: ReturnEmpruntDto): Promise<{
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
    }>;
    extendEmprunt(dto: ExtendEmpruntDto): Promise<{
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
    }>;
    getEmpruntById(id: string): Promise<{
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
    }>;
    getMesEmprunts(params: {
        userId?: string;
        statut?: StatutEmprunt;
        externUserId?: string;
        page?: number | string;
        limit?: number | string;
        search?: string;
    }): Promise<{
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
    }>;
    getEmprunts(params: {
        userId?: string;
        statut?: StatutEmprunt;
        externUserId?: string;
        universiteEmprunteur?: string;
        page?: number | string;
        limit?: number | string;
        search?: string;
    }): Promise<{
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
    }>;
    getEmpruntsEnRetard(): Promise<({
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
    })[]>;
    getEmpruntStats(): Promise<EmpruntStats>;
    markEmpruntsEnRetard(): Promise<import("generated/prisma").Prisma.BatchPayload>;
    private checkEmpruntExterneLimits;
    getUserEmpruntHistory(userId: string, page?: number | string, limit?: number | string): Promise<{
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
    }>;
}
