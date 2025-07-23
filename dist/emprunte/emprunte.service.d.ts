import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpruntDto, ReturnEmpruntDto, ExtendEmpruntDto, EmpruntStats } from './dto/create-emprunte.dto';
import { StatutEmprunt } from 'generated/prisma';
export declare class EmprunteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            commentaire: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            exemplaireId: string;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            empruntId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exemplaireId: string;
        userId: string | null;
        dateEmprunt: Date;
        dateRetourPrevue: Date;
        dateRetourEffective: Date | null;
        statut: import("generated/prisma").$Enums.StatutEmprunt;
        universiteEmprunteur: string;
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
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            commentaire: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            exemplaireId: string;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            empruntId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exemplaireId: string;
        userId: string | null;
        dateEmprunt: Date;
        dateRetourPrevue: Date;
        dateRetourEffective: Date | null;
        statut: import("generated/prisma").$Enums.StatutEmprunt;
        universiteEmprunteur: string;
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
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            commentaire: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            exemplaireId: string;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            empruntId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exemplaireId: string;
        userId: string | null;
        dateEmprunt: Date;
        dateRetourPrevue: Date;
        dateRetourEffective: Date | null;
        statut: import("generated/prisma").$Enums.StatutEmprunt;
        universiteEmprunteur: string;
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
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            commentaire: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            exemplaireId: string;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            empruntId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exemplaireId: string;
        userId: string | null;
        dateEmprunt: Date;
        dateRetourPrevue: Date;
        dateRetourEffective: Date | null;
        statut: import("generated/prisma").$Enums.StatutEmprunt;
        universiteEmprunteur: string;
    }>;
    getEmprunts(params: {
        userId?: string;
        statut?: StatutEmprunt;
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
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                empruntId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
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
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            commentaire: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            exemplaireId: string;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            empruntId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exemplaireId: string;
        userId: string | null;
        dateEmprunt: Date;
        dateRetourPrevue: Date;
        dateRetourEffective: Date | null;
        statut: import("generated/prisma").$Enums.StatutEmprunt;
        universiteEmprunteur: string;
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
                    ressourceId: string;
                    etat: import("generated/prisma").$Enums.EtatExemplaire;
                    localisation: string;
                    dateAcquisition: Date | null;
                    qrCode: string | null;
                    nombre: number;
                    nombreDisponible: number;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                commentaire: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                exemplaireId: string;
                dateEmprunt: Date;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                empruntId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            exemplaireId: string;
            userId: string | null;
            dateEmprunt: Date;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            universiteEmprunteur: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
}
