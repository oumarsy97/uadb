import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EnseignantService } from './enseignant.service';
import { CreateEnseignantDto } from './dto/create-enseignant.dto';
import { UpdateEnseignantDto } from './dto/update-enseignant.dto';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class EnseignantController {
  constructor(private readonly enseignantService: EnseignantService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Extrait l'ID utilisateur depuis le token JWT
   * @param token - Le token JWT
   * @returns L'ID de l'utilisateur
   */
  private extractUserIdFromToken(token: string): string {
    try {
      // Enlever le préfixe "Bearer " s'il existe
      const cleanToken = token.replace(/^Bearer\s+/, '');
      
      // Décoder le token
      const payload = this.jwtService.decode(cleanToken) as any;
      
      if (!payload || !payload.sub && !payload.id && !payload.userId) {
        throw new Error('Token invalide: ID utilisateur non trouvé');
      }
      
      // Retourner l'ID utilisateur (peut être dans sub, id, ou userId selon votre implémentation)
      return payload.sub || payload.id || payload.userId;
    } catch (error) {
      throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
    }
  }

  @MessagePattern('createEnseignant')
  create(@Payload() createEnseignantDto: CreateEnseignantDto) {
    return this.enseignantService.create(createEnseignantDto);
  }
  @MessagePattern('findRessourcesByEnseignantId')
  findRessourcesByEnseignantId(@Payload() data: { token: string,limit?: number, page?: number, search?: string }) {
    const enseignantId = this.extractUserIdFromToken(data.token);
    return this.enseignantService.findRessourcesByEnseignantId(enseignantId, {
      limit: data.limit,
      page: data.page,
      search: data.search
    });
  }

  @MessagePattern('findAllEnseignants')
  findAll(@Payload() options: { page?: number; limit?: number; search?: string }) {
    return this.enseignantService.findAll(options);
  }

  @MessagePattern('findOneEnseignant')
  findOne(@Payload() id: string) {
    return this.enseignantService.findOne(id);
  }

  @MessagePattern('updateEnseignant')
  update(@Payload() updateEnseignantDto: UpdateEnseignantDto) {
    return this.enseignantService.update(updateEnseignantDto.id, updateEnseignantDto);
  }

  @MessagePattern('removeEnseignant')
  remove(@Payload() id: string) {
    return this.enseignantService.remove(id);
  }
}