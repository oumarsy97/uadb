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
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    }>;
    findAll(query?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<({
        universite1: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
        universite2: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
    } & {
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    })[]>;
    findOne(id: string): Promise<({
        universite1: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
        universite2: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
    } & {
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    }) | null>;
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
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
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
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    }>;
    findActiveConventions(): Promise<({
        universite1: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
        universite2: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
    } & {
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    })[]>;
    findInactiveConventions(): Promise<({
        universite1: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
        universite2: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
    } & {
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    })[]>;
    activateConvention(id: string): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
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
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    }>;
    findConventionsByUniversite(universiteId: string): Promise<({
        universite1: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
        universite2: {
            id: string;
            estActive: boolean;
            nom: string;
            adresse: string | null;
            ville: string;
            pays: string;
            siteWeb: string | null;
            dateCreation: Date;
            adresseBlockchain: string | null;
        };
    } & {
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    })[]>;
    toggleStatus(id: string): Promise<{
        id: string;
        universiteId1: string;
        universiteId2: string;
        dateDebut: Date;
        dateFin: Date | null;
        estActive: boolean;
        typeConvention: import("generated/prisma").$Enums.TypeConvention;
        detailsConvention: string | null;
        documentsUrl: string | null;
        contactUniversite1: string | null;
        contactUniversite2: string | null;
    }>;
}
