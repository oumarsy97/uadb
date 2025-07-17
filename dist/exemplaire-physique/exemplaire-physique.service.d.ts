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
    }>;
    findAll(options?: SearchExemplairePhysiqueDto): Promise<{
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
    }>;
    findOne(id: string): Promise<{
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
    }>;
    update(id: string, updateExemplairePhysiqueDto: UpdateExemplairePhysiqueDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
        id: string;
        message: string;
    }>;
    findByRessource(ressourceId: string, options?: SearchExemplairePhysiqueDto): Promise<{
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
    }>;
    findByQRCode(qrCode: string): Promise<{
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
    }, never, import("generated/prisma/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findByLocalisation(localisation: string): Promise<({
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
    })[]>;
    findByEtat(etat: EtatExemplaire): Promise<({
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
    })[]>;
    findByRessourceAndEtat(ressourceId: string, etat: EtatExemplaire): Promise<({
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
    })[]>;
}
