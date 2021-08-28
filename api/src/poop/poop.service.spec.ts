import { Test, TestingModule } from '@nestjs/testing';
import { PoopService } from './poop.service';

describe('PoopService', () => {
  let service: PoopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoopService],
    }).compile();

    service = module.get<PoopService>(PoopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
