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
            user: {
                id: string;
                email: string;
                nom: string;
                telephone: string | null;
                prenom: string;
                role: import("generated/prisma").$Enums.RoleUser;
                estActif: boolean;
            };
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
            id: string;
            userId: string;
            codePermanent: string;
            dateNaissance: Date;
            dateInscription: Date;
            filiereId: string;
            createdAt: Date;
            updatedAt: Date;
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
            codePermanent: string;
            dateNaissance: Date;
            dateInscription: Date;
            filiereId: string;
            createdAt: Date;
            updatedAt: Date;
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
            codePermanent: string;
            dateNaissance: Date;
            dateInscription: Date;
            filiereId: string;
            createdAt: Date;
            updatedAt: Date;
        };
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
            userId: string;
            codePermanent: string;
            dateNaissance: Date;
            dateInscription: Date;
            filiereId: string;
            createdAt: Date;
            updatedAt: Date;
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
            codePermanent: string;
            dateNaissance: Date;
            dateInscription: Date;
            filiereId: string;
            createdAt: Date;
            updatedAt: Date;
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
            codePermanent: string;
            dateNaissance: Date;
            dateInscription: Date;
            filiereId: string;
            createdAt: Date;
            updatedAt: Date;
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
