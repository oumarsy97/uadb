import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';

@Controller()
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @MessagePattern('createUtilisateur')
  async create(@Payload() createUtilisateurDto: CreateUtilisateurDto) {
    return this.utilisateursService.create(createUtilisateurDto);
  }

  @MessagePattern('findAllUtilisateurs')
  async findAll() {
    return this.utilisateursService.findAll();
  }

  @MessagePattern('findUtilisateurById')
  async findOne(@Payload() id: string) {
    return this.utilisateursService.findOne(id);
  }

  @MessagePattern('findUtilisateurByEmail')
  async findByEmail(@Payload() email: string) {
    return this.utilisateursService.findByEmail(email);
  }

  @MessagePattern('updateUtilisateur')
  async update(@Payload() data: { id: string; updateData: Partial<CreateUtilisateurDto> }) {
    return this.utilisateursService.update(data.id, data.updateData);
  }

  @MessagePattern('removeUtilisateur')
  async remove(@Payload() id: string) {
    return this.utilisateursService.remove(id);
  }

  @MessagePattern('updateDerniereConnexion')
  async updateDerniereConnexion(@Payload() data: { id: string }) {
    return this.utilisateursService.update(data.id, { 
      derniereConnexion: new Date() 
    } as any);
  }
}