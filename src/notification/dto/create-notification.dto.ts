// src/dto/notification.dto.ts
import { IsString, IsBoolean, IsEnum, IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TypeNotification } from 'generated/prisma'; // Import de l'enum Prisma

export class CreateNotificationDto {
  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsString()
  titre: string;

  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty({ enum: TypeNotification })
  @IsEnum(TypeNotification)
  typeNotification: TypeNotification;
}

export class UpdateNotificationDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  titre?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  message?: string;



  @ApiProperty({ enum: TypeNotification, required: false })
  @IsOptional()
  @IsEnum(TypeNotification)
  typeNotification?: TypeNotification;
}

export class NotificationResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  titre: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  dateCreation: Date;

  @ApiProperty()
  estLue: boolean;

  @ApiProperty({ enum: TypeNotification })
  typeNotification: TypeNotification;
}