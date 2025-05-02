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
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        departement: string;
        faculte: string;
        specialite: string | null;
        niveauEtudes: string | null;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        universiteId: string;
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
                id: string;
                nom: string;
                adresse: string | null;
                ville: string;
                pays: string;
                siteWeb: string | null;
                dateCreation: Date;
                adresseBlockchain: string | null;
                estActive: boolean;
            };
            id: string;
            email: string;
            nom: string;
            prenom: string;
            image: string | null;
            role: import("generated/prisma").$Enums.RoleUser;
            departement: string;
            faculte: string;
            specialite: string | null;
            niveauEtudes: string | null;
            dateInscription: Date;
            derniereConnexion: Date | null;
            estActif: boolean;
            universiteId: string;
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
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        id: string;
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        departement: string;
        faculte: string;
        specialite: string | null;
        niveauEtudes: string | null;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        universiteId: string;
    }>;
    findByEmail(email: string): Promise<{
        universite: {
            id: string;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        id: string;
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        departement: string;
        faculte: string;
        specialite: string | null;
        niveauEtudes: string | null;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        universiteId: string;
    }>;
    update(data: {
        id: string;
        updateData: Partial<CreateUtilisateurDto>;
    }): Promise<{
        universite: {
            id: string;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
            estActive: boolean;
        };
        id: string;
        email: string;
        nom: string;
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        departement: string;
        faculte: string;
        specialite: string | null;
        niveauEtudes: string | null;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        universiteId: string;
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
        prenom: string;
        image: string | null;
        role: import("generated/prisma").$Enums.RoleUser;
        departement: string;
        faculte: string;
        specialite: string | null;
        niveauEtudes: string | null;
        dateInscription: Date;
        derniereConnexion: Date | null;
        estActif: boolean;
        universiteId: string;
    }>;
}
