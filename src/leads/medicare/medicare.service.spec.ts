import { Test, TestingModule } from '@nestjs/testing';
import { MedicareService } from './medicare.service';

describe('MedicareService', () => {
  let service: MedicareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicareService],
    }).compile();

    service = module.get<MedicareService>(MedicareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
