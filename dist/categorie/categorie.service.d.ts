import { PrismaService } from '../prisma/prisma.service';
import { CreateCategorieDto, UpdateCategorieDto } from './dto/create-categorie.dto';
import { Categorie } from './entities/categorie.entity';
export declare class CategorieService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategorieDto: CreateCategorieDto): Promise<Categorie>;
    findAll(skip?: number, take?: number): Promise<Categorie[]>;
    findOne(id: string): Promise<Categorie>;
    findByLibelle(libelle: string): Promise<Categorie>;
    update(id: string, updateCategorieDto: UpdateCategorieDto): Promise<Categorie>;
    remove(id: string): Promise<Categorie>;
    count(): Promise<number>;
    search(searchTerm: string): Promise<Categorie[]>;
}
