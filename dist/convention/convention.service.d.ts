import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateConventionDto } from './dto/update-convention.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ConventionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findAll(page?: number, limit?: number, search?: string): import("generated/prisma").Prisma.PrismaPromise<({
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__ConventionInteruniversitaireClient<({
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
    }) | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateConventionDto: UpdateConventionDto): import("generated/prisma").Prisma.Prisma__ConventionInteruniversitaireClient<{
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
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__ConventionInteruniversitaireClient<{
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
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
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
}
