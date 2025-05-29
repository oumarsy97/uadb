import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUtilisateurDto, LoginDataDto } from './dto/create-utilisateur.dto';
export declare class UtilisateursService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
        id: string;
        universiteId: string;
        image: string | null;
        email: string;
        motDePasse: string;
        nom: string;
        telephone: string | null;
        prenom: string;
        role: import("generated/prisma").$Enums.RoleUser;
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
    }>;
    logout(logoutData: LoginDataDto): Promise<{
        message: string;
    }>;
    findAll(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
        data: {
            universite: {
                id: string;
                dateCreation: Date;
                nom: string;
                adresse: string | null;
                ville: string;
                pays: string;
                siteWeb: string | null;
                adresseBlockchain: string | null;
                estActive: boolean;
            };
            id: string;
            universiteId: string;
            image: string | null;
            email: string;
            nom: string;
            telephone: string | null;
            prenom: string;
            role: import("generated/prisma").$Enums.RoleUser;
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
            id: string;
            dateCreation: Date;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        id: string;
        universiteId: string;
        image: string | null;
        email: string;
        nom: string;
        telephone: string | null;
        prenom: string;
        role: import("generated/prisma").$Enums.RoleUser;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    findByEmail(email: string): Promise<{
        universite: {
            id: string;
            dateCreation: Date;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        id: string;
        universiteId: string;
        image: string | null;
        email: string;
        nom: string;
        telephone: string | null;
        prenom: string;
        role: import("generated/prisma").$Enums.RoleUser;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    update(id: string, updateData: Partial<CreateUtilisateurDto>): Promise<{
        universite: {
            id: string;
            dateCreation: Date;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        id: string;
        universiteId: string;
        image: string | null;
        email: string;
        nom: string;
        telephone: string | null;
        prenom: string;
        role: import("generated/prisma").$Enums.RoleUser;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    updateDerniereConnexion(id: string): Promise<{
        id: string;
        universiteId: string;
        image: string | null;
        email: string;
        motDePasse: string;
        nom: string;
        telephone: string | null;
        prenom: string;
        role: import("generated/prisma").$Enums.RoleUser;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
}
