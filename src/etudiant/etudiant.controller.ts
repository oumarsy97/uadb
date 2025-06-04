import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto, UpdateEtudiantDto, EtudiantQueryDto } from './dto/create-etudiant.dto';
import { NiveauEtudes } from 'generated/prisma';

@Controller()
export class EtudiantController {
  constructor(private readonly etudiantService: EtudiantService) {}

  @MessagePattern('createEtudiant')
  async create(@Payload() createEtudiantDto: CreateEtudiantDto) {
    try {
      console.log('Received createEtudiant request:', createEtudiantDto);
      return await this.etudiantService.create(createEtudiantDto);
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findAllEtudiants')
  async findAll(@Payload() options: { 
    page?: number; 
    limit?: number; 
    search?: string;
    departement?: string;
    faculte?: string;
    niveauEtudes?: NiveauEtudes;
    universiteId?: string;
  }) {
    try {
      return await this.etudiantService.findAll(options);
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findEtudiantById')
  async findOne(@Payload() id: string) {
    try {
      return await this.etudiantService.findOne(id);
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findEtudiantByNumero')
  async findByNumeroEtudiant(@Payload() numeroEtudiant: string) {
    try {
      return await this.etudiantService.findByNumeroEtudiant(numeroEtudiant);
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findEtudiantByUserId')
  async findByUserId(@Payload() userId: string) {
    try {
      return await this.etudiantService.findByUserId(userId);
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('updateEtudiant')
  async update(@Payload() data: { id: string; updateData: UpdateEtudiantDto }) {
    try {
      return await this.etudiantService.update(data.id, data.updateData);
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('removeEtudiant')
  async remove(@Payload() id: string) {
    try {
      return await this.etudiantService.remove(id);
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }


  @MessagePattern('getEtudiantStatistics')
  async getStatistics() {
    try {
      const statistics = await this.etudiantService.getStatistics();
      return {
        success: true,
        data: statistics,
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }
}