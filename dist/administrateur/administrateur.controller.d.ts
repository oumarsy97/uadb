import { AdministrateurService } from './administrateur.service';
import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';
import { CreateUtilisateurDto } from 'src/users/dto/create-utilisateur.dto';
export declare class AdministrateurController {
    private readonly administrateurService;
    constructor(administrateurService: AdministrateurService);
    createAdministrateur(createAdministrateurDto: CreateUtilisateurDto): Promise<{
        universite: {
            nom: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ville: string;
            adresse: string | null;
            siteWeb: string | null;
        } | null;
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
        id: string;
        userId: string;
        numeroAdmin: string;
    }>;
    findAll(options: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<({
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
        userId: string;
        numeroAdmin: string;
    })[]>;
    findOne(id: string): Promise<({
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
        userId: string;
        numeroAdmin: string;
    }) | null>;
    update(data: {
        id: string;
        updateData: Partial<UpdateAdministrateurDto>;
    }): Promise<{
        id: string;
        userId: string;
        numeroAdmin: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        userId: string;
        numeroAdmin: string;
    }>;
}
