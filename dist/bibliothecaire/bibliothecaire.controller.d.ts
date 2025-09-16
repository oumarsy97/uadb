import { BibliothecaireService } from './bibliothecaire.service';
import { CreateBibliothecaireDto } from './dto/create-bibliothecaire.dto';
import { UpdateBibliothecaireDto } from './dto/update-bibliothecaire.dto';
export declare class BibliothecaireController {
    private readonly bibliothecaireService;
    constructor(bibliothecaireService: BibliothecaireService);
    create(createBibliothecaireDto: CreateBibliothecaireDto): Promise<{
        user: {
            role: string;
            id: string;
            email: string;
            nom: string;
            telephone: string | null;
            prenom: string;
            image: string | null;
            derniereConnexion: Date | null;
            estActif: boolean;
            createdAt: Date;
            updatedAt: Date;
            preferencesRecommandation: string | null;
            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        };
        universite: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            adresse: string | null;
            ville: string;
            siteWeb: string | null;
        } | null;
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        numeroBibliothecaire: string;
    }>;
    findAll(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): import("generated/prisma").Prisma.PrismaPromise<({
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
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        numeroBibliothecaire: string;
    })[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__BibliothecaireClient<({
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
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        numeroBibliothecaire: string;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(updateBibliothecaireDto: UpdateBibliothecaireDto): Promise<{
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
        };
    } & {
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        numeroBibliothecaire: string;
    }>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__BibliothecaireClient<{
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        numeroBibliothecaire: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
