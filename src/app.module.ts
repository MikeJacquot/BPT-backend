import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FamiliesModule } from './families/families.module';
import * as connectionOptions from './ormconfig';
import { UsersModule } from './users/users.module';
import { RelationshipsModule } from './relationships/relationships.module';
import { BabiesModule } from './babies/babies.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(connectionOptions),
    UsersModule,
    AuthModule,
    FamiliesModule,
    RelationshipsModule,
    BabiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
