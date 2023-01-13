import { Test, TestingModule } from '@nestjs/testing';
import { AcaService } from './aca.service';

describe('AcaService', () => {
  let service: AcaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcaService],
    }).compile();

    service = module.get<AcaService>(AcaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
