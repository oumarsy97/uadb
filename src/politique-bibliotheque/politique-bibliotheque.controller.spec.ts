import { Test, TestingModule } from '@nestjs/testing';
import { PolitiqueBibliothequeController } from './politique-bibliotheque.controller';
import { PolitiqueBibliothequeService } from './politique-bibliotheque.service';

describe('PolitiqueBibliothequeController', () => {
  let controller: PolitiqueBibliothequeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolitiqueBibliothequeController],
      providers: [PolitiqueBibliothequeService],
    }).compile();

    controller = module.get<PolitiqueBibliothequeController>(PolitiqueBibliothequeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
