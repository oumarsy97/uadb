import { HistoriqueAccesService } from './historique-acces.service';
import { TypeAcces } from 'generated/prisma';
import { JwtService } from '@nestjs/jwt';
interface EnregistrerAccesDto {
    userId: string;
    ressourceId: string;
    typeacces: TypeAcces;
    universiteRess: string;
}
interface GetHistoriqueUtilisateurDto {
    userId: string;
    limit?: number;
}
interface GetHistoriqueRessourceDto {
    ressourceId: string;
    isExternal?: boolean;
    limit?: number;
}
interface CompterAccesDto {
    ressourceId: string;
    isExternal?: boolean;
    typeAcces?: TypeAcces;
}
export declare class HistoriqueAccesController {
    private readonly historiqueAccesService;
    private readonly jwtService;
    constructor(historiqueAccesService: HistoriqueAccesService, jwtService: JwtService);
    private extractUserIdFromToken;
    enregistrerAcces(data: {
        enregistrerAccesDto: EnregistrerAccesDto;
        token: string;
    }): Promise<{
        id: string;
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        typeAcces: import("generated/prisma").$Enums.TypeAcces;
        universiteRess: string;
        externRessourceId: string | null;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    getHistoriqueUtilisateur(data: {
        historiqueDto: GetHistoriqueUtilisateurDto;
        token: string;
    }): Promise<{
        id: string;
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        typeAcces: import("generated/prisma").$Enums.TypeAcces;
        universiteRess: string;
        externRessourceId: string | null;
    }[] | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    getHistoriqueRessource(data: {
        historiqueRessourceDto: GetHistoriqueRessourceDto;
        token?: string;
    }): Promise<{
        id: string;
        ressourceId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        typeAcces: import("generated/prisma").$Enums.TypeAcces;
        universiteRess: string;
        externRessourceId: string | null;
    }[] | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    compterAcces(data: {
        compterAccesDto: CompterAccesDto;
        token?: string;
    }): Promise<number | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
    getStatistiquesUtilisateur(data: {
        userId?: string;
        token: string;
    }): Promise<{
        totalAcces: number;
        ressourcesInternes: number;
        ressourcesExternes: number;
        typesAcces: Record<import("generated/prisma").$Enums.TypeAcces, number>;
        universites: Record<string, number>;
    } | {
        error: boolean;
        message: any;
        statusCode: any;
    }>;
}
export {};
