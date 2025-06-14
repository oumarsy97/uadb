import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto, UpdateEtudiantDto } from './dto/create-etudiant.dto';
import { NiveauEtudes } from 'generated/prisma';
export declare class EtudiantController {
    private readonly etudiantService;
    constructor(etudiantService: EtudiantService);
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
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
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
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
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
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
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
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findByUserId(userId: string): Promise<{
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
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    update(data: {
        id: string;
        updateData: UpdateEtudiantDto;
    }): Promise<{
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
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    getStatistics(): Promise<{
        success: boolean;
        data: {
            totalEtudiants: number;
            etudiantsActifs: number;
            etudiantsInactifs: number;
            etudiantsParNiveau: (import("generated/prisma").Prisma.PickEnumerable<import("generated/prisma").Prisma.EtudiantGroupByOutputType, "niveauEtudes"[]> & {
                _count: {
                    id: number;
                };
            })[];
        };
        error?: undefined;
        message?: undefined;
        statusCode?: undefined;
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
        data?: undefined;
    }>;
}
