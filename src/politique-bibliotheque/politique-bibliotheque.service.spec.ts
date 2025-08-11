import { Test, TestingModule } from '@nestjs/testing';
import { PolitiqueBibliothequeService } from './politique-bibliotheque.service';

describe('PolitiqueBibliothequeService', () => {
  let service: PolitiqueBibliothequeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolitiqueBibliothequeService],
    }).compile();

    service = module.get<PolitiqueBibliothequeService>(PolitiqueBibliothequeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
