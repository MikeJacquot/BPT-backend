import { Module } from '@nestjs/common';
import { FamiliesService } from 'src/families/families.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, FamiliesService],
  exports: [UsersService],
})
export class UsersModule { }
