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
            ufrId: any;
            filiere: {
                departement: {
                    ufr: {
                        universite: {
                            nom: string;
                            id: string;
                        };
                    } & {
                        nom: string;
                        description: string | null;
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        universiteId: string;
                    };
                } & {
                    nom: string;
                    description: string | null;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ufrId: string;
                    responsable: string | null;
                };
            } & {
                nom: string;
                description: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
                departementId: string;
            };
            user: {
                email: string;
                nom: string;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
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
                nom: string;
                description: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                niveauEtudes: import("generated/prisma").$Enums.NiveauEtudes;
                departementId: string;
            };
            user: {
                email: string;
                nom: string;
                prenom: string;
                image: string | null;
                role: import("generated/prisma").$Enums.RoleUser;
                id: string;
                telephone: string | null;
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
        };
    }>;
    findByCodePermanent(codePermanent: string): Promise<{
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            dateNaissance: Date;
            filiereId: string;
            codePermanent: string;
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
        etudiantsParNiveau: (import("generated/prisma").Prisma.PickEnumerable<import("generated/prisma").Prisma.EtudiantGroupByOutputType, "id"> & {
            _count: {
                id: number;
            };
        })[];
    }>;
}
