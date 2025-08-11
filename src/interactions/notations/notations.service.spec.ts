import { Test, TestingModule } from '@nestjs/testing';
import { NotationsService } from './notations.service';

describe('NotationsService', () => {
  let service: NotationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotationsService],
    }).compile();

    service = module.get<NotationsService>(NotationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
