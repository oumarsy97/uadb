import { DepartementService } from './departement.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
export declare class DepartementController {
    private readonly departementService;
    private readonly logger;
    constructor(departementService: DepartementService);
    create(createDepartementDto: CreateDepartementDto): Promise<{
        success: boolean;
        data: {
            nom: string;
            description: string | null;
            id: string;
            ufrId: string;
            responsable: string | null;
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
        ufrId?: string;
    }): Promise<{
        success: boolean;
        data: {
            nom: string;
            description: string | null;
            id: string;
            ufrId: string;
            responsable: string | null;
        }[];
        meta: {
            total: number;
            skip: number;
            take: number;
            ufrId: string | undefined;
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
            nom: string;
            description: string | null;
            id: string;
            ufrId: string;
            responsable: string | null;
        };
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    findByUfr(payload: {
        ufrId: string;
    }): Promise<{
        success: boolean;
        data: {
            nom: string;
            description: string | null;
            id: string;
            ufrId: string;
            responsable: string | null;
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
            nom: string;
            description: string | null;
            id: string;
            ufrId: string;
            responsable: string | null;
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
        updateDepartementDto: UpdateDepartementDto;
    }): Promise<{
        success: boolean;
        data: {
            nom: string;
            description: string | null;
            id: string;
            ufrId: string;
            responsable: string | null;
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
            nom: string;
            description: string | null;
            id: string;
            ufrId: string;
            responsable: string | null;
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
        ufrId?: string;
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
