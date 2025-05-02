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
            departement: string;
            faculte: string;
            specialite: string | null;
            niveauEtudes: string | null;
            universiteId: string;
            id: string;
            dateInscription: Date;
            derniereConnexion: Date | null;
            estActif: boolean;
        }[];
        ressources: {
            universiteId: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            format: string;
            id: string;
            dateCreation: Date;
            titre: string;
            langue: string;
            urlFichier: string;
            referenceBlockchain: string;
            dateModification: Date;
            estPublique: boolean;
            motsCles: string;
            auteurId: string;
            universiteSource: string;
            estExterne: boolean;
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
