import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(id);
  }

  @Get('email/:email')
  getByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }
}
