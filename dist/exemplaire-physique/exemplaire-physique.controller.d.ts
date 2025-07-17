import { ExemplairePhysiqueService } from './exemplaire-physique.service';
import { CreateExemplairePhysiqueDto } from './dto/create-exemplaire-physique.dto';
import { SearchExemplairePhysiqueDto, UpdateExemplairePhysiqueDto } from './dto/update-exemplaire-physique.dto';
import { JwtHelperService } from 'src/JwtHelper.service';
import { EtatExemplaire } from 'generated/prisma';
export declare class ExemplairePhysiqueController {
    private readonly exemplairePhysiqueService;
    private readonly jwtHelperService;
    constructor(exemplairePhysiqueService: ExemplairePhysiqueService, jwtHelperService: JwtHelperService);
    create(data: {
        createExemplairePhysiqueDto: CreateExemplairePhysiqueDto;
        token: string;
    }): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
            id: string;
            titre: string;
            nomAuteur: string | null;
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
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findAll(data: {
        options?: SearchExemplairePhysiqueDto;
        token?: string;
    }): Promise<{
        data: ({
            ressource: {
                categorie: {
                    id: string;
                    libelle: string;
                } | null;
                image: string | null;
                id: string;
                titre: string;
                nomAuteur: string | null;
                isbnglobale: string;
                auteur: {
                    nom: string;
                    prenom: string;
                    role: import("generated/prisma").$Enums.RoleUser;
                    id: string;
                } | null;
            };
            _count: {
                empruntExemplaires: number;
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
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findOne(data: {
        id: string;
        token?: string;
    }): Promise<({
        ressource: {
            categorie: {
                description: string | null;
                id: string;
                libelle: string;
            } | null;
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
            } | null;
        } & {
            image: string | null;
            description: string;
            format: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            titre: string;
            langue: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            motsCles: string;
            nomAuteur: string | null;
            auteurId: string | null;
            categorieId: string;
            estArchive: boolean;
            isbnglobale: string;
            telechargements: number;
            vues: number;
            noteMoyenne: number;
        };
        _count: {
            empruntExemplaires: number;
        };
        empruntExemplaires: ({
            emprunt: {
                user: {
                    nom: string;
                    prenom: string;
                    id: string;
                } | null;
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
        ressourceId: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    update(data: {
        id: string;
        updateData: UpdateExemplairePhysiqueDto;
        token: string;
    }): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
            id: string;
            titre: string;
            nomAuteur: string | null;
            isbnglobale: string;
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
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
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    remove(data: {
        id: string;
        token: string;
    }): Promise<{
        id: string;
        message: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findByRessource(data: {
        ressourceId: string;
        options?: SearchExemplairePhysiqueDto;
        token?: string;
    }): Promise<{
        data: ({
            ressource: {
                categorie: {
                    id: string;
                    libelle: string;
                } | null;
                image: string | null;
                id: string;
                titre: string;
                nomAuteur: string | null;
                isbnglobale: string;
                auteur: {
                    nom: string;
                    prenom: string;
                    role: import("generated/prisma").$Enums.RoleUser;
                    id: string;
                } | null;
            };
            _count: {
                empruntExemplaires: number;
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
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findByQRCode(data: {
        qrCode: string;
        token?: string;
    }): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
            } | null;
        } & {
            image: string | null;
            description: string;
            format: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            titre: string;
            langue: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            motsCles: string;
            nomAuteur: string | null;
            auteurId: string | null;
            categorieId: string;
            estArchive: boolean;
            isbnglobale: string;
            telechargements: number;
            vues: number;
            noteMoyenne: number;
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
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    updateDisponibilite(data: {
        id: string;
        quantite: number;
        token: string;
    }): Promise<({
        ressource: {
            id: string;
            titre: string;
            nomAuteur: string | null;
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
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    isDisponible(data: {
        id: string;
        quantiteDemandee?: number;
        token?: string;
    }): Promise<{
        disponible: boolean;
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
        disponible?: undefined;
    }>;
    getStatistiques(data: {
        ressourceId?: string;
        token?: string;
    }): Promise<{
        totalExemplaires: number;
        totalStock: number;
        totalDisponible: number;
        totalEmprunte: number;
        exemplairesDispo: number;
        exemplairesEpuises: number;
        parEtat: Record<import("generated/prisma").$Enums.EtatExemplaire, number>;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    ajusterStock(data: {
        id: string;
        nouveauNombre: number;
        token: string;
    }): Promise<({
        ressource: {
            id: string;
            titre: string;
            nomAuteur: string | null;
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
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    toggleDisponibilite(data: {
        id: string;
        token: string;
    }): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
            id: string;
            titre: string;
            nomAuteur: string | null;
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
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
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findByLocalisation(data: {
        localisation: string;
        token?: string;
    }): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
            id: string;
            titre: string;
            nomAuteur: string | null;
            isbnglobale: string;
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
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
    })[] | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findByEtat(data: {
        etat: EtatExemplaire;
        token?: string;
    }): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
            id: string;
            titre: string;
            nomAuteur: string | null;
            isbnglobale: string;
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
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
    })[] | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findByRessourceAndEtat(data: {
        ressourceId: string;
        etat: EtatExemplaire;
        token?: string;
    }): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
            id: string;
            titre: string;
            nomAuteur: string | null;
            isbnglobale: string;
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
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
    })[] | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
}
