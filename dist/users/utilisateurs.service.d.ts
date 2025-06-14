import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../meservices/mail/email.service';
import { CreateUtilisateurDto, LoginDataDto } from './dto/create-utilisateur.dto';
export declare class UtilisateursService {
    private readonly prisma;
    private readonly jwtService;
    private readonly emailService;
    constructor(prisma: PrismaService, jwtService: JwtService, emailService: EmailService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
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
    }>;
    logout(logoutData: LoginDataDto): Promise<{
        message: string;
    }>;
    sendNotificationToUser(userId: string, title: string, message: string): Promise<{
        message: string;
    }>;
    sendBulkNotification(userIds: string[], title: string, message: string): Promise<{
        message: string;
        results: {
            total: number;
            success: number;
            failed: number;
            errors: string[];
        };
    }>;
    findAll(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
        data: {
            email: string;
            nom: string;
            prenom: string;
            image: string | null;
            role: import("generated/prisma").$Enums.RoleUser;
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
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        id: string;
        telephone: string | null;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        id: string;
        telephone: string | null;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
    update(id: string, updateData: Partial<CreateUtilisateurDto>): Promise<{
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
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
    updateDerniereConnexion(id: string): Promise<{
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
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
    }>;
}
