import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpruntDto, ReturnEmpruntDto, ExtendEmpruntDto, EmpruntStats } from './dto/create-emprunte.dto';
import { StatutEmprunt } from 'generated/prisma';
export declare class EmprunteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createEmprunt(dto: CreateEmpruntDto): Promise<{
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
    }>;
    returnExemplaires(dto: ReturnEmpruntDto): Promise<{
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
    }>;
    extendEmprunt(dto: ExtendEmpruntDto): Promise<{
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
    }>;
    getEmpruntById(id: string): Promise<{
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
    }>;
    getEmpruntsEnRetard(): Promise<({
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
    }>;
}
