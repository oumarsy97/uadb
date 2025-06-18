import { RessourcesService } from './ressources.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
export declare class RessourcesController {
    private readonly ressourcesService;
    constructor(ressourcesService: RessourcesService);
    create(createRessourceDto: CreateRessourceDto): Promise<{
        id: string;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        image: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        motsCles: string;
        auteurId: string;
        universiteId: string;
        estArchive: boolean;
        validation: import("generated/prisma").$Enums.TypeValidation;
        categorieId: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findAll(options?: SearchRessourceDto): Promise<{
        data: {
            noteMoyenne: number;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            };
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            image: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            motsCles: string;
            auteurId: string;
            universiteId: string;
            estArchive: boolean;
            validation: import("generated/prisma").$Enums.TypeValidation;
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
        auteur: {
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        };
        commentaires: ({
            user: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            };
        } & {
            id: string;
            dateCreation: Date;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
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
        id: string;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        image: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        motsCles: string;
        auteurId: string;
        universiteId: string;
        estArchive: boolean;
        validation: import("generated/prisma").$Enums.TypeValidation;
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
            image: string | null;
            email: string;
            motDePasse: string;
            nom: string;
            telephone: string | null;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
            derniereConnexion: Date | null;
            estActif: boolean;
            createdAt: Date;
            updatedAt: Date;
            preferencesRecommandation: string | null;
            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        };
    } & {
        id: string;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        image: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        motsCles: string;
        auteurId: string;
        universiteId: string;
        estArchive: boolean;
        validation: import("generated/prisma").$Enums.TypeValidation;
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
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            };
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            image: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            motsCles: string;
            auteurId: string;
            universiteId: string;
            estArchive: boolean;
            validation: import("generated/prisma").$Enums.TypeValidation;
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
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            };
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            image: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            motsCles: string;
            auteurId: string;
            universiteId: string;
            estArchive: boolean;
            validation: import("generated/prisma").$Enums.TypeValidation;
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
    toggleArchivage(id: string): Promise<{
        id: string;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        image: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        motsCles: string;
        auteurId: string;
        universiteId: string;
        estArchive: boolean;
        validation: import("generated/prisma").$Enums.TypeValidation;
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
        createdAt: Date;
        updatedAt: Date;
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
