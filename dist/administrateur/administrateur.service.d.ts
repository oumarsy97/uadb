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
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            ville: string;
            adresse: string | null;
            siteWeb: string | null;
        } | null;
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
        id: string;
        userId: string;
        numeroAdmin: string;
    }>;
    findAll(options?: {
        page?: number | string;
        limit?: number | string;
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
        userId: string;
        numeroAdmin: string;
    })[]>;
    findOne(id: string): Promise<({
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
        userId: string;
        numeroAdmin: string;
    }) | null>;
    update(id: string, updateAdministrateurDto: UpdateAdministrateurDto): import("generated/prisma").Prisma.Prisma__AdministrateurClient<{
        id: string;
        userId: string;
        numeroAdmin: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__AdministrateurClient<{
        id: string;
        userId: string;
        numeroAdmin: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs>;
    private generateNumero;
}
