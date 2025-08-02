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
            isbnglobale: string;
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
        ressourceId: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(options?: SearchExemplairePhysiqueDto): Promise<{
        data: ({
            ressource: {
                categorie: {
                    id: string;
                    libelle: string;
                } | null;
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
            };
            _count: {
                empruntExemplaires: number;
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
                id: string;
                description: string | null;
                libelle: string;
            } | null;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
        } & {
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
        empruntExemplaires: ({
            emprunt: {
                user: {
                    id: string;
                    nom: string;
                    prenom: string;
                } | null;
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
        _count: {
            empruntExemplaires: number;
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
    }>;
    update(id: string, updateExemplairePhysiqueDto: UpdateExemplairePhysiqueDto): Promise<{
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
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
            };
            _count: {
                empruntExemplaires: number;
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
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
        } & {
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
        ressourceId: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
        createdAt: Date;
        updatedAt: Date;
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
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
        createdAt: Date;
        updatedAt: Date;
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
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        nombre: number;
        nombreDisponible: number;
        createdAt: Date;
        updatedAt: Date;
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
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
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
    }, never, import("generated/prisma/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findByLocalisation(localisation: string): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
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
    })[]>;
    findByEtat(etat: EtatExemplaire): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
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
    })[]>;
    findByRessourceAndEtat(ressourceId: string, etat: EtatExemplaire): Promise<({
        ressource: {
            categorie: {
                id: string;
                libelle: string;
            } | null;
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
    })[]>;
}
