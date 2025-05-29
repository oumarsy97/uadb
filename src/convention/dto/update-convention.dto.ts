import { TypeConvention } from "generated/prisma";

export class UpdateConventionDto {
    dateFin?: Date;
    estActive?: boolean;
    typeConvention?: TypeConvention;
    detailsConvention?: string;
  }