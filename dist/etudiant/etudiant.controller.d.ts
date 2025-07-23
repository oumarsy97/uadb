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
            ufrId: any;
            filiere: {
                departement: {
                    ufr: {
                        universite: {
                            id: string;
                            nom: string;
                        };
                    } & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        nom: string;
                        description: string | null;
                        universiteId: string;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    nom: string;
                    description: string | null;
                    ufrId: string;
                    responsable: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                description: string | null;
                niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
                departementId: string;
            };
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                estActif: boolean;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
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
            filiere: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                description: string | null;
                niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
                departementId: string;
            };
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                derniereConnexion: Date | null;
                estActif: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
        };
    } | {
        success: boolean;
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    findByCodePermanent(codePermanent: string): Promise<{
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
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
            etudiantsParNiveau: (import("generated/prisma").Prisma.PickEnumerable<import("generated/prisma").Prisma.EtudiantGroupByOutputType, "id"> & {
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
