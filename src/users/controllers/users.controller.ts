import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../services/users.service';



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

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<UpdateUserDto>) {
    return this.usersService.update(id, dto);
  }

}

