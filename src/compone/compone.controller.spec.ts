import { Test, TestingModule } from '@nestjs/testing';
import { ComponeController } from './compone.controller';
import { ComponeService } from './compone.service';

describe('ComponeController', () => {
  let controller: ComponeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponeController],
      providers: [ComponeService],
    }).compile();

    controller = module.get<ComponeController>(ComponeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
