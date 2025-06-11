export declare class CreateUfrDto {
    nom: string;
    description?: string;
    universiteId: string;
}
declare const UpdateUfrDto_base: import("@nestjs/common").Type<Partial<CreateUfrDto>>;
export declare class UpdateUfrDto extends UpdateUfrDto_base {
    nom?: string;
    description?: string;
    universiteId?: string;
}
export declare class UfrResponseDto {
    id: string;
    nom: string;
    description?: string;
    universiteId: string;
    universite?: {
        id: string;
        nom: string;
    };
    departements?: Array<{
        id: string;
        nom: string;
    }>;
}
export declare class PaginatedUfrResponseDto {
    data: UfrResponseDto[];
    total: number;
    page: number;
    totalPages: number;
}
export declare class UfrStatsDto {
    totalUfr: number;
    ufrParUniversite: Array<{
        universite: string;
        count: number;
    }>;
}
export {};
