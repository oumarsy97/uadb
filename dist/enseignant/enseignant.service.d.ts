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
        numeroEnseignant: string;
        dateNaissance: Date;
        specialite: string | null;
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
        createdAt: Date;
        updatedAt: Date;
        numeroEnseignant: string;
        dateNaissance: Date;
        specialite: string | null;
    })[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__EnseignantClient<({
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
        numeroEnseignant: string;
        dateNaissance: Date;
        specialite: string | null;
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateEnseignantDto: UpdateEnseignantDto): import("generated/prisma").Prisma.Prisma__EnseignantClient<{
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
        numeroEnseignant: string;
        dateNaissance: Date;
        specialite: string | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__EnseignantClient<{
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        numeroEnseignant: string;
        dateNaissance: Date;
        specialite: string | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findRessourcesByEnseignantId(enseignantId: string, options?: {
        limit?: number;
        page?: number;
        search?: string;
    }): Promise<{
        meta: {
            total: number;
            skip: number;
            take: number;
        };
        data: ({
            favoris: {
                userId: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ressourceId: string | null;
                externalRessourceId: string | null;
                universiteRess: string | null;
            }[];
        } & {
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
        })[];
    }>;
    private generateNumeroEnseignant;
}
