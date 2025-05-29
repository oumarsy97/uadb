import { TypeConvention } from "generated/prisma";
export declare class CreateConventionDto {
    universiteId1: string;
    universiteId2: string;
    dateDebut: Date;
    dateFin?: Date;
    typeConvention?: TypeConvention;
    detailsConvention?: string;
}
