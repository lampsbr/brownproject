import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Poop } from './poop/poop.entity';
import { PoopModule } from './poop/poop.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'brown',
    entities: [Poop, ],
    synchronize: true,
  }), AuthzModule, PoopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
