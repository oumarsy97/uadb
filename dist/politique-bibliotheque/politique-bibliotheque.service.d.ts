import { PrismaService } from '../prisma/prisma.service';
import { CreatePolitiqueBibliothequeDto, PolitiqueBibliothequeResponseDto, UpdatePolitiqueBibliothequeDto } from './dto/create-politique-bibliotheque.dto';
export declare class PolitiqueBibliothequeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDto: CreatePolitiqueBibliothequeDto): Promise<PolitiqueBibliothequeResponseDto>;
    findAll(): Promise<PolitiqueBibliothequeResponseDto[]>;
    findOne(id: string): Promise<PolitiqueBibliothequeResponseDto>;
    findByUniversiteId(universiteId: string): Promise<PolitiqueBibliothequeResponseDto>;
    findAllByUniversiteId(universiteId: string): Promise<PolitiqueBibliothequeResponseDto[]>;
    update(id: string, updateDto: UpdatePolitiqueBibliothequeDto): Promise<PolitiqueBibliothequeResponseDto>;
    deactivate(id: string): Promise<PolitiqueBibliothequeResponseDto>;
    remove(id: string): Promise<void>;
    private formatResponse;
}
