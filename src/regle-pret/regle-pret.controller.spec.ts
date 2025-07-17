import { Test, TestingModule } from '@nestjs/testing';
import { ReglePretController } from './regle-pret.controller';
import { ReglePretService } from './regle-pret.service';

describe('ReglePretController', () => {
  let controller: ReglePretController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReglePretController],
      providers: [ReglePretService],
    }).compile();

    controller = module.get<ReglePretController>(ReglePretController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
