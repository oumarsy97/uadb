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
    }>;
    findOne(id: string, userId?: string): Promise<{
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
    }>;
    remove(id: string, userId?: string): Promise<{
        id: string;
        message: string;
    }>;
    findByAuteur(auteurId: string, options?: SearchRessourceDto): Promise<{
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
    }>;
    findByUniversite(universiteId: string, options?: SearchRessourceDto): Promise<{
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
    }>;
    findByCategorie(categorieId: string, options?: SearchRessourceDto): Promise<{
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
    }>;
    toggleArchivage(id: string, userId?: string): Promise<{
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
    }>;
    getStatistiques(ressourceId: string): Promise<{
        totalAcces: number;
        parType: Record<string, number>;
    }>;
    private generateIsbnCode;
    findTopRated(options?: SearchRessourceDto): Promise<{
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
    findRecentlyAccessed(limit?: number): Promise<(({
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
    }) | null)[]>;
    findTopAccessed(options?: SearchRessourceDto): Promise<(Prisma.PickEnumerable<Prisma.HistoriqueAccesGroupByOutputType, "ressourceId"[]> & {
        _count: {
            ressourceId: number;
        };
    })[]>;
    getHistoriqueRessource(ressourceId: string, limit?: number): Promise<{
        id: string;
        userId: string;
        ressourceId: string | null;
        typeAcces: import("generated/prisma").$Enums.TypeAcces;
        universiteRess: string;
        externRessourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    compterAccesRessource(ressourceId: string, typeAcces?: TypeAcces): Promise<number>;
    incrementVue(ressourceId: string): Promise<{
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
    }>;
    incrementTelechargement(ressourceId: string): Promise<{
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
    }>;
}
