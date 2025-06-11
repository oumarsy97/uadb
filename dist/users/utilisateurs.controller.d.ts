import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto, LoginDataDto } from './dto/create-utilisateur.dto';
export declare class UtilisateursController {
    private readonly utilisateursService;
    constructor(utilisateursService: UtilisateursService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
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
        universiteId: string;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    login(loginData: LoginDataDto): Promise<{
        user: {
            id: string;
            nom: string;
            prenom: string;
            email: string;
            role: import("generated/prisma").$Enums.RoleUser;
            image: string | null;
            universite: string;
        };
        token: string;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    logout(logoutData: LoginDataDto): Promise<{
        message: string;
    }>;
    findAll(options: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
        data: {
            id: string;
            email: string;
            nom: string;
            telephone: string | null;
            prenom: string;
            image: string | null;
            role: import("generated/prisma").$Enums.RoleUser;
            derniereConnexion: Date | null;
            estActif: boolean;
            universiteId: string;
            preferencesRecommandation: string | null;
            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        nom: string;
        telephone: string | null;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        derniereConnexion: Date | null;
        estActif: boolean;
        universiteId: string;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        nom: string;
        telephone: string | null;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        derniereConnexion: Date | null;
        estActif: boolean;
        universiteId: string;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    update(data: {
        id: string;
        updateData: Partial<CreateUtilisateurDto>;
    }): Promise<{
        id: string;
        email: string;
        nom: string;
        telephone: string | null;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        derniereConnexion: Date | null;
        estActif: boolean;
        universiteId: string;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    updateDerniereConnexion(data: {
        id: string;
    }): Promise<{
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
        universiteId: string;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
}
