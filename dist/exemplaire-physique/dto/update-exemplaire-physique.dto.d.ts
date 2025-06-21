import { CreateExemplairePhysiqueDto } from './create-exemplaire-physique.dto';
declare const UpdateExemplairePhysiqueDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateExemplairePhysiqueDto>>;
export declare class UpdateExemplairePhysiqueDto extends UpdateExemplairePhysiqueDto_base {
}
import { EtatExemplaire } from 'generated/prisma';
export declare class SearchExemplairePhysiqueDto {
    page?: number;
    limit?: number;
    search?: string;
    etat?: EtatExemplaire;
    disponible?: boolean;
    ressourceId?: string;
    localisation?: string;
    orderBy?: string;
    orderDirection?: 'asc' | 'desc';
}
export {};
