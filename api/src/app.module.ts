import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Poop } from './poop/poop.entity';
import { PoopModule } from './poop/poop.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [PoopModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'brown',
    entities: [Poop, User],
    synchronize: true,
  }), UsersModule, AuthzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
