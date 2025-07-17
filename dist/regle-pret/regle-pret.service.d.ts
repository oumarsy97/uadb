import { PrismaService } from '../prisma/prisma.service';
import { RoleUser } from 'generated/prisma';
import { CreateReglePretDto, ReglePretResponseDto, UpdateReglePretDto } from './dto/create-regle-pret.dto';
export declare class ReglePretService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDto: CreateReglePretDto): Promise<ReglePretResponseDto>;
    findAll(page?: number, limit?: number, search?: string): Promise<ReglePretResponseDto[]>;
    findOne(id: string): Promise<ReglePretResponseDto>;
    findByUniversiteId(universiteId: string): Promise<ReglePretResponseDto[]>;
    findByUniversiteAndRole(universiteId: string, roleUtilisateur: RoleUser): Promise<ReglePretResponseDto>;
    findActiveRegles(): Promise<ReglePretResponseDto[]>;
    findInactiveRegles(): Promise<ReglePretResponseDto[]>;
    update(id: string, updateDto: UpdateReglePretDto): Promise<ReglePretResponseDto>;
    activate(id: string): Promise<ReglePretResponseDto>;
    deactivate(id: string): Promise<ReglePretResponseDto>;
    remove(id: string): Promise<void>;
    private formatResponse;
}
