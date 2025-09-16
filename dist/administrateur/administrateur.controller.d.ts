import { AdministrateurService } from './administrateur.service';
import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';
import { CreateUtilisateurDto } from 'src/users/dto/create-utilisateur.dto';
export declare class AdministrateurController {
    private readonly administrateurService;
    constructor(administrateurService: AdministrateurService);
    createAdministrateur(createAdministrateurDto: CreateUtilisateurDto): Promise<{
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
    findAll(options: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<({
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
    update(data: {
        id: string;
        updateData: Partial<UpdateAdministrateurDto>;
    }): Promise<{
        userId: string;
        id: string;
        numeroAdmin: string;
    }>;
    remove(id: string): Promise<{
        userId: string;
        id: string;
        numeroAdmin: string;
    }>;
}
