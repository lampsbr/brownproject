import { Module } from '@nestjs/common';
import { PoopController } from './poop.controller';
import { PoopService } from './poop.service';

@Module({
  controllers: [PoopController],
  providers: [PoopService]
})
export class PoopModule {}
