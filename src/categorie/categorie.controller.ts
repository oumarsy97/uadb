import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategorieService } from './categorie.service';
import { CreateCategorieDto, UpdateCategorieDto } from './dto/create-categorie.dto';

@Controller()
export class CategorieController {
  private readonly logger = new Logger(CategorieController.name);

  constructor(private readonly categorieService: CategorieService) {}

  @MessagePattern('categorie.create')
  async create(@Payload() createCategorieDto: CreateCategorieDto) {
    try {
      this.logger.log('Création d\'une nouvelle catégorie');
      const result = await this.categorieService.create(createCategorieDto);
      return {
        success: true,
        data: result,
        message: 'Catégorie créée avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la création de la catégorie', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la création de la catégorie',
      };
    }
  }

  @MessagePattern('categorie.findAll')
  async findAll(@Payload() query: { skip?: number; take?: number }) {
    try {
      this.logger.log('Récupération de toutes les catégories');
      const result = await this.categorieService.findAll(query.skip, query.take);
      const total = await this.categorieService.count();
      
      return {
        success: true,
        data: result,
        meta: {
          total,
          skip: query.skip || 0,
          take: query.take || 10,
        },
        message: 'Catégories récupérées avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la récupération des catégories', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération des catégories',
      };
    }
  }

  @MessagePattern('categorie.findOne')
  async findOne(@Payload() payload: { id: string }) {
    try {
      this.logger.log(`Récupération de la catégorie avec l'ID: ${payload.id}`);
      const result = await this.categorieService.findOne(payload.id);
      return {
        success: true,
        data: result,
        message: 'Catégorie récupérée avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de la catégorie ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération de la catégorie',
      };
    }
  }

  @MessagePattern('categorie.findByLibelle')
  async findByLibelle(@Payload() payload: { libelle: string }) {
    try {
      this.logger.log(`Récupération de la catégorie avec le libellé: ${payload.libelle}`);
      const result = await this.categorieService.findByLibelle(payload.libelle);
      return {
        success: true,
        data: result,
        message: 'Catégorie récupérée avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de la catégorie ${payload.libelle}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération de la catégorie',
      };
    }
  }

  @MessagePattern('categorie.update')
  async update(@Payload() payload: { id: string; updateCategorieDto: UpdateCategorieDto }) {
    try {
      this.logger.log(`Mise à jour de la catégorie avec l'ID: ${payload.id}`);
      const result = await this.categorieService.update(payload.id, payload.updateCategorieDto);
      return {
        success: true,
        data: result,
        message: 'Catégorie mise à jour avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de la catégorie ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la mise à jour de la catégorie',
      };
    }
  }

  @MessagePattern('categorie.remove')
  async remove(@Payload() payload: { id: string }) {
    try {
      this.logger.log(`Suppression de la catégorie avec l'ID: ${payload.id}`);
      const result = await this.categorieService.remove(payload.id);
      return {
        success: true,
        data: result,
        message: 'Catégorie supprimée avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la suppression de la catégorie ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la suppression de la catégorie',
      };
    }
  }

  @MessagePattern('categorie.search')
  async search(@Payload() payload: { searchTerm: string }) {
    try {
      this.logger.log(`Recherche de catégories avec le terme: ${payload.searchTerm}`);
      const result = await this.categorieService.search(payload.searchTerm);
      return {
        success: true,
        data: result,
        message: 'Recherche effectuée avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la recherche de catégories', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la recherche de catégories',
      };
    }
  }

  @MessagePattern('categorie.count')
  async count() {
    try {
      this.logger.log('Comptage des catégories');
      const result = await this.categorieService.count();
      return {
        success: true,
        data: { count: result },
        message: 'Comptage effectué avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors du comptage des catégories', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors du comptage des catégories',
      };
    }
  }
}