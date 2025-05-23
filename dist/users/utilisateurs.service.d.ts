import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUtilisateurDto, LoginDataDto } from './dto/create-utilisateur.dto';
export declare class UtilisateursService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
        email: string;
        motDePasse: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        departement: string | null;
        faculte: string | null;
        specialite: string | null;
        niveauEtudes: string | null;
        universiteId: string;
        id: string;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        droitEmpruntExterieur: boolean;
        droitReservationExterieure: boolean;
        universiteAutorisees: string | null;
        nbMaxEmpruntsExternes: number;
        statutValidation: string | null;
        dateValidation: Date | null;
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
            departement: string | null;
            faculte: string | null;
            specialite: string | null;
            niveauEtudes: string | null;
            universiteId: string;
            id: string;
            dateInscription: Date;
            derniereConnexion: Date | null;
            estActif: boolean;
            preferencesRecommandation: string | null;
            frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
            droitEmpruntExterieur: boolean;
            droitReservationExterieure: boolean;
            universiteAutorisees: string | null;
            nbMaxEmpruntsExternes: number;
            statutValidation: string | null;
            dateValidation: Date | null;
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
        departement: string | null;
        faculte: string | null;
        specialite: string | null;
        niveauEtudes: string | null;
        universiteId: string;
        id: string;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        droitEmpruntExterieur: boolean;
        droitReservationExterieure: boolean;
        universiteAutorisees: string | null;
        nbMaxEmpruntsExternes: number;
        statutValidation: string | null;
        dateValidation: Date | null;
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
        departement: string | null;
        faculte: string | null;
        specialite: string | null;
        niveauEtudes: string | null;
        universiteId: string;
        id: string;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        droitEmpruntExterieur: boolean;
        droitReservationExterieure: boolean;
        universiteAutorisees: string | null;
        nbMaxEmpruntsExternes: number;
        statutValidation: string | null;
        dateValidation: Date | null;
    }>;
    update(id: string, updateData: Partial<CreateUtilisateurDto>): Promise<{
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
        departement: string | null;
        faculte: string | null;
        specialite: string | null;
        niveauEtudes: string | null;
        universiteId: string;
        id: string;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        droitEmpruntExterieur: boolean;
        droitReservationExterieure: boolean;
        universiteAutorisees: string | null;
        nbMaxEmpruntsExternes: number;
        statutValidation: string | null;
        dateValidation: Date | null;
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
        departement: string | null;
        faculte: string | null;
        specialite: string | null;
        niveauEtudes: string | null;
        universiteId: string;
        id: string;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        preferencesRecommandation: string | null;
        frequenceRecommandation: import("generated/prisma").$Enums.FrequenceRecommandation;
        droitEmpruntExterieur: boolean;
        droitReservationExterieure: boolean;
        universiteAutorisees: string | null;
        nbMaxEmpruntsExternes: number;
        statutValidation: string | null;
        dateValidation: Date | null;
    }>;
}
