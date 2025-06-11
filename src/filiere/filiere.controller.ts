// src/filiere/filiere.controller.ts
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FiliereService } from './filiere.service';
import { CreateFiliereDto } from './dto/create-filiere.dto';
import { UpdateFiliereDto } from './dto/update-filiere.dto';

@Controller()
export class FiliereController {
  private readonly logger = new Logger(FiliereController.name);

  constructor(private readonly filiereService: FiliereService) {}

  @MessagePattern('filiere.create')
  async create(@Payload() createFiliereDto: CreateFiliereDto) {
    try {
      this.logger.log('Création d\'une nouvelle filière');
      const result = await this.filiereService.create(createFiliereDto);
      return {
        success: true,
        data: result,
        message: 'Filière créée avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la création de la filière', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la création de la filière',
      };
    }
  }

  @MessagePattern('filiere.findAll')
  async findAll(@Payload() query: { skip?: number; take?: number; departementId?: string }) {
    try {
      this.logger.log('Récupération de toutes les filières');
      const result = await this.filiereService.findAll(query.departementId, query.skip, query.take);
      const total = await this.filiereService.count(query.departementId);
      
      return {
        success: true,
        data: result,
        meta: {
          total,
          skip: query.skip || 0,
          take: query.take || 10,
          departementId: query.departementId,
        },
        message: 'Filières récupérées avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la récupération des filières', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération des filières',
      };
    }
  }

  @MessagePattern('filiere.findOne')
  async findOne(@Payload() payload: { id: string }) {
    try {
      this.logger.log(`Récupération de la filière avec l'ID: ${payload.id}`);
      const result = await this.filiereService.findOne(payload.id);
      return {
        success: true,
        data: result,
        message: 'Filière récupérée avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de la filière ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération de la filière',
      };
    }
  }

  @MessagePattern('filiere.findByDepartement')
  async findByDepartement(@Payload() payload: { departementId: string }) {
    try {
      this.logger.log(`Récupération des filières du département: ${payload.departementId}`);
      const result = await this.filiereService.findByDepartement(payload.departementId);
      return {
        success: true,
        data: result,
        message: 'Filières récupérées avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des filières du département ${payload.departementId}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération des filières',
      };
    }
  }

  @MessagePattern('filiere.findByNom')
  async findByNom(@Payload() payload: { nom: string }) {
    try {
      this.logger.log(`Récupération de la filière avec le nom: ${payload.nom}`);
      const result = await this.filiereService.findByNom(payload.nom);
      return {
        success: true,
        data: result,
        message: 'Filière récupérée avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de la filière ${payload.nom}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération de la filière',
      };
    }
  }

  @MessagePattern('filiere.update')
  async update(@Payload() payload: { id: string; updateFiliereDto: UpdateFiliereDto }) {
    try {
      this.logger.log(`Mise à jour de la filière avec l'ID: ${payload.id}`);
      const result = await this.filiereService.update(payload.id, payload.updateFiliereDto);
      return {
        success: true,
        data: result,
        message: 'Filière mise à jour avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de la filière ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la mise à jour de la filière',
      };
    }
  }

  @MessagePattern('filiere.remove')
  async remove(@Payload() payload: { id: string }) {
    try {
      this.logger.log(`Suppression de la filière avec l'ID: ${payload.id}`);
      const result = await this.filiereService.remove(payload.id);
      return {
        success: true,
        data: result,
        message: 'Filière supprimée avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la suppression de la filière ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la suppression de la filière',
      };
    }
  }

  @MessagePattern('filiere.search')
  async search(@Payload() payload: { searchTerm: string }) {
    try {
      this.logger.log(`Recherche de filières avec le terme: ${payload.searchTerm}`);
      const result = await this.filiereService.search(payload.searchTerm);
      return {
        success: true,
        data: result,
        message: 'Recherche effectuée avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la recherche de filières', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la recherche de filières',
      };
    }
  }

  @MessagePattern('filiere.count')
  async count(@Payload() payload?: { departementId?: string }) {
    try {
      this.logger.log('Comptage des filières');
      const result = await this.filiereService.count(payload?.departementId);
      return {
        success: true,
        data: { count: result },
        message: 'Comptage effectué avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors du comptage des filières', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors du comptage des filières',
      };
    }
  }
}