import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministrateurService } from './administrateur.service';
import { CreateAdministrateurDto } from './dto/create-administrateur.dto';
import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';
import { CreateUtilisateurDto } from 'src/users/dto/create-utilisateur.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('administrateur')
export class AdministrateurController {
  constructor(private readonly administrateurService: AdministrateurService) {}
@MessagePattern('createAdministrateur')
  async createAdministrateur(createAdministrateurDto: CreateUtilisateurDto) {
    return this.administrateurService.create(createAdministrateurDto);
  }
 

  @MessagePattern('findAllAdministrateurs')
  async findAll(@Payload() options: { page?: number; limit?: number; search?: string }) {
    return this.administrateurService.findAll(options);
  }

  @MessagePattern('findAdministrateurById')
  async findOne(@Payload() id: string) {
    return this.administrateurService.findOne(id);
  }

  @MessagePattern('updateAdministrateur')
  async update(@Payload() data: { id: string; updateData: Partial<UpdateAdministrateurDto> }) {
    return this.administrateurService.update(data.id, data.updateData);
  }

  @MessagePattern('removeAdministrateur')
  async remove(@Payload() id: string) {
    return this.administrateurService.remove(id);
  }
}
