import { PrismaService } from "src/prisma/prisma.service";
import { CreateUniversiteDto, UpdateUniversiteDto } from "../universite/dto/universite.dto";
export declare class UniversiteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUniversiteDto: CreateUniversiteDto): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    }>;
    findAll(page?: number, limit?: number, search?: string): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    }[]>;
    findOne(id: string): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    } | null>;
    update(id: string, updateUniversiteDto: Partial<UpdateUniversiteDto>): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    }>;
    remove(id: string): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    }>;
    getStatistics(id: string): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    } | null>;
    getTopUniversities(limit?: number): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    }[]>;
}
