import { CreateBibliothecaireDto } from './dto/create-bibliothecaire.dto';
import { UpdateBibliothecaireDto } from './dto/update-bibliothecaire.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilisateursService } from 'src/users/utilisateurs.service';
export declare class BibliothecaireService {
    private readonly utilisateursService;
    private readonly prismaService;
    constructor(utilisateursService: UtilisateursService, prismaService: PrismaService);
    create(createBibliothecaireDto: CreateBibliothecaireDto): Promise<{
        user: {
            role: string;
            email: string;
            nom: string;
            prenom: string;
            image: string | null;
            id: string;
            telephone: string | null;
            derniereConnexion: Date | null;
            estActif: boolean;
            createdAt: Date;
            updatedAt: Date;
            preferencesRecommandation: string | null;
            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        };
        universite: {
            nom: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        numeroBibliothecaire: string;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateBibliothecaireDto: UpdateBibliothecaireDto): Promise<{
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
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    private generateNumero;
}
