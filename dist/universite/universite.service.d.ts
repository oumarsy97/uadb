import { PrismaService } from "src/prisma/prisma.service";
import { CreateUniversiteDto, UpdateUniversiteDto } from "../universite/dto/universite.dto";
export declare class UniversiteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUniversiteDto: CreateUniversiteDto): Promise<{
        id: string;
        dateCreation: Date;
        nom: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        adresseBlockchain: string | null;
        estActive: boolean;
    }>;
    findAll(page?: number, limit?: number, search?: string): Promise<{
        id: string;
        dateCreation: Date;
        nom: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        adresseBlockchain: string | null;
        estActive: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        dateCreation: Date;
        nom: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        adresseBlockchain: string | null;
        estActive: boolean;
    } | null>;
    update(id: string, updateUniversiteDto: Partial<UpdateUniversiteDto>): Promise<{
        id: string;
        dateCreation: Date;
        nom: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        adresseBlockchain: string | null;
        estActive: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        dateCreation: Date;
        nom: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        adresseBlockchain: string | null;
        estActive: boolean;
    }>;
    getStatistics(id: string): Promise<({
        users: {
            id: string;
            universiteId: string;
            image: string | null;
            email: string;
            motDePasse: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
            departement: string;
            faculte: string;
            specialite: string | null;
            niveauEtudes: string | null;
            dateInscription: Date;
            derniereConnexion: Date | null;
            estActif: boolean;
        }[];
        ressources: {
            id: string;
            titre: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            dateCreation: Date;
            dateModification: Date;
            estPublique: boolean;
            motsCles: string;
            auteurId: string | null;
            universiteId: string;
            image: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            estValide: boolean;
            estArchive: boolean;
            nomAuteurExterne: string | null;
            prenomAuteurExterne: string | null;
            affiliationAuteurExterne: string | null;
        }[];
    } & {
        id: string;
        dateCreation: Date;
        nom: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        adresseBlockchain: string | null;
        estActive: boolean;
    }) | null>;
    toggleStatus(id: string): Promise<{
        id: string;
        dateCreation: Date;
        nom: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        adresseBlockchain: string | null;
        estActive: boolean;
    }>;
    getTopUniversities(limit?: number): Promise<{
        id: string;
        dateCreation: Date;
        nom: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        adresseBlockchain: string | null;
        estActive: boolean;
    }[]>;
}
