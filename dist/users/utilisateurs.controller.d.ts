import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto, LoginDataDto } from './dto/create-utilisateur.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UtilisateursController {
    private readonly utilisateursService;
    private readonly jwtService;
    constructor(utilisateursService: UtilisateursService, jwtService: JwtService);
    private extractUserIdFromToken;
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
        id: string;
        email: string;
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
    }>;
    login(loginData: LoginDataDto): Promise<{
        message: string;
        data: null;
        user?: undefined;
        token?: undefined;
    } | {
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
        message?: undefined;
        data?: undefined;
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
            etudiant: {
                userId: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateNaissance: Date;
                codePermanent: string;
                filiereId: string;
            } | null;
            enseignant: {
                userId: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                numeroEnseignant: string;
                dateNaissance: Date;
                specialite: string | null;
            } | null;
            id: string;
            email: string;
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
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        etudiant: {
            userId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dateNaissance: Date;
            codePermanent: string;
            filiereId: string;
        } | null;
        enseignant: {
            userId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            numeroEnseignant: string;
            dateNaissance: Date;
            specialite: string | null;
        } | null;
        bibliothecaire: {
            userId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            numeroBibliothecaire: string;
        } | null;
        administrateur: {
            userId: string;
            id: string;
            numeroAdmin: string;
        } | null;
        id: string;
        email: string;
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
        createdAt: Date;
        updatedAt: Date;
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
        createdAt: Date;
        updatedAt: Date;
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
        createdAt: Date;
        updatedAt: Date;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    updateMotDePasse(data: {
        token: string;
        updateData: {
            motDePasse: string;
            confirmationMotDePasse: string;
        };
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
        createdAt: Date;
        updatedAt: Date;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
}
