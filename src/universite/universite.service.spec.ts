import { Test, TestingModule } from '@nestjs/testing';
import { UniversiteService } from './universite.service';

describe('UniversiteService', () => {
  let service: UniversiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversiteService],
    }).compile();

    service = module.get<UniversiteService>(UniversiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
