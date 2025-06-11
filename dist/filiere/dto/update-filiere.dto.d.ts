import { CreateFiliereDto } from './create-filiere.dto';
declare const UpdateFiliereDto_base: import("@nestjs/common").Type<Partial<CreateFiliereDto>>;
export declare class UpdateFiliereDto extends UpdateFiliereDto_base {
}
export declare class DepartementSummaryDto {
    id: string;
    nom: string;
}
export declare class FiliereResponseDto {
    id: string;
    nom: string;
    description: string | null;
    departementId: string;
}
export declare class FiliereWithDetailsDto extends FiliereResponseDto {
    departement: DepartementSummaryDto;
}
export {};
