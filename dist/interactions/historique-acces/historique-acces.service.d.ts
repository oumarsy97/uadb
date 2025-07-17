import { TypeAcces, HistoriqueAcces } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class HistoriqueAccesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    enregistrerAcces(userId: string, ressourceId: string, typeacces: TypeAcces, universiteRess: string): Promise<HistoriqueAcces>;
    getHistoriqueUtilisateur(userId: string, limit?: number): Promise<HistoriqueAcces[]>;
    getHistoriqueRessource(ressourceId: string, isExternal?: boolean, limit?: number): Promise<HistoriqueAcces[]>;
    compterAcces(ressourceId: string, isExternal?: boolean, typeAcces?: TypeAcces): Promise<number>;
    findRecentAcces(options?: {
        limit?: number;
    }): Promise<HistoriqueAcces[]>;
}
