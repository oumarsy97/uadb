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
            id: string;
            titre: string;
            isbnglobale: string;
            nomAuteur: string | null;
            auteur: {
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
            categorie: {
                id: string;
                libelle: string;
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
    findDisponibles(data: {
        options?: SearchExemplairePhysiqueDto;
        token?: string;
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
    })[] | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findAll(data: {
        options?: SearchExemplairePhysiqueDto;
        token?: string;
    }): Promise<{
        data: ({
            _count: {
                empruntExemplaires: number;
            };
            ressource: {
                id: string;
                image: string | null;
                titre: string;
                isbnglobale: string;
                nomAuteur: string | null;
                auteur: {
                    id: string;
                    nom: string;
                    prenom: string;
                    role: import("generated/prisma").$Enums.RoleUser;
                } | null;
                categorie: {
                    id: string;
                    libelle: string;
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
        _count: {
            empruntExemplaires: number;
        };
        ressource: {
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            categorie: {
                id: string;
                description: string | null;
                libelle: string;
            } | null;
        } & {
            id: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        empruntExemplaires: ({
            emprunt: {
                user: {
                    id: string;
                    nom: string;
                    prenom: string;
                } | null;
            } & {
                userId: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                renouvellement: number;
                universiteEmprunteur: string;
                externUserId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dateEmprunt: Date;
            empruntId: string;
            exemplaireId: string;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            commentaire: string | null;
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
            id: string;
            titre: string;
            isbnglobale: string;
            nomAuteur: string | null;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            categorie: {
                id: string;
                libelle: string;
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
            _count: {
                empruntExemplaires: number;
            };
            ressource: {
                id: string;
                image: string | null;
                titre: string;
                isbnglobale: string;
                nomAuteur: string | null;
                auteur: {
                    id: string;
                    nom: string;
                    prenom: string;
                    role: import("generated/prisma").$Enums.RoleUser;
                } | null;
                categorie: {
                    id: string;
                    libelle: string;
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
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            categorie: {
                id: string;
                libelle: string;
            } | null;
        } & {
            id: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
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
            id: string;
            titre: string;
            nomAuteur: string | null;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            categorie: {
                id: string;
                libelle: string;
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
            id: string;
            titre: string;
            isbnglobale: string;
            nomAuteur: string | null;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            categorie: {
                id: string;
                libelle: string;
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
            id: string;
            titre: string;
            isbnglobale: string;
            nomAuteur: string | null;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            categorie: {
                id: string;
                libelle: string;
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
            id: string;
            titre: string;
            isbnglobale: string;
            nomAuteur: string | null;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            categorie: {
                id: string;
                libelle: string;
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
