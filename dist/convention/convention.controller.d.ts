import { ConventionService } from './convention.service';
import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateConventionDto } from './dto/update-convention.dto';
export declare class ConventionController {
    private readonly conventionService;
    constructor(conventionService: ConventionService);
    create(createConventionDto: CreateConventionDto): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }>;
    findAll(query?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    } | null>;
    update(data: {
        id: string;
        updateData: UpdateConventionDto;
    }): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }>;
    findActiveConventions(): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }[]>;
    findInactiveConventions(): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }[]>;
    activateConvention(id: string): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }>;
    deactivateConvention(id: string): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }>;
    findConventionsByUniversite(universiteId: string): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }[]>;
    toggleStatus(id: string): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
    }>;
}
