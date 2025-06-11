import { CategorieService } from './categorie.service';
import { CreateCategorieDto, UpdateCategorieDto } from './dto/create-categorie.dto';
export declare class CategorieController {
    private readonly categorieService;
    private readonly logger;
    constructor(categorieService: CategorieService);
    create(createCategorieDto: CreateCategorieDto): Promise<{
        success: boolean;
        data: import("./entities/categorie.entity").Categorie;
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
        data: import("./entities/categorie.entity").Categorie[];
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
        data: import("./entities/categorie.entity").Categorie;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message: string;
        data?: undefined;
    }>;
    findByLibelle(payload: {
        libelle: string;
    }): Promise<{
        success: boolean;
        data: import("./entities/categorie.entity").Categorie;
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
        updateCategorieDto: UpdateCategorieDto;
    }): Promise<{
        success: boolean;
        data: import("./entities/categorie.entity").Categorie;
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
        data: import("./entities/categorie.entity").Categorie;
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
        data: import("./entities/categorie.entity").Categorie[];
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
