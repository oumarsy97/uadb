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
    }>;
    findAll(options?: SearchExemplairePhysiqueDto): Promise<{
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
    }>;
    findOne(id: string): Promise<{
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
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string;
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
    }>;
    updateDisponibilite(id: string, quantite: number): Promise<{
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
    }>;
    isDisponible(id: string, quantiteDemandee?: number): Promise<boolean>;
    findDisponibles(): Promise<({
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
    })[]>;
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
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string;
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
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
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
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string;
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
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string;
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
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
    })[]>;
}
