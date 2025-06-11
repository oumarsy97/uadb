import { FiliereService } from './filiere.service';
import { CreateFiliereDto } from './dto/create-filiere.dto';
import { UpdateFiliereDto } from './dto/update-filiere.dto';
export declare class FiliereController {
    private readonly filiereService;
    private readonly logger;
    constructor(filiereService: FiliereService);
    create(createFiliereDto: CreateFiliereDto): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            departementId: string;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    findAll(query: {
        skip?: number;
        take?: number;
        departementId?: string;
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            departementId: string;
        }[];
        meta: {
            total: number;
            skip: number;
            take: number;
            departementId: string | undefined;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
        meta?: undefined;
    }>;
    findOne(payload: {
        id: string;
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            departementId: string;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    findByDepartement(payload: {
        departementId: string;
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            departementId: string;
        }[];
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    findByNom(payload: {
        nom: string;
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            departementId: string;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    update(payload: {
        id: string;
        updateFiliereDto: UpdateFiliereDto;
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            departementId: string;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    remove(payload: {
        id: string;
    }): Promise<{
        success: boolean;
        data: {
            message: string;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    search(payload: {
        searchTerm: string;
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            departementId: string;
        }[];
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    count(payload?: {
        departementId?: string;
    }): Promise<{
        success: boolean;
        data: {
            count: number;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
}
