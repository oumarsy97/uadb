import { CreateEnseignantDto } from './dto/create-enseignant.dto';
import { UpdateEnseignantDto } from './dto/update-enseignant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilisateursService } from 'src/users/utilisateurs.service';
export declare class EnseignantService {
    private readonly prismaService;
    private readonly utilisateursService;
    constructor(prismaService: PrismaService, utilisateursService: UtilisateursService);
    create(createEnseignantDto: CreateEnseignantDto): Promise<{
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
        dateNaissance: Date;
        specialite: string | null;
        numeroEnseignant: string;
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
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        dateNaissance: Date;
        specialite: string | null;
        numeroEnseignant: string;
    })[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__EnseignantClient<({
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
        dateNaissance: Date;
        specialite: string | null;
        numeroEnseignant: string;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateEnseignantDto: UpdateEnseignantDto): import("generated/prisma").Prisma.Prisma__EnseignantClient<{
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
        dateNaissance: Date;
        specialite: string | null;
        numeroEnseignant: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__EnseignantClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        dateNaissance: Date;
        specialite: string | null;
        numeroEnseignant: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    private generateNumeroEnseignant;
}
