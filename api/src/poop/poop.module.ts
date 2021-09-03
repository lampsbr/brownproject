import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoopController } from './poop.controller';
import { Poop } from './poop.entity';
import { PoopService } from './poop.service';

@Module({
  imports: [TypeOrmModule.forFeature([Poop])],
  controllers: [PoopController],
  providers: [PoopService, Logger]
})
export class PoopModule {}
