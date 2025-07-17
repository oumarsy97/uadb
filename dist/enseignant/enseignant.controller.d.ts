import { EnseignantService } from './enseignant.service';
import { CreateEnseignantDto } from './dto/create-enseignant.dto';
import { UpdateEnseignantDto } from './dto/update-enseignant.dto';
export declare class EnseignantController {
    private readonly enseignantService;
    constructor(enseignantService: EnseignantService);
    create(createEnseignantDto: CreateEnseignantDto): Promise<{
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
        dateNaissance: Date;
        specialite: string | null;
        numeroEnseignant: string;
    }>;
    findAll(options: {
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
        dateNaissance: Date;
        specialite: string | null;
        numeroEnseignant: string;
    })[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__EnseignantClient<({
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
        dateNaissance: Date;
        specialite: string | null;
        numeroEnseignant: string;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(updateEnseignantDto: UpdateEnseignantDto): import("generated/prisma").Prisma.Prisma__EnseignantClient<{
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
}
