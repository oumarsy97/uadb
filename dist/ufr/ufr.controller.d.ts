import { UfrService } from './ufr.service';
import { CreateUfrDto, UpdateUfrDto } from './dto/create-ufr.dto';
export declare class UfrController {
    private readonly ufrService;
    private readonly logger;
    constructor(ufrService: UfrService);
    create(createUfrDto: CreateUfrDto): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            universiteId: string;
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
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            universiteId: string;
        }[];
        meta: {
            total: number;
            skip: number;
            take: number;
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
            universiteId: string;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    findByUniversite(payload: {
        universiteId: string;
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            universiteId: string;
        }[];
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
        updateUfrDto: UpdateUfrDto;
    }): Promise<{
        success: boolean;
        data: {
            id: string;
            nom: string;
            description: string | null;
            universiteId: string;
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
        data: void;
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
            universiteId: string;
        }[];
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    count(): Promise<{
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
