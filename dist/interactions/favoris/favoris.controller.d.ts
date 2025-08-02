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
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }>;
    findAll(): Promise<{
        isRessourceExternal: boolean;
        resourceId: string | null;
        ressourceInfo: {
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
        } | null;
        id: string;
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__FavoriClient<({
        user: {
            id: string;
            email: string;
        } | null;
        ressource: {
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
        } | null;
    } & {
        id: string;
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(data: {
        updateFavorisDto: UpdateFavorisDto;
        token: string;
    }): Promise<{
        id: string;
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        universiteRess: string | null;
        externalRessourceId: string | null;
    }>;
    remove(data: {
        id: string;
        token: string;
    }): Promise<{
        id: string;
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
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
            } | null;
            isLocal: boolean;
            user: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                motDePasse: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
                preferencesRecommandation: string | null;
                frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            } | null;
            ressource: {
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
            } | null;
            id: string;
            ressourceId: string | null;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
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
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                motDePasse: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
                preferencesRecommandation: string | null;
                frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            } | null;
            ressource: {
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
            } | null;
            id: string;
            ressourceId: string | null;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
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
