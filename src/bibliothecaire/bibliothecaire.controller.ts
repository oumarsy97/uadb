import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BibliothecaireService } from './bibliothecaire.service';
import { CreateBibliothecaireDto } from './dto/create-bibliothecaire.dto';
import { UpdateBibliothecaireDto } from './dto/update-bibliothecaire.dto';

@Controller()
export class BibliothecaireController {
  constructor(private readonly bibliothecaireService: BibliothecaireService) {}

  @MessagePattern('createBibliothecaire')
  create(@Payload() createBibliothecaireDto: CreateBibliothecaireDto) {
    return this.bibliothecaireService.create(createBibliothecaireDto);
  }

  @MessagePattern('findAllBibliothecaire')
  findAll( @Payload() options: { page?: number; limit?: number; search?: string } = {}) {
    return this.bibliothecaireService.findAll(options);
  }

  @MessagePattern('findOneBibliothecaire')
  findOne(@Payload() id: string) {
    return this.bibliothecaireService.findOne(id);
  }

  @MessagePattern('updateBibliothecaire')
  update(@Payload() updateBibliothecaireDto: UpdateBibliothecaireDto) {
    return this.bibliothecaireService.update(updateBibliothecaireDto.id, updateBibliothecaireDto);
  }

  @MessagePattern('removeBibliothecaire')
  remove(@Payload() id: string) {
    return this.bibliothecaireService.remove(id);
  }
}
