import { ReglePretService } from './regle-pret.service';
import { CreateReglePretDto, UpdateReglePretDto } from './dto/create-regle-pret.dto';
import { RoleUser } from 'generated/prisma';
export declare class ReglePretController {
    private readonly reglePretService;
    constructor(reglePretService: ReglePretService);
    create(createReglePretDto: CreateReglePretDto): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto>;
    findAll(query?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto[]>;
    findOne(id: string): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto>;
    findByUniversiteId(universiteId: string): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto[]>;
    findByUniversiteAndRole(data: {
        universiteId: string;
        roleUtilisateur: RoleUser;
    }): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto>;
    update(data: {
        id: string;
        updateData: UpdateReglePretDto;
    }): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto>;
    remove(id: string): Promise<void>;
    findActiveRegles(): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto[]>;
    findInactiveRegles(): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto[]>;
    activateRegle(id: string): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto>;
    deactivateRegle(id: string): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto>;
    toggleStatus(id: string): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto>;
    validateRegle(id: string): Promise<{
        exists: boolean;
        isActive: boolean;
        regle: import("./dto/create-regle-pret.dto").ReglePretResponseDto;
    }>;
    getRegleByRole(roleUtilisateur: RoleUser): Promise<import("./dto/create-regle-pret.dto").ReglePretResponseDto[]>;
}
