import { PolitiqueBibliothequeService } from './politique-bibliotheque.service';
import { CreatePolitiqueBibliothequeDto } from './dto/create-politique-bibliotheque.dto';
import { UpdatePolitiqueBibliothequeDto } from './dto/update-politique-bibliotheque.dto';
export declare class PolitiqueBibliothequeController {
    private readonly politiqueBibliothequeService;
    constructor(politiqueBibliothequeService: PolitiqueBibliothequeService);
    create(createPolitiqueBibliothequeDto: CreatePolitiqueBibliothequeDto): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto>;
    findAll(query?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto[]>;
    findOne(id: string): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto>;
    findByUniversiteId(universiteId: string): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto>;
    findAllByUniversiteId(universiteId: string): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto[]>;
    update(data: {
        id: string;
        updateData: UpdatePolitiqueBibliothequeDto;
    }): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto>;
    remove(id: string): Promise<void>;
    findActivePolitiques(): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto[]>;
    findInactivePolitiques(): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto[]>;
    activatePolitique(id: string): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto>;
    deactivatePolitique(id: string): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto>;
    toggleStatus(id: string): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto>;
    getPolitiqueByFirstUniversiteId(): Promise<import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto>;
    validatePolitique(id: string): Promise<{
        exists: boolean;
        isActive: boolean;
        politique: import("./dto/create-politique-bibliotheque.dto").PolitiqueBibliothequeResponseDto;
    }>;
}
