import { PrismaService } from "src/prisma/prisma.service";
import { CreateUniversiteDto, UpdateUniversiteDto } from "../universite/dto/universite.dto";
export declare class UniversiteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUniversiteDto: CreateUniversiteDto): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    }>;
    findAll(page?: number, limit?: number, search?: string): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    } | null>;
    update(id: string, updateUniversiteDto: Partial<UpdateUniversiteDto>): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    }>;
    getStatistics(id: string): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    } | null>;
    getTopUniversities(limit?: number): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    }[]>;
}
