import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUtilisateurDto } from 'src/users/dto/create-utilisateur.dto';
import { UtilisateursService } from 'src/users/utilisateurs.service';
export declare class AdministrateurService {
    private readonly prismaService;
    private readonly utilisateursService;
    constructor(prismaService: PrismaService, utilisateursService: UtilisateursService);
    create(createAdministrateurDto: CreateUtilisateurDto): Promise<{
        universite: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            adresse: string | null;
            ville: string;
            siteWeb: string | null;
        } | null;
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
        userId: string;
        id: string;
        numeroAdmin: string;
    }>;
    findAll(options?: {
        page?: number | string;
        limit?: number | string;
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
        numeroAdmin: string;
    })[]>;
    findOne(id: string): Promise<({
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
        numeroAdmin: string;
    }) | null>;
    update(id: string, updateAdministrateurDto: UpdateAdministrateurDto): import("generated/prisma").Prisma.Prisma__AdministrateurClient<{
        userId: string;
        id: string;
        numeroAdmin: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__AdministrateurClient<{
        userId: string;
        id: string;
        numeroAdmin: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    private generateNumero;
}
