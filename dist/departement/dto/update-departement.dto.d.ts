import { CreateDepartementDto } from './create-departement.dto';
declare const UpdateDepartementDto_base: import("@nestjs/common").Type<Partial<CreateDepartementDto>>;
export declare class UpdateDepartementDto extends UpdateDepartementDto_base {
}
export declare class DepartementResponseDto {
    id: string;
    nom: string;
    description?: string;
    ufrId: string;
    ufr?: {
        id: string;
        nom: string;
    };
    filieres?: {
        id: string;
        nom: string;
    }[];
}
export {};
