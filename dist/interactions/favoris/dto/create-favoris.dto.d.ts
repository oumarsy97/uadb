export declare class CreateFavorisDto {
    userId?: string;
    ressourceId: string;
    universiteRess?: string;
    universiteUser?: string;
}
export declare class UpdateFavorisDto {
    universiteRess?: string;
    universiteUser?: string;
    id: string;
}
export declare class FavorisQueryDto {
    userId?: string;
    ressourceId?: string;
    universiteRess?: string;
    universiteUser?: string;
}
export declare class FavorisResponseDto {
    id: string;
    userId: string;
    ressourceId: string;
    universiteRess?: string;
    universiteUser?: string;
    isRessourceExternal: boolean;
    isUserExternal: boolean;
    ressourceInfo?: {
        id: string;
        title?: string;
        isExternal: boolean;
        universite?: string;
    };
    userInfo?: {
        id: string;
        email?: string;
        isExternal: boolean;
        universite?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare class MesFavorisResponseDto {
    favorisLocaux: Array<{
        id: string;
        userId: string;
        ressourceId: string;
        universiteRess?: string;
        universiteUser?: string;
        isLocal: boolean;
        sourceUniversite: string | null;
        ressource?: any;
        user?: any;
        createdAt: Date;
        updatedAt: Date;
    }>;
    favorisExternes: Array<{
        id: string;
        userId: string;
        ressourceId: string;
        universiteRess?: string;
        universiteUser?: string;
        isLocal: boolean;
        sourceUniversite: string;
        ressourceExterne: {
            id: string;
            universiteSource: string;
        };
        createdAt: Date;
        updatedAt: Date;
    }>;
    total: number;
}
export declare class IsFavoriteResponseDto {
    isFavorite: boolean;
    ressourceId: string;
    userId: string;
}
