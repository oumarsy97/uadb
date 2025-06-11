export declare class CreateCategorieDto {
    libelle: string;
    description?: string;
}
export declare class UpdateCategorieDto {
    libelle?: string;
    description?: string;
}
export declare class CategorieResponseDto {
    id: string;
    libelle: string;
    description?: string;
    dateCreation: Date;
    ressources?: any[];
}
export interface MicroserviceResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    message: string;
    meta?: {
        total?: number;
        skip?: number;
        take?: number;
    };
}
