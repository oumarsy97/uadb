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
                email: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            dateNaissance: Date;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
            filiereId: string;
            numeroEtudiant: string;
            dateInscription: Date;
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
                email: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            dateNaissance: Date;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
            filiereId: string;
            numeroEtudiant: string;
            dateInscription: Date;
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
                email: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            dateNaissance: Date;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
            filiereId: string;
            numeroEtudiant: string;
            dateInscription: Date;
        };
    }>;
    findByNumeroEtudiant(numeroEtudiant: string): Promise<{
        success: boolean;
        data: {
            user: {
                email: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            dateNaissance: Date;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
            filiereId: string;
            numeroEtudiant: string;
            dateInscription: Date;
        };
    }>;
    findByUserId(etudiantId: string): Promise<{
        success: boolean;
        data: {
            user: {
                email: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            dateNaissance: Date;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
            filiereId: string;
            numeroEtudiant: string;
            dateInscription: Date;
        };
    }>;
    update(id: string, updateEtudiantDto: UpdateEtudiantDto): Promise<{
        success: boolean;
        message: string;
        data: {
            user: {
                email: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
                estActif: boolean;
            };
        } & {
            id: string;
            userId: string;
            dateNaissance: Date;
            niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
            filiereId: string;
            numeroEtudiant: string;
            dateInscription: Date;
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
