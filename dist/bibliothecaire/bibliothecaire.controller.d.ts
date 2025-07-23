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
            createdAt: Date;
            updatedAt: Date;
            email: string;
            nom: string;
            telephone: string | null;
            prenom: string;
            image: string | null;
            derniereConnexion: Date | null;
            estActif: boolean;
            preferencesRecommandation: string | null;
            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        };
        universite: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            ville: string;
            adresse: string | null;
            siteWeb: string | null;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        numeroBibliothecaire: string;
    }>;
    findAll(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): import("generated/prisma").Prisma.PrismaPromise<({
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        numeroBibliothecaire: string;
    })[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__BibliothecaireClient<({
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        numeroBibliothecaire: string;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs>;
    update(updateBibliothecaireDto: UpdateBibliothecaireDto): Promise<{
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        numeroBibliothecaire: string;
    }>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__BibliothecaireClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        numeroBibliothecaire: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs>;
}
