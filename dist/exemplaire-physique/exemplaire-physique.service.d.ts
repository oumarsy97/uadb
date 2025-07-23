import { PrismaService } from '../prisma/prisma.service';
import { CreateExemplairePhysiqueDto } from './dto/create-exemplaire-physique.dto';
import { SearchExemplairePhysiqueDto, UpdateExemplairePhysiqueDto } from './dto/update-exemplaire-physique.dto';
import { Prisma, EtatExemplaire } from 'generated/prisma';
import { RessourcesService } from 'src/ressources/ressources.service';
export declare class ExemplairePhysiqueService {
    private readonly prisma;
    private readonly ressourcesService;
    private readonly logger;
    constructor(prisma: PrismaService, ressourcesService: RessourcesService);
    create(createExemplairePhysiqueDto: CreateExemplairePhysiqueDto, userId: string): Promise<{
        ressource: {
            id: string;
            titre: string;
            isbnglobale: string;
            nomAuteur: string | null;
            auteur: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                image: string | null;
                email: string;
                motDePasse: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
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
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }>;
    findAll(options?: SearchExemplairePhysiqueDto): Promise<{
        data: ({
            ressource: {
                id: string;
                titre: string;
                isbnglobale: string;
                image: string | null;
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
            _count: {
                empruntExemplaires: number;
            };
        } & {
            id: string;
            ressourceId: string;
            createdAt: Date;
            updatedAt: Date;
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
    }>;
    findOne(id: string): Promise<{
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
            createdAt: Date;
            updatedAt: Date;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            format: string;
            image: string | null;
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
        _count: {
            empruntExemplaires: number;
        };
        empruntExemplaires: ({
            emprunt: {
                user: {
                    id: string;
                    nom: string;
                    prenom: string;
                } | null;
            } & {
                id: string;
                userId: string | null;
                createdAt: Date;
                updatedAt: Date;
                dateEmprunt: Date;
                exemplaireId: string;
                dateRetourPrevue: Date;
                dateRetourEffective: Date | null;
                statut: import("generated/prisma").$Enums.StatutEmprunt;
                universiteEmprunteur: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            commentaire: string | null;
            dateEmprunt: Date;
            empruntId: string;
            exemplaireId: string;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
        })[];
    } & {
        id: string;
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }>;
    update(id: string, updateExemplairePhysiqueDto: UpdateExemplairePhysiqueDto): Promise<{
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
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        message: string;
    }>;
    findByRessource(ressourceId: string, options?: SearchExemplairePhysiqueDto): Promise<{
        data: ({
            ressource: {
                id: string;
                titre: string;
                isbnglobale: string;
                image: string | null;
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
            _count: {
                empruntExemplaires: number;
            };
        } & {
            id: string;
            ressourceId: string;
            createdAt: Date;
            updatedAt: Date;
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
    }>;
    findByQRCode(qrCode: string): Promise<{
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
            createdAt: Date;
            updatedAt: Date;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            format: string;
            image: string | null;
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
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }>;
    updateDisponibilite(id: string, quantite: number): Promise<{
        ressource: {
            id: string;
            titre: string;
            nomAuteur: string | null;
        };
    } & {
        id: string;
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }>;
    isDisponible(id: string, quantiteDemandee?: number): Promise<boolean>;
    getStatistiques(ressourceId?: string): Promise<{
        totalExemplaires: number;
        totalStock: number;
        totalDisponible: number;
        totalEmprunte: number;
        exemplairesDispo: number;
        exemplairesEpuises: number;
        parEtat: Record<import("generated/prisma").$Enums.EtatExemplaire, number>;
    }>;
    ajusterStock(id: string, nouveauNombre: number): Promise<{
        ressource: {
            id: string;
            titre: string;
            nomAuteur: string | null;
        };
    } & {
        id: string;
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }>;
    private generateQRCode;
    toggleDisponibilite(id: string): Prisma.Prisma__ExemplairePhysiqueClient<{
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
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs>;
    findByLocalisation(localisation: string): Promise<({
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
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    })[]>;
    findByEtat(etat: EtatExemplaire): Promise<({
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
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    })[]>;
    findByRessourceAndEtat(ressourceId: string, etat: EtatExemplaire): Promise<({
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
        ressourceId: string;
        createdAt: Date;
        updatedAt: Date;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    })[]>;
}
