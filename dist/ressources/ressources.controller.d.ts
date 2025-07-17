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
            categorie: {
                description: string | null;
                id: string;
                libelle: string;
            } | null;
            _count: {
                commentaires: number;
                notations: number;
                historiques: number;
            };
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
            } | null;
            exemplaire: {
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
            } | null;
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
    }): Promise<({
        categorie: {
            description: string | null;
            id: string;
            libelle: string;
        } | null;
        commentaires: ({
            user: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            ressourceId: string;
            dateCreation: Date;
            universiteSrc: string | null;
            universiteUser: string | null;
            contenu: string;
        })[];
        notations: {
            userId: string | null;
            note: number;
            dateNotation: Date;
        }[];
        _count: {
            commentaires: number;
            notations: number;
            historiques: number;
        };
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
    }) | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    update(data: {
        id: string;
        updateData: UpdateRessourceDto;
        token: string;
    }): Promise<({
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
            categorie: {
                description: string | null;
                id: string;
                libelle: string;
            } | null;
            _count: {
                commentaires: number;
                notations: number;
                historiques: number;
            };
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
            } | null;
            exemplaire: {
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
            } | null;
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
            categorie: {
                description: string | null;
                id: string;
                libelle: string;
            } | null;
            _count: {
                commentaires: number;
                notations: number;
                historiques: number;
            };
            auteur: {
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
            } | null;
            exemplaire: {
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
            } | null;
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
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findTopRatedRessources(options?: SearchRessourceDto): Promise<{
        noteMoyenne: number;
        _count: {
            commentaires: number;
            notations: number;
            historiques: number;
        };
        auteur: {
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
            id: string;
        } | null;
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
    }[]>;
    findTopAccessedRessources(options?: SearchRessourceDto): Promise<(import("generated/prisma").Prisma.PickEnumerable<import("generated/prisma").Prisma.HistoriqueAccesGroupByOutputType, "ressourceId"[]> & {
        _count: {
            ressourceId: number;
        };
    })[]>;
}
