import { UniversiteService } from './universite.service';
import { CreateUniversiteDto, UpdateUniversiteDto } from '../universite/dto/universite.dto';
export declare class UniversiteController {
    private readonly universiteService;
    constructor(universiteService: UniversiteService);
    create(createUniversiteDto: CreateUniversiteDto): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    }>;
    findAll(query: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
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
    update(data: {
        id: string;
        updateData: Partial<UpdateUniversiteDto>;
    }): Promise<{
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
    getTopUniversites(limit?: number): Promise<{
        nom: string;
        id: string;
        ville: string;
        adresse: string | null;
        siteWeb: string | null;
    }[]>;
}
