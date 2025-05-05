import { PrismaService } from '../prisma/prisma.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
import { Ressource } from 'generated/prisma';
export declare class RessourcesService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(createRessourceDto: CreateRessourceDto): Promise<Ressource>;
    findAll(options?: SearchRessourceDto): Promise<{
        data: {
            noteMoyenne: number;
            auteur: {
                id: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                departement: string;
                faculte: string;
                specialite: string | null;
            } | null;
            universite: {
                id: string;
                nom: string;
                ville: string;
                pays: string;
            };
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            titre: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            dateCreation: Date;
            dateModification: Date;
            estPublique: boolean;
            motsCles: string;
            auteurId: string | null;
            universiteId: string;
            image: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            estValide: boolean;
            estArchive: boolean;
            nomAuteurExterne: string | null;
            prenomAuteurExterne: string | null;
            affiliationAuteurExterne: string | null;
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
            departement: string;
            faculte: string;
        } | null;
        universite: {
            id: string;
            nom: string;
            ville: string;
            pays: string;
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
            userId: string;
            ressourceId: string;
            estModere: boolean;
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
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateCreation: Date;
        dateModification: Date;
        estPublique: boolean;
        motsCles: string;
        auteurId: string | null;
        universiteId: string;
        image: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        affiliationAuteurExterne: string | null;
    }>;
    update(id: string, updateRessourceDto: UpdateRessourceDto): Promise<{
        auteur: {
            id: string;
            universiteId: string;
            image: string | null;
            email: string;
            motDePasse: string;
            nom: string;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
            departement: string;
            faculte: string;
            specialite: string | null;
            niveauEtudes: string | null;
            dateInscription: Date;
            derniereConnexion: Date | null;
            estActif: boolean;
        } | null;
        universite: {
            id: string;
            dateCreation: Date;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
    } & {
        id: string;
        titre: string;
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateCreation: Date;
        dateModification: Date;
        estPublique: boolean;
        motsCles: string;
        auteurId: string | null;
        universiteId: string;
        image: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        affiliationAuteurExterne: string | null;
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
                departement: string;
                faculte: string;
                specialite: string | null;
            } | null;
            universite: {
                id: string;
                nom: string;
                ville: string;
                pays: string;
            };
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            titre: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            dateCreation: Date;
            dateModification: Date;
            estPublique: boolean;
            motsCles: string;
            auteurId: string | null;
            universiteId: string;
            image: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            estValide: boolean;
            estArchive: boolean;
            nomAuteurExterne: string | null;
            prenomAuteurExterne: string | null;
            affiliationAuteurExterne: string | null;
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
                departement: string;
                faculte: string;
                specialite: string | null;
            } | null;
            universite: {
                id: string;
                nom: string;
                ville: string;
                pays: string;
            };
            _count: {
                favoris: number;
                commentaires: number;
                notations: number;
                historiques: number;
            };
            id: string;
            titre: string;
            description: string;
            type: import("generated/prisma").$Enums.TypeRessource;
            langue: string;
            urlFichier: string;
            urlFichierLocal: string | null;
            format: string;
            dateCreation: Date;
            dateModification: Date;
            estPublique: boolean;
            motsCles: string;
            auteurId: string | null;
            universiteId: string;
            image: string | null;
            niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
            datePublication: Date | null;
            estValide: boolean;
            estArchive: boolean;
            nomAuteurExterne: string | null;
            prenomAuteurExterne: string | null;
            affiliationAuteurExterne: string | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    toggleValidation(id: string): Promise<{
        id: string;
        titre: string;
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateCreation: Date;
        dateModification: Date;
        estPublique: boolean;
        motsCles: string;
        auteurId: string | null;
        universiteId: string;
        image: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        affiliationAuteurExterne: string | null;
    }>;
    toggleArchivage(id: string): Promise<{
        id: string;
        titre: string;
        description: string;
        type: import("generated/prisma").$Enums.TypeRessource;
        langue: string;
        urlFichier: string;
        urlFichierLocal: string | null;
        format: string;
        dateCreation: Date;
        dateModification: Date;
        estPublique: boolean;
        motsCles: string;
        auteurId: string | null;
        universiteId: string;
        image: string | null;
        niveauAcces: import("generated/prisma").$Enums.NiveauAcces;
        datePublication: Date | null;
        estValide: boolean;
        estArchive: boolean;
        nomAuteurExterne: string | null;
        prenomAuteurExterne: string | null;
        affiliationAuteurExterne: string | null;
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
        dateAcces: Date;
        typeAcces: import("generated/prisma").$Enums.TypeAcces;
        ipAcces: string;
        universiteSrc: string | null;
    }>;
}
