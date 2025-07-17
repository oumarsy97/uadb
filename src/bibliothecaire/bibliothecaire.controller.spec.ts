import { Test, TestingModule } from '@nestjs/testing';
import { BibliothecaireController } from './bibliothecaire.controller';
import { BibliothecaireService } from './bibliothecaire.service';

describe('BibliothecaireController', () => {
  let controller: BibliothecaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibliothecaireController],
      providers: [BibliothecaireService],
    }).compile();

    controller = module.get<BibliothecaireController>(BibliothecaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
