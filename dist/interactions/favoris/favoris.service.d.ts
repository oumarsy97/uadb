import { CreateFavorisDto, UpdateFavorisDto } from './dto/create-favoris.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FavorisService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createFavorisDto: CreateFavorisDto): Promise<{
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    }>;
    findAllByUser(userId: string): Promise<{
        favorisLocaux: {
            type: string;
            resourceId: string | null;
            ressourceData: {
                id: string;
                image: string | null;
                createdAt: Date;
                updatedAt: Date;
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
            } | null;
            isLocal: boolean;
            user: {
                id: string;
                email: string;
                motDePasse: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
                createdAt: Date;
                updatedAt: Date;
                preferencesRecommandation: string | null;
                frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            } | null;
            ressource: {
                id: string;
                image: string | null;
                createdAt: Date;
                updatedAt: Date;
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
            } | null;
            userId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ressourceId: string | null;
            externalRessourceId: string | null;
            universiteRess: string | null;
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
                id: string;
                email: string;
                motDePasse: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
                createdAt: Date;
                updatedAt: Date;
                preferencesRecommandation: string | null;
                frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            } | null;
            ressource: {
                id: string;
                image: string | null;
                createdAt: Date;
                updatedAt: Date;
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
            } | null;
            userId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ressourceId: string | null;
            externalRessourceId: string | null;
            universiteRess: string | null;
        }[];
        total: number;
    }>;
    findAll(): Promise<{
        isRessourceExternal: boolean;
        resourceId: string | null;
        ressourceInfo: {
            id: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        } | {
            id: string | null;
            isExternal: boolean;
            universite: string | null;
        };
        user: {
            id: string;
            email: string;
        } | null;
        ressource: {
            id: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        } | null;
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    }[]>;
    isFavorite(userId: string, ressourceId: string, universiteRess?: string): Promise<boolean>;
    findByUniversite(universiteRess: string): Promise<({
        user: {
            id: string;
            email: string;
        } | null;
        ressource: {
            id: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        } | null;
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    })[]>;
    findExternalFavoris(): Promise<({
        user: {
            id: string;
            email: string;
        } | null;
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    })[]>;
    findLocalFavoris(): Promise<({
        user: {
            id: string;
            email: string;
        } | null;
        ressource: {
            id: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        } | null;
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
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
            id: string;
            email: string;
        } | null;
        ressource: {
            id: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        } | null;
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateFavorisDto: UpdateFavorisDto): Promise<{
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    }>;
    remove(id: string): Promise<{
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    }>;
    removeAllByUser(userId: string): Promise<import("generated/prisma").Prisma.BatchPayload>;
    removeAllByRessource(ressourceId: string): Promise<import("generated/prisma").Prisma.BatchPayload>;
    removeAllByExternalRessource(externalRessourceId: string, universiteRess: string): Promise<import("generated/prisma").Prisma.BatchPayload>;
    getFavoritesByRessource(ressourceId: string): Promise<{
        userInfo: {
            id: string;
            email: string;
        } | null;
        type: string;
        user: {
            id: string;
            email: string;
        } | null;
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    }[]>;
    getFavoritesByExternalRessource(externalRessourceId: string, universiteRess: string): Promise<{
        userInfo: {
            id: string;
            email: string;
        } | null;
        type: string;
        ressourceData: {
            id: string | null;
            universiteSource: string | null;
        };
        user: {
            id: string;
            email: string;
        } | null;
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ressourceId: string | null;
        externalRessourceId: string | null;
        universiteRess: string | null;
    }[]>;
    getResourceId(favori: any): string;
    isExternalFavorite(favori: any): boolean;
}
