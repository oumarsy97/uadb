import { IsString, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDepartementDto {
  @ApiProperty({
    description: 'Nom du département',
    example: 'Informatique'
  })
  @IsString()
  @IsNotEmpty()
  nom: string;

  @ApiPropertyOptional({
    description: 'Description du département',
    example: 'Département spécialisé dans les sciences informatiques'
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'ID de l\'UFR parent',
    example: 'uuid-ufr-123'
  })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  ufrId: string;
}
export class UpdateDepartementDto {
  @ApiPropertyOptional({
    description: 'Nom du département',
    example: 'Informatique'
  })
  @IsString()
  @IsOptional()
  nom?: string;

  @ApiPropertyOptional({
    description: 'Description du département',
    example: 'Département spécialisé dans les sciences informatiques'
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'ID de l\'UFR parent',
    example: 'uuid-ufr-123'
  })
  @IsString()
  @IsUUID()
  @IsOptional()
  ufrId?: string;

  @ApiPropertyOptional({
    description: 'Responsable du département',
    example: 'Jean Dupont'
  })
  @IsString()
  @IsOptional()
  responsable?: string;
}