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
                id: string;
                description: string | null;
                libelle: string;
            } | null;
            _count: {
                commentaires: number;
                notations: number;
                historiques: number;
            };
            exemplaire: {
                id: string;
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            } | null;
            favoris: {
                id: string;
                ressourceId: string | null;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                universiteRess: string | null;
                externalRessourceId: string | null;
            }[];
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            format: string;
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
    }>;
    findOne(id: string, userId?: string): Promise<{
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
        commentaires: ({
            user: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            };
        } & {
            id: string;
            ressourceId: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
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
        auteur: {
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string | null;
        urlFichierLocal: string | null;
        format: string;
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
            id: string;
            description: string | null;
            libelle: string;
        } | null;
        auteur: {
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string | null;
        urlFichierLocal: string | null;
        format: string;
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
    }>;
    remove(id: string, userId?: string): Promise<{
        id: string;
        message: string;
    }>;
    findByAuteur(auteurId: string, options?: SearchRessourceDto): Promise<{
        data: {
            noteMoyenne: number;
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
            exemplaire: {
                id: string;
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            } | null;
            favoris: {
                id: string;
                ressourceId: string | null;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                universiteRess: string | null;
                externalRessourceId: string | null;
            }[];
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            format: string;
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
    }>;
    findByUniversite(universiteId: string, options?: SearchRessourceDto): Promise<{
        data: {
            noteMoyenne: number;
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
            exemplaire: {
                id: string;
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            } | null;
            favoris: {
                id: string;
                ressourceId: string | null;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                universiteRess: string | null;
                externalRessourceId: string | null;
            }[];
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            format: string;
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
    }>;
    findByCategorie(categorieId: string, options?: SearchRessourceDto): Promise<{
        data: {
            noteMoyenne: number;
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
            exemplaire: {
                id: string;
                ressourceId: string;
                etat: import("generated/prisma").$Enums.EtatExemplaire;
                localisation: string;
                dateAcquisition: Date | null;
                qrCode: string | null;
                nombre: number;
                nombreDisponible: number;
                createdAt: Date;
                updatedAt: Date;
            } | null;
            favoris: {
                id: string;
                ressourceId: string | null;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                universiteRess: string | null;
                externalRessourceId: string | null;
            }[];
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            titre: string;
            isbnglobale: string;
            description: string;
            langue: string;
            urlFichier: string | null;
            urlFichierLocal: string | null;
            format: string;
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
    }>;
    toggleArchivage(id: string, userId?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string | null;
        urlFichierLocal: string | null;
        format: string;
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
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string | null;
        urlFichierLocal: string | null;
        format: string;
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
    findRecentlyAccessed(limit?: number): Promise<(({
        categorie: {
            id: string;
            description: string | null;
            libelle: string;
        } | null;
        auteur: {
            id: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string | null;
        urlFichierLocal: string | null;
        format: string;
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
    }) | null)[]>;
    findTopAccessed(options?: SearchRessourceDto): Promise<(Prisma.PickEnumerable<Prisma.HistoriqueAccesGroupByOutputType, "ressourceId"[]> & {
        _count: {
            ressourceId: number;
        };
    })[]>;
    getHistoriqueRessource(ressourceId: string, limit?: number): Promise<{
        id: string;
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        typeAcces: import("generated/prisma").$Enums.TypeAcces;
        universiteRess: string;
        externRessourceId: string | null;
    }[]>;
    compterAccesRessource(ressourceId: string, typeAcces?: TypeAcces): Promise<number>;
    incrementVue(ressourceId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string | null;
        urlFichierLocal: string | null;
        format: string;
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
    }>;
    incrementTelechargement(ressourceId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        titre: string;
        isbnglobale: string;
        description: string;
        langue: string;
        urlFichier: string | null;
        urlFichierLocal: string | null;
        format: string;
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
    }>;
}
