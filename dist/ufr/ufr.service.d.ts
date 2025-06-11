import { PrismaService } from '../prisma/prisma.service';
import { Ufr } from 'generated/prisma';
import { CreateUfrDto } from './dto/create-ufr.dto';
import { UpdateUfrDto } from './dto/update-ufr.dto';
export declare class UfrService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUfrDto: CreateUfrDto): Promise<Ufr>;
    findAll(page?: number, limit?: number): Promise<{
        data: Ufr[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<Ufr>;
    findByUniversite(universiteId: string): Promise<Ufr[]>;
    update(id: string, updateUfrDto: UpdateUfrDto): Promise<Ufr>;
    remove(id: string): Promise<void>;
    search(query: string): Promise<Ufr[]>;
    getStats(): Promise<{
        totalUfr: number;
        ufrParUniversite: Array<{
            universite: string;
            count: number;
        }>;
    }>;
}
