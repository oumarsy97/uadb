import { CreateFavorisDto, UpdateFavorisDto } from './dto/create-favoris.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FavorisService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createFavorisDto: CreateFavorisDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }>;
    findAllByUser(userId: string): Promise<{
        favorisLocaux: {
            type: string;
            resourceId: string | null;
            ressourceData: {
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
            } | null;
            isLocal: boolean;
            user: {
                email: string;
                motDePasse: string;
                nom: string;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
                derniereConnexion: Date | null;
                estActif: boolean;
                createdAt: Date;
                updatedAt: Date;
                preferencesRecommandation: string | null;
                frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            } | null;
            ressource: {
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
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            ressourceId: string | null;
            universiteRess: string | null;
            externalRessourceId: string | null;
        }[];
        favorisExternes: {
            type: string;
            resourceId: string | null;
            ressourceData: {
                id: string | null;
                universiteSource: string | null;
            };
            isLocal: boolean;
            sourceUniversite: string | null;
            user: {
                email: string;
                motDePasse: string;
                nom: string;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
                derniereConnexion: Date | null;
                estActif: boolean;
                createdAt: Date;
                updatedAt: Date;
                preferencesRecommandation: string | null;
                frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            } | null;
            ressource: {
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
            } | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            ressourceId: string | null;
            universiteRess: string | null;
            externalRessourceId: string | null;
        }[];
        total: number;
    }>;
    findAll(): Promise<{
        isRessourceExternal: boolean;
        resourceId: string | null;
        ressourceInfo: {
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
            id: string | null;
            isExternal: boolean;
            universite: string | null;
        };
        user: {
            email: string;
            id: string;
        } | null;
        ressource: {
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
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }[]>;
    isFavorite(userId: string, ressourceId: string, universiteRess?: string): Promise<boolean>;
    findByUniversite(universiteRess: string): Promise<({
        user: {
            email: string;
            id: string;
        } | null;
        ressource: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    })[]>;
    findExternalFavoris(): Promise<({
        user: {
            email: string;
            id: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    })[]>;
    findLocalFavoris(): Promise<({
        user: {
            email: string;
            id: string;
        } | null;
        ressource: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    })[]>;
    getStats(): Promise<{
        total: number;
        locaux: number;
        externes: number;
        parUniversite: {
            universite: string | null;
            count: number;
        }[];
    }>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__FavoriClient<({
        user: {
            email: string;
            id: string;
        } | null;
        ressource: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateFavorisDto: UpdateFavorisDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }>;
    removeAllByUser(userId: string): Promise<import("generated/prisma").Prisma.BatchPayload>;
    removeAllByRessource(ressourceId: string): Promise<import("generated/prisma").Prisma.BatchPayload>;
    removeAllByExternalRessource(externalRessourceId: string, universiteRess: string): Promise<import("generated/prisma").Prisma.BatchPayload>;
    getFavoritesByRessource(ressourceId: string): Promise<{
        userInfo: {
            email: string;
            id: string;
        } | null;
        type: string;
        user: {
            email: string;
            id: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }[]>;
    getFavoritesByExternalRessource(externalRessourceId: string, universiteRess: string): Promise<{
        userInfo: {
            email: string;
            id: string;
        } | null;
        type: string;
        ressourceData: {
            id: string | null;
            universiteSource: string | null;
        };
        user: {
            email: string;
            id: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }[]>;
    getResourceId(favori: any): string;
    isExternalFavorite(favori: any): boolean;
}
