import { RessourcesService } from './ressources.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
export declare class RessourcesController {
    private readonly ressourcesService;
    constructor(ressourcesService: RessourcesService);
    create(createRessourceDto: CreateRessourceDto): Promise<{
        id: string;
        image: string | null;
        universiteId: string;
        titre: string;
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateModification: Date;
        motsCles: string;
        auteurId: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        validation: import("generated/prisma").$Enums.TypeValidation;
        isbn: string | null;
        doi: string | null;
        anneePublication: number | null;
        nbPages: number | null;
        nbExemplaires: number;
        nbDisponibles: number;
        coteClassification: string | null;
        categorieId: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findAll(options?: SearchRessourceDto): Promise<{
        data: {
            noteMoyenne: number;
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            id: string;
            image: string | null;
            universiteId: string;
            titre: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            dateModification: Date;
            motsCles: string;
            auteurId: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            estValide: boolean;
            estArchive: boolean;
            nomAuteurExterne: string | null;
            prenomAuteurExterne: string | null;
            validation: import("generated/prisma").$Enums.TypeValidation;
            isbn: string | null;
            doi: string | null;
            anneePublication: number | null;
            nbPages: number | null;
            nbExemplaires: number;
            nbDisponibles: number;
            coteClassification: string | null;
            categorieId: string;
        }[];
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
    findOne(id: string): Promise<{
        commentaires: ({
            user: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            };
        } & {
            id: string;
            userId: string;
            dateCreation: Date;
            ressourceId: string;
            universiteSrc: string | null;
            universiteUser: string | null;
            contenu: string;
        })[];
        notations: {
            userId: string;
            note: number;
            dateNotation: Date;
        }[];
        _count: {
            favoris: number;
            commentaires: number;
            notations: number;
            historiques: number;
        };
        auteur: {
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        } | null;
        id: string;
        image: string | null;
        universiteId: string;
        titre: string;
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateModification: Date;
        motsCles: string;
        auteurId: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        validation: import("generated/prisma").$Enums.TypeValidation;
        isbn: string | null;
        doi: string | null;
        anneePublication: number | null;
        nbPages: number | null;
        nbExemplaires: number;
        nbDisponibles: number;
        coteClassification: string | null;
        categorieId: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    update(data: {
        id: string;
        updateData: UpdateRessourceDto;
    }): Promise<({
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
            universiteId: string;
            preferencesRecommandation: string | null;
            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        } | null;
    } & {
        id: string;
        image: string | null;
        universiteId: string;
        titre: string;
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateModification: Date;
        motsCles: string;
        auteurId: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        validation: import("generated/prisma").$Enums.TypeValidation;
        isbn: string | null;
        doi: string | null;
        anneePublication: number | null;
        nbPages: number | null;
        nbExemplaires: number;
        nbDisponibles: number;
        coteClassification: string | null;
        categorieId: string;
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    remove(id: string): Promise<{
        id: string;
        message: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findByAuteur(data: {
        auteurId: string;
        options?: SearchRessourceDto;
    }): Promise<{
        data: {
            noteMoyenne: number;
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            id: string;
            image: string | null;
            universiteId: string;
            titre: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            dateModification: Date;
            motsCles: string;
            auteurId: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            estValide: boolean;
            estArchive: boolean;
            nomAuteurExterne: string | null;
            prenomAuteurExterne: string | null;
            validation: import("generated/prisma").$Enums.TypeValidation;
            isbn: string | null;
            doi: string | null;
            anneePublication: number | null;
            nbPages: number | null;
            nbExemplaires: number;
            nbDisponibles: number;
            coteClassification: string | null;
            categorieId: string;
        }[];
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
    findByUniversite(data: {
        universiteId: string;
        options?: SearchRessourceDto;
    }): Promise<{
        data: {
            noteMoyenne: number;
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            id: string;
            image: string | null;
            universiteId: string;
            titre: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            dateModification: Date;
            motsCles: string;
            auteurId: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            estValide: boolean;
            estArchive: boolean;
            nomAuteurExterne: string | null;
            prenomAuteurExterne: string | null;
            validation: import("generated/prisma").$Enums.TypeValidation;
            isbn: string | null;
            doi: string | null;
            anneePublication: number | null;
            nbPages: number | null;
            nbExemplaires: number;
            nbDisponibles: number;
            coteClassification: string | null;
            categorieId: string;
        }[];
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
    toggleValidation(id: string): Promise<{
        id: string;
        image: string | null;
        universiteId: string;
        titre: string;
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateModification: Date;
        motsCles: string;
        auteurId: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        validation: import("generated/prisma").$Enums.TypeValidation;
        isbn: string | null;
        doi: string | null;
        anneePublication: number | null;
        nbPages: number | null;
        nbExemplaires: number;
        nbDisponibles: number;
        coteClassification: string | null;
        categorieId: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    toggleArchivage(id: string): Promise<{
        id: string;
        image: string | null;
        universiteId: string;
        titre: string;
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateModification: Date;
        motsCles: string;
        auteurId: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        validation: import("generated/prisma").$Enums.TypeValidation;
        isbn: string | null;
        doi: string | null;
        anneePublication: number | null;
        nbPages: number | null;
        nbExemplaires: number;
        nbDisponibles: number;
        coteClassification: string | null;
        categorieId: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    enregistrerAcces(data: {
        userId: string;
        ressourceId: string;
        typeAcces: 'CONSULTATION' | 'TELECHARGEMENT' | 'CITATION' | 'PARTAGE';
        ipAcces: string;
        universiteSrc?: string;
    }): Promise<{
        id: string;
        userId: string;
        ressourceId: string;
        universiteSrc: string | null;
        universiteUser: string | null;
        dateAcces: Date;
        typeAcces: import("generated/prisma").$Enums.TypeAcces;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
}
