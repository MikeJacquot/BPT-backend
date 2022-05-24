import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from '../../auth/jwt/jwt-auth.guard';
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

  @Post('with-password')
  createWithPaswword(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createWithPaswwordReturned(createUserDto);
  }

  @Get('list')
  getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(id);
  }

  @Get(':id/with-password')
  showWithPaswword(@Param('id') id: string) {
    return this.usersService.showByIdwithPassword(id);
  }

  @Get('email/:email')
  getByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<UpdateUserDto>) {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteIntervention(@Param('id') id: string): Promise<DeleteResult> {
        return this.usersService.deleteOneById(id);
    }

}


