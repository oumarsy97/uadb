// controller/politique-bibliotheque.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PolitiqueBibliothequeService } from './politique-bibliotheque.service';
import { CreatePolitiqueBibliothequeDto } from './dto/create-politique-bibliotheque.dto';
import { UpdatePolitiqueBibliothequeDto } from './dto/update-politique-bibliotheque.dto';

@Controller()
export class PolitiqueBibliothequeController {
  constructor(private readonly politiqueBibliothequeService: PolitiqueBibliothequeService) {}

  @MessagePattern('createPolitiqueBibliotheque')
  async create(@Payload() createPolitiqueBibliothequeDto: CreatePolitiqueBibliothequeDto) {
    return this.politiqueBibliothequeService.create(createPolitiqueBibliothequeDto);
  }

  @MessagePattern('findAllPolitiquesBibliotheque')
  async findAll(@Payload() query?: { page?: number; limit?: number; search?: string }) {
    // Si vous voulez implémenter la pagination plus tard, vous pouvez l'ajouter dans le service
    return this.politiqueBibliothequeService.findAll();
  }

  @MessagePattern('findPolitiqueBibliothequeById')
  async findOne(@Payload() id: string) {
    return this.politiqueBibliothequeService.findOne(id);
  }

  @MessagePattern('findPolitiqueBibliothequeByUniversiteId')
  async findByUniversiteId(@Payload() universiteId: string) {
    return this.politiqueBibliothequeService.findByUniversiteId(universiteId);
  }

  @MessagePattern('findAllPolitiquesBibliothequeByUniversiteId')
  async findAllByUniversiteId(@Payload() universiteId: string) {
    return this.politiqueBibliothequeService.findAllByUniversiteId(universiteId);
  }

  @MessagePattern('updatePolitiqueBibliotheque')
  async update(@Payload() data: { id: string; updateData: UpdatePolitiqueBibliothequeDto }) {
    const { id, updateData } = data;
    return this.politiqueBibliothequeService.update(id, updateData);
  }

  @MessagePattern('removePolitiqueBibliotheque')
  async remove(@Payload() id: string) {
    return this.politiqueBibliothequeService.remove(id);
  }

  @MessagePattern('findActivePolitiquesBibliotheque')
  async findActivePolitiques() {
    const allPolitiques = await this.politiqueBibliothequeService.findAll();
    return allPolitiques.filter(politique => politique.estActive);
  }

  @MessagePattern('findInactivePolitiquesBibliotheque')
  async findInactivePolitiques() {
    const allPolitiques = await this.politiqueBibliothequeService.findAll();
    return allPolitiques.filter(politique => !politique.estActive);
  }

  @MessagePattern('activatePolitiqueBibliotheque')
  async activatePolitique(@Payload() id: string) {
    return this.politiqueBibliothequeService.update(id, { estActive: true });
  }

  @MessagePattern('deactivatePolitiqueBibliotheque')
  async deactivatePolitique(@Payload() id: string) {
    return this.politiqueBibliothequeService.deactivate(id);
  }

  @MessagePattern('togglePolitiqueBibliothequeStatus')
  async toggleStatus(@Payload() id: string) {
    // Cette méthode bascule entre actif/inactif
    const politique = await this.politiqueBibliothequeService.findOne(id);
    if (!politique) {
      throw new Error('Politique de bibliothèque non trouvée');
    }
    
    if (politique.estActive) {
      return this.politiqueBibliothequeService.deactivate(id);
    } else {
      return this.politiqueBibliothequeService.update(id, { estActive: true });
    }
  }

  @MessagePattern('getPolitiqueBibliothequeByFirstUniversiteId')
  async getPolitiqueByFirstUniversiteId() {
    // Cette méthode récupère la politique de la première université (1er ID)
    // Vous pouvez ajuster selon vos besoins
    const allPolitiques = await this.politiqueBibliothequeService.findAll();
    if (allPolitiques.length === 0) {
      throw new Error('Aucune politique de bibliothèque trouvée');
    }
    
    // Retourner la première politique trouvée
    return allPolitiques[0];
  }

  @MessagePattern('validatePolitiqueBibliotheque')
  async validatePolitique(@Payload() id: string) {
    // Méthode pour valider qu'une politique existe et est active
    const politique = await this.politiqueBibliothequeService.findOne(id);
    return {
      exists: !!politique,
      isActive: politique?.estActive || false,
      politique: politique
    };
  }
}