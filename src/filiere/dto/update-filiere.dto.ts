// src/filiere/dto/update-filiere.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateFiliereDto } from './create-filiere.dto';

export class UpdateFiliereDto extends PartialType(CreateFiliereDto) {}

// src/filiere/dto/filiere-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class DepartementSummaryDto {
  @ApiProperty({
    description: 'ID du département',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Nom du département',
    example: 'Département d\'Informatique',
  })
  nom: string;
}

export class FiliereResponseDto {
  @ApiProperty({
    description: 'ID unique de la filière',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Nom de la filière',
    example: 'Informatique',
  })
  nom: string;

  @ApiProperty({
    description: 'Description de la filière',
    example: 'Filière spécialisée dans les sciences informatiques',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    description: 'ID du département',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  departementId: string;
}

export class FiliereWithDetailsDto extends FiliereResponseDto {
  @ApiProperty({
    description: 'Informations du département',
    type: DepartementSummaryDto,
  })
  departement: DepartementSummaryDto;
}
