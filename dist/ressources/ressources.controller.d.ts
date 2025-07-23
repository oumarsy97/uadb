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
        createdAt: Date;
        updatedAt: Date;
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
        auteurId: string | null;
        nomAuteur: string | null;
        telechargements: number;
        vues: number;
        estArchive: boolean;
        noteMoyenne: number;
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
            } | null;
            favoris: {
                id: string;
                userId: string;
                ressourceId: string | null;
                universiteRess: string | null;
                createdAt: Date;
                updatedAt: Date;
                externalRessourceId: string | null;
            }[];
            exemplaire: {
                id: string;
                ressourceId: string;
                createdAt: Date;
                updatedAt: Date;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
            } | null;
            categorie: {
                id: string;
                description: string | null;
                libelle: string;
            } | null;
            _count: {
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
            auteurId: string | null;
            nomAuteur: string | null;
            telechargements: number;
            vues: number;
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
    }): Promise<({
        auteur: {
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        } | null;
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
            ressourceId: string;
            createdAt: Date;
            updatedAt: Date;
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
        categorie: {
            id: string;
            description: string | null;
            libelle: string;
        } | null;
        _count: {
            commentaires: number;
            notations: number;
            historiques: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        auteurId: string | null;
        nomAuteur: string | null;
        telechargements: number;
        vues: number;
        estArchive: boolean;
        noteMoyenne: number;
        categorieId: string;
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
        auteur: {
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        } | null;
        categorie: {
            id: string;
            description: string | null;
            libelle: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        auteurId: string | null;
        nomAuteur: string | null;
        telechargements: number;
        vues: number;
        estArchive: boolean;
        noteMoyenne: number;
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
            } | null;
            favoris: {
                id: string;
                userId: string;
                ressourceId: string | null;
                universiteRess: string | null;
                createdAt: Date;
                updatedAt: Date;
                externalRessourceId: string | null;
            }[];
            exemplaire: {
                id: string;
                ressourceId: string;
                createdAt: Date;
                updatedAt: Date;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
            } | null;
            categorie: {
                id: string;
                description: string | null;
                libelle: string;
            } | null;
            _count: {
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
            auteurId: string | null;
            nomAuteur: string | null;
            telechargements: number;
            vues: number;
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
            } | null;
            favoris: {
                id: string;
                userId: string;
                ressourceId: string | null;
                universiteRess: string | null;
                createdAt: Date;
                updatedAt: Date;
                externalRessourceId: string | null;
            }[];
            exemplaire: {
                id: string;
                ressourceId: string;
                createdAt: Date;
                updatedAt: Date;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
            } | null;
            categorie: {
                id: string;
                description: string | null;
                libelle: string;
            } | null;
            _count: {
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
            auteurId: string | null;
            nomAuteur: string | null;
            telechargements: number;
            vues: number;
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
        createdAt: Date;
        updatedAt: Date;
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
        auteurId: string | null;
        nomAuteur: string | null;
        telechargements: number;
        vues: number;
        estArchive: boolean;
        noteMoyenne: number;
        categorieId: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findTopRatedRessources(options?: SearchRessourceDto): Promise<{
        noteMoyenne: number;
        auteur: {
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        } | null;
        _count: {
            commentaires: number;
            notations: number;
            historiques: number;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        auteurId: string | null;
        nomAuteur: string | null;
        telechargements: number;
        vues: number;
        estArchive: boolean;
        categorieId: string;
    }[]>;
    findTopAccessedRessources(options?: SearchRessourceDto): Promise<(import("generated/prisma").Prisma.PickEnumerable<import("generated/prisma").Prisma.HistoriqueAccesGroupByOutputType, "ressourceId"[]> & {
        _count: {
            ressourceId: number;
        };
    })[]>;
    incrementRessourceViews(data: {
        id: string;
        token?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        auteurId: string | null;
        nomAuteur: string | null;
        telechargements: number;
        vues: number;
        estArchive: boolean;
        noteMoyenne: number;
        categorieId: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    incrementRessourceDownloads(data: {
        id: string;
        token?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
        auteurId: string | null;
        nomAuteur: string | null;
        telechargements: number;
        vues: number;
        estArchive: boolean;
        noteMoyenne: number;
        categorieId: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
}
