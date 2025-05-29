import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto, LoginDataDto } from './dto/create-utilisateur.dto';
export declare class UtilisateursController {
    private readonly utilisateursService;
    constructor(utilisateursService: UtilisateursService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
        email: string;
        motDePasse: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        universiteId: string;
        id: string;
        telephone: string | null;
        derniereConnexion: Date | null;
        estActif: boolean;
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
            universite: {
                nom: string;
                id: string;
                adresse: string | null;
                ville: string;
                pays: string;
                siteWeb: string | null;
                dateCreation: Date;
                adresseBlockchain: string | null;
                estActive: boolean;
            };
            email: string;
            nom: string;
            prenom: string;
            image: string | null;
            role: import("generated/prisma").$Enums.RoleUser;
            universiteId: string;
            id: string;
            telephone: string | null;
            derniereConnexion: Date | null;
            estActif: boolean;
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
        universite: {
            nom: string;
            id: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        universiteId: string;
        id: string;
        telephone: string | null;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    findByEmail(email: string): Promise<{
        universite: {
            nom: string;
            id: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        universiteId: string;
        id: string;
        telephone: string | null;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    update(data: {
        id: string;
        updateData: Partial<CreateUtilisateurDto>;
    }): Promise<{
        universite: {
            nom: string;
            id: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        universiteId: string;
        id: string;
        telephone: string | null;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    updateDerniereConnexion(data: {
        id: string;
    }): Promise<{
        email: string;
        motDePasse: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        universiteId: string;
        id: string;
        telephone: string | null;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
}
