import { PrismaService } from '../prisma/prisma.service';
import { CreateEtudiantDto, UpdateEtudiantDto } from './dto/create-etudiant.dto';
import { NiveauEtudes } from 'generated/prisma';
import { UtilisateursService } from 'src/users/utilisateurs.service';
export declare class EtudiantService {
    private readonly prisma;
    private readonly utilisateursService;
    constructor(prisma: PrismaService, utilisateursService: UtilisateursService);
    private generatenumeroEtudiant;
    create(createEtudiantDto: CreateEtudiantDto): Promise<{
        success: boolean;
        message: string;
        data: {
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            numeroEtudiant: string;
            dateNaissance: Date;
            dateInscription: Date;
            departement: string | null;
            faculte: string | null;
            specialite: string | null;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
        };
    }>;
    findAll(options: {
        page?: number;
        limit?: number;
        search?: string;
        departement?: string;
        faculte?: string;
        niveauEtudes?: NiveauEtudes;
        universiteId?: string;
    }): Promise<{
        success: boolean;
        data: ({
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            numeroEtudiant: string;
            dateNaissance: Date;
            dateInscription: Date;
            departement: string | null;
            faculte: string | null;
            specialite: string | null;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: {
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            numeroEtudiant: string;
            dateNaissance: Date;
            dateInscription: Date;
            departement: string | null;
            faculte: string | null;
            specialite: string | null;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
        };
    }>;
    findByNumeroEtudiant(numeroEtudiant: string): Promise<{
        success: boolean;
        data: {
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            numeroEtudiant: string;
            dateNaissance: Date;
            dateInscription: Date;
            departement: string | null;
            faculte: string | null;
            specialite: string | null;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
        };
    }>;
    findByUserId(etudiantId: string): Promise<{
        success: boolean;
        data: {
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            numeroEtudiant: string;
            dateNaissance: Date;
            dateInscription: Date;
            departement: string | null;
            faculte: string | null;
            specialite: string | null;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
        };
    }>;
    update(id: string, updateEtudiantDto: UpdateEtudiantDto): Promise<{
        success: boolean;
        message: string;
        data: {
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            numeroEtudiant: string;
            dateNaissance: Date;
            dateInscription: Date;
            departement: string | null;
            faculte: string | null;
            specialite: string | null;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getStatistics(): Promise<{
        totalEtudiants: number;
        etudiantsActifs: number;
        etudiantsInactifs: number;
        etudiantsParNiveau: (import("generated/prisma").Prisma.PickEnumerable<import("generated/prisma").Prisma.EtudiantGroupByOutputType, "niveauEtudes"[]> & {
            _count: {
                id: number;
            };
        })[];
    }>;
}
