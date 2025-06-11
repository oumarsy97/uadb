import { PrismaService } from '../prisma/prisma.service';
import { CreateFiliereDto } from './dto/create-filiere.dto';
import { UpdateFiliereDto } from './dto/update-filiere.dto';
import { Filiere } from 'generated/prisma';
export declare class FiliereService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFiliereDto: CreateFiliereDto): Promise<Filiere>;
    findAll(departementId?: string, skip?: number, take?: number): Promise<Filiere[]>;
    findOne(id: string): Promise<Filiere>;
    update(id: string, updateFiliereDto: UpdateFiliereDto): Promise<Filiere>;
    remove(id: string): Promise<{
        message: string;
    }>;
    findByDepartement(departementId: string): Promise<Filiere[]>;
    findByNom(nom: string): Promise<Filiere>;
    search(searchTerm: string): Promise<Filiere[]>;
    count(departementId?: string): Promise<number>;
}
