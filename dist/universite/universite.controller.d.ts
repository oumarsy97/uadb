import { UniversiteService } from './universite.service';
import { CreateUniversiteDto, UpdateUniversiteDto } from '../universite/dto/universite.dto';
export declare class UniversiteController {
    private readonly universiteService;
    constructor(universiteService: UniversiteService);
    create(createUniversiteDto: CreateUniversiteDto): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    }>;
    findAll(query: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
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
    update(data: {
        id: string;
        updateData: Partial<UpdateUniversiteDto>;
    }): Promise<{
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
    getTopUniversites(limit?: number): Promise<{
        id: string;
        nom: string;
        adresse: string | null;
        ville: string;
        siteWeb: string | null;
    }[]>;
}
