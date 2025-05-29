import { TypeConvention } from "generated/prisma";

// convention/dto/create-convention.dto.ts
export class CreateConventionDto {
    universiteId1: string;
    universiteId2: string;
    dateDebut: Date;
    dateFin?: Date;
    typeConvention?: TypeConvention;
    detailsConvention?: string;
  }
