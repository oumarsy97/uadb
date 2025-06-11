import { PrismaService } from '../prisma/prisma.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Departement } from 'generated/prisma';
export declare class DepartementService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDepartementDto: CreateDepartementDto): Promise<Departement>;
    findAll(ufrId?: string): Promise<Departement[]>;
    findOne(id: string): Promise<Departement>;
    update(id: string, updateDepartementDto: UpdateDepartementDto): Promise<Departement>;
    remove(id: string): Promise<{
        message: string;
    }>;
    findByUfr(ufrId: string): Promise<Departement[]>;
    findByNom(nom: string): Promise<Departement>;
    search(searchTerm: string): Promise<Departement[]>;
    count(ufrId?: string): Promise<number>;
}
