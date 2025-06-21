import { PrismaService } from '../prisma/prisma.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
import { Ressource, TypeAcces } from 'generated/prisma';
export declare class RessourcesService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
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
    }>;
    findOne(id: string): Promise<{
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
    }>;
    update(id: string, updateRessourceDto: UpdateRessourceDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
    findByUniversite(universiteId: string, options?: SearchRessourceDto): Promise<{
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
    }>;
    findByCategorie(categorieId: string, options?: SearchRessourceDto): Promise<{
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
    }>;
    toggleArchivage(id: string): Promise<{
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
    }>;
    enregistrerAcces(data: {
        userId: string;
        ressourceId: string;
        typeAcces: TypeAcces;
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
    }>;
    getStatistiques(ressourceId: string): Promise<{
        totalAcces: number;
        parType: Record<string, number>;
    }>;
    private generateIsbnCode;
}
