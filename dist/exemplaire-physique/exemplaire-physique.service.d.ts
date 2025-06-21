import { PrismaService } from '../prisma/prisma.service';
import { CreateExemplairePhysiqueDto } from './dto/create-exemplaire-physique.dto';
import { SearchExemplairePhysiqueDto, UpdateExemplairePhysiqueDto } from './dto/update-exemplaire-physique.dto';
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
            auteur: {
                id: string;
                nom: string;
                prenom: string;
            };
            categorie: {
                id: string;
                libelle: string;
            } | null;
        };
    } & {
        id: string;
        ressourceId: string;
        cote: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        disponible: boolean;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        dureeMaxEmpruntExterne: number;
        nbMaxExemplairesExterne: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(options?: SearchExemplairePhysiqueDto): Promise<{
        data: ({
            ressource: {
                id: string;
                titre: string;
                isbnglobale: string;
                auteur: {
                    id: string;
                    nom: string;
                    prenom: string;
                };
                categorie: {
                    id: string;
                    libelle: string;
                } | null;
            };
            _count: {
                emprunts: number;
            };
        } & {
            id: string;
            ressourceId: string;
            cote: string;
            etat: import("generated/prisma").$Enums.EtatExemplaire;
            disponible: boolean;
            localisation: string;
            dateAcquisition: Date | null;
            qrCode: string | null;
            dureeMaxEmpruntExterne: number;
            nbMaxExemplairesExterne: number;
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
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            };
            categorie: {
                id: string;
                description: string | null;
                libelle: string;
            } | null;
        } & {
            id: string;
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
            auteurId: string;
            estArchive: boolean;
            categorieId: string;
        };
        emprunts: ({
            user: {
                id: string;
                nom: string;
                prenom: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dateEmprunt: Date;
            exemplaireId: string;
            userId: string;
            dateRetourPrevue: Date;
            dateRetourEffective: Date | null;
            statut: import("generated/prisma").$Enums.StatutEmprunt;
            commentaire: string | null;
            universiteEmprunteur: string;
            motifEmprunt: string | null;
            validePar: string | null;
        })[];
        _count: {
            emprunts: number;
        };
    } & {
        id: string;
        ressourceId: string;
        cote: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        disponible: boolean;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        dureeMaxEmpruntExterne: number;
        nbMaxExemplairesExterne: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateExemplairePhysiqueDto: UpdateExemplairePhysiqueDto): Promise<{
        ressource: {
            id: string;
            titre: string;
            isbnglobale: string;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
            };
            categorie: {
                id: string;
                libelle: string;
            } | null;
        };
    } & {
        id: string;
        ressourceId: string;
        cote: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        disponible: boolean;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        dureeMaxEmpruntExterne: number;
        nbMaxExemplairesExterne: number;
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
                id: string;
                titre: string;
                isbnglobale: string;
                auteur: {
                    id: string;
                    nom: string;
                    prenom: string;
                };
                categorie: {
                    id: string;
                    libelle: string;
                } | null;
            };
            _count: {
                emprunts: number;
            };
        } & {
            id: string;
            ressourceId: string;
            cote: string;
            etat: import("generated/prisma").$Enums.EtatExemplaire;
            disponible: boolean;
            localisation: string;
            dateAcquisition: Date | null;
            qrCode: string | null;
            dureeMaxEmpruntExterne: number;
            nbMaxExemplairesExterne: number;
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
            auteur: {
                id: string;
                nom: string;
                prenom: string;
            };
            categorie: {
                id: string;
                libelle: string;
            } | null;
        } & {
            id: string;
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
            auteurId: string;
            estArchive: boolean;
            categorieId: string;
        };
    } & {
        id: string;
        ressourceId: string;
        cote: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        disponible: boolean;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        dureeMaxEmpruntExterne: number;
        nbMaxExemplairesExterne: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    toggleDisponibilite(id: string): Promise<{
        ressource: {
            id: string;
            titre: string;
        };
    } & {
        id: string;
        ressourceId: string;
        cote: string;
        etat: import("generated/prisma").$Enums.EtatExemplaire;
        disponible: boolean;
        localisation: string;
        dateAcquisition: Date | null;
        qrCode: string | null;
        dureeMaxEmpruntExterne: number;
        nbMaxExemplairesExterne: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getStatistiques(ressourceId?: string): Promise<{
        totalExemplaires: number;
        disponibles: number;
        nonDisponibles: number;
        parEtat: Record<import("generated/prisma").$Enums.EtatExemplaire, number>;
    }>;
    private generateQRCode;
}
