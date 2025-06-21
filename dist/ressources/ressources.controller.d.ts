import { RessourcesService } from './ressources.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
import { JwtService } from '@nestjs/jwt';
export declare class RessourcesController {
    private readonly ressourcesService;
    private readonly jwtService;
    constructor(ressourcesService: RessourcesService, jwtService: JwtService);
    private extractUserIdFromToken;
    create(data: {
        createRessourceDto: CreateRessourceDto;
        token: string;
    }): Promise<{
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
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findAll(data: {
        options?: SearchRessourceDto;
        token?: string;
    }): Promise<{
        data: {
            noteMoyenne: number;
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
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
                exemplaires: number;
                reservations: number;
            };
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
    findOne(data: {
        id: string;
        token?: string;
    }): Promise<{
        noteMoyenne: number;
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
            createdAt: Date;
            updatedAt: Date;
            dateCreation: Date;
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
        reservations: ({
            user: {
                id: string;
                nom: string;
                prenom: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            ressourceId: string;
            commentaire: string | null;
            dateReservation: Date;
            dateDebut: Date;
            dateFin: Date;
            statut: import("generated/prisma").$Enums.StatutReservation;
            universiteEmprunteur: string;
            validePar: string | null;
        })[];
        categorie: {
            id: string;
            description: string | null;
            libelle: string;
        } | null;
        _count: {
            favoris: number;
            commentaires: number;
            notations: number;
            historiques: number;
            exemplaires: number;
            reservations: number;
        };
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
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    update(data: {
        id: string;
        updateData: UpdateRessourceDto;
        token: string;
    }): Promise<({
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
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    remove(data: {
        id: string;
        token: string;
    }): Promise<{
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
        token?: string;
    }): Promise<{
        data: {
            noteMoyenne: number;
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
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
                exemplaires: number;
                reservations: number;
            };
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
        token?: string;
    }): Promise<{
        data: {
            noteMoyenne: number;
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
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
                exemplaires: number;
                reservations: number;
            };
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
    toggleArchivage(data: {
        id: string;
        token: string;
    }): Promise<{
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
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    enregistrerAcces(data: {
        ressourceId: string;
        typeAcces: 'CONSULTATION' | 'TELECHARGEMENT' | 'CITATION' | 'PARTAGE';
        ipAcces: string;
        universiteSrc?: string;
        token: string;
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
