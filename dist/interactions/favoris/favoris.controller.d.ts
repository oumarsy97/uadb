import { FavorisService } from './favoris.service';
import { CreateFavorisDto, UpdateFavorisDto } from './dto/create-favoris.dto';
import { JwtHelperService } from 'src/JwtHelper.service';
export declare class FavorisController {
    private readonly favorisService;
    private readonly jwtHelperService;
    constructor(favorisService: FavorisService, jwtHelperService: JwtHelperService);
    create(data: {
        createFavorisDto: CreateFavorisDto;
        token: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
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
    update(data: {
        updateFavorisDto: UpdateFavorisDto;
        token: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }>;
    remove(data: {
        id: string;
        token: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ressourceId: string | null;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }>;
    mesFavoris(data: {
        token: string;
    }): Promise<{
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
    isFavorite(data: {
        ressourceId: string;
        token: string;
    }): Promise<boolean>;
    removeAllMyFavoris(data: {
        token: string;
    }): Promise<import("generated/prisma").Prisma.BatchPayload>;
}
