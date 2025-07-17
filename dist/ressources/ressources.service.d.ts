import { PrismaService } from '../prisma/prisma.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
import { Prisma, Ressource, TypeAcces } from 'generated/prisma';
import { HistoriqueAccesService } from 'src/interactions/historique-acces/historique-acces.service';
export declare class RessourcesService {
    private readonly prisma;
    private readonly historiqueAccesService;
    private readonly logger;
    constructor(prisma: PrismaService, historiqueAccesService: HistoriqueAccesService);
    create(createRessourceDto: CreateRessourceDto): Promise<Ressource>;
    private getOrCreateDefaultCategory;
    findAll(options?: SearchRessourceDto): Promise<{
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
    }>;
    findOne(id: string, userId?: string): Promise<{
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
    }>;
    downloadRessource(id: string, userId: string): Promise<{
        message: string;
        ressource: {
            id: string;
            titre: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            format: string;
        };
    }>;
    update(id: string, updateRessourceDto: UpdateRessourceDto, userId?: string): Promise<{
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
    }>;
    remove(id: string, userId?: string): Promise<{
        id: string;
        message: string;
    }>;
    findByAuteur(auteurId: string, options?: SearchRessourceDto): Promise<{
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
    }>;
    findByUniversite(universiteId: string, options?: SearchRessourceDto): Promise<{
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
    }>;
    findByCategorie(categorieId: string, options?: SearchRessourceDto): Promise<{
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
    }>;
    toggleArchivage(id: string, userId?: string): Promise<{
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
    }>;
    getStatistiques(ressourceId: string): Promise<{
        totalAcces: number;
        parType: Record<string, number>;
    }>;
    private generateIsbnCode;
    findTopRated(options?: SearchRessourceDto): Promise<{
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
    findRecentlyAccessed(limit?: number): Promise<(({
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
    }) | null)[]>;
    findTopAccessed(options?: SearchRessourceDto): Promise<(Prisma.PickEnumerable<Prisma.HistoriqueAccesGroupByOutputType, "ressourceId"[]> & {
        _count: {
            ressourceId: number;
        };
    })[]>;
    getHistoriqueRessource(ressourceId: string, limit?: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        typeAcces: import("generated/prisma").$Enums.TypeAcces;
        universiteRess: string;
        externRessourceId: string | null;
    }[]>;
    compterAccesRessource(ressourceId: string, typeAcces?: TypeAcces): Promise<number>;
}
