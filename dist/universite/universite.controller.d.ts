import { UniversiteService } from './universite.service';
import { CreateUniversiteDto, UpdateUniversiteDto } from '../universite/dto/universite.dto';
export declare class UniversiteController {
    private readonly universiteService;
    constructor(universiteService: UniversiteService);
    create(createUniversiteDto: CreateUniversiteDto): Promise<{
        nom: string;
        id: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        dateCreation: Date;
        adresseBlockchain: string | null;
        estActive: boolean;
    }>;
    findAll(query: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
        nom: string;
        id: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        dateCreation: Date;
        adresseBlockchain: string | null;
        estActive: boolean;
    }[]>;
    findOne(id: string): Promise<{
        nom: string;
        id: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        dateCreation: Date;
        adresseBlockchain: string | null;
        estActive: boolean;
    } | null>;
    update(data: {
        id: string;
        updateData: Partial<UpdateUniversiteDto>;
    }): Promise<{
        nom: string;
        id: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        dateCreation: Date;
        adresseBlockchain: string | null;
        estActive: boolean;
    }>;
    remove(id: string): Promise<{
        nom: string;
        id: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        dateCreation: Date;
        adresseBlockchain: string | null;
        estActive: boolean;
    }>;
    getStatistics(id: string): Promise<({
        users: {
            email: string;
            motDePasse: string;
            nom: string;
            prenom: string;
            image: string | null;
            role: import("generated/prisma").$Enums.RoleUser;
            universiteId: string;
            id: string;
            telephone: string | null;
            derniereConnexion: Date | null;
            estActif: boolean;
            preferencesRecommandation: string | null;
            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        }[];
        ressources: {
            image: string | null;
            universiteId: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            format: string;
            id: string;
            dateCreation: Date;
            titre: string;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            dateModification: Date;
            estPublique: boolean;
            motsCles: string;
            auteurId: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            estValide: boolean;
            estArchive: boolean;
            nomAuteurExterne: string | null;
            prenomAuteurExterne: string | null;
            affiliationAuteurExterne: string | null;
            validation: import("generated/prisma").$Enums.TypeValidation;
            isbn: string | null;
            doi: string | null;
            edition: string | null;
            anneePublication: number | null;
            editeur: string | null;
            nbPages: number | null;
            categorieBiblio: import("generated/prisma").$Enums.CategorieBiblio | null;
            estEmpruntable: boolean;
            nbExemplaires: number;
            nbDisponibles: number;
            coteClassification: string | null;
            estEmpruntableExterne: boolean;
            dureeMaxEmpruntExterne: number;
            nbMaxExemplairesExterne: number;
            necessiteAutorisation: boolean;
        }[];
    } & {
        nom: string;
        id: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        dateCreation: Date;
        adresseBlockchain: string | null;
        estActive: boolean;
    }) | null>;
    toggleStatus(id: string): Promise<{
        nom: string;
        id: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        dateCreation: Date;
        adresseBlockchain: string | null;
        estActive: boolean;
    }>;
    getTopUniversites(limit?: number): Promise<{
        nom: string;
        id: string;
        adresse: string | null;
        ville: string;
        pays: string;
        siteWeb: string | null;
        dateCreation: Date;
        adresseBlockchain: string | null;
        estActive: boolean;
    }[]>;
}
