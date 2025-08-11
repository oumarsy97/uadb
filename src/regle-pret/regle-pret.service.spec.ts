import { Test, TestingModule } from '@nestjs/testing';
import { ReglePretService } from './regle-pret.service';

describe('ReglePretService', () => {
  let service: ReglePretService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReglePretService],
    }).compile();

    service = module.get<ReglePretService>(ReglePretService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
