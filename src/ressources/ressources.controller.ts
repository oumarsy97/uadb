// ressources.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RessourcesService } from './ressources.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';

@Controller()
export class RessourcesController {
  constructor(private readonly ressourcesService: RessourcesService) {}

  @MessagePattern('createRessource')
  async create(@Payload() createRessourceDto: CreateRessourceDto) {
    try {
        console.log('ressource',createRessourceDto)
      return await this.ressourcesService.create(createRessourceDto);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findAllRessources')
  async findAll(@Payload() options: SearchRessourceDto = {}) {
    try {
      return await this.ressourcesService.findAll(options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findRessourceById')
  async findOne(@Payload() id: string) {
    try {
      return await this.ressourcesService.findOne(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('updateRessource')
  async update(@Payload() data: { id: string; updateData: UpdateRessourceDto }) {
    try {
      return await this.ressourcesService.update(data.id, data.updateData);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('removeRessource')
  async remove(@Payload() id: string) {
    try {
      return await this.ressourcesService.remove(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findRessourcesByAuteur')
  async findByAuteur(@Payload() data: { auteurId: string; options?: SearchRessourceDto }) {
    try {
      return await this.ressourcesService.findByAuteur(data.auteurId, data.options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findRessourcesByUniversite')
  async findByUniversite(@Payload() data: { universiteId: string; options?: SearchRessourceDto }) {
    try {
      return await this.ressourcesService.findByUniversite(data.universiteId, data.options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('toggleValidationRessource')
  async toggleValidation(@Payload() id: string) {
    try {
      return await this.ressourcesService.toggleValidation(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('toggleArchivageRessource')
  async toggleArchivage(@Payload() id: string) {
    try {
      return await this.ressourcesService.toggleArchivage(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('enregistrerAccesRessource')
  async enregistrerAcces(@Payload() data: { 
    userId: string; 
    ressourceId: string; 
    typeAcces: 'CONSULTATION' | 'TELECHARGEMENT' | 'CITATION' | 'PARTAGE';
    ipAcces: string;
    universiteSrc?: string;
  }) {
    try {
      return await this.ressourcesService.enregistrerAcces(data);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }
}