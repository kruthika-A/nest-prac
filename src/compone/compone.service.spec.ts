import { Test, TestingModule } from '@nestjs/testing';
import { ComponeService } from './compone.service';

describe('ComponeService', () => {
  let service: ComponeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponeService],
    }).compile();

    service = module.get<ComponeService>(ComponeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
