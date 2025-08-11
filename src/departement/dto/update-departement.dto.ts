// src/departement/dto/update-departement.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateDepartementDto } from './create-departement.dto';

export class UpdateDepartementDto extends PartialType(CreateDepartementDto) {}

// src/departement/dto/departement-response.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DepartementResponseDto {
  @ApiProperty({
    description: 'ID unique du département',
    example: 'uuid-dept-123'
  })
  id: string;

  @ApiProperty({
    description: 'Nom du département',
    example: 'Informatique'
  })
  nom: string;

  @ApiPropertyOptional({
    description: 'Description du département',
    example: 'Département spécialisé dans les sciences informatiques'
  })
  description?: string;

  @ApiProperty({
    description: 'ID de l\'UFR parent',
    example: 'uuid-ufr-123'
  })
  ufrId: string;

  @ApiPropertyOptional({
    description: 'Informations de l\'UFR parent'
  })
  ufr?: {
    id: string;
    nom: string;
  };

  @ApiPropertyOptional({
    description: 'Liste des filières du département'
  })
  filieres?: {
    id: string;
    nom: string;
  }[];
}