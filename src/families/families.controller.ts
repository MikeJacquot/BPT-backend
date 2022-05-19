import {
  Body, Controller, Delete, Get, Param, Patch, Post
} from '@nestjs/common';
import { CreateUpdateFamilyDto } from './dto/create-family.dto';
import { FamiliesService } from './families.service';


@Controller('families')
export class FamiliesController {
  constructor(private readonly familiesService: FamiliesService) { }

  @Post()
  create(@Body() createFamilyDto: CreateUpdateFamilyDto) {
    return this.familiesService.create(createFamilyDto);
  }


  @Get('list')
  findAll() {
    return this.familiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFamilyDto: Partial<CreateUpdateFamilyDto>) {
    return this.familiesService.update(id, updateFamilyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familiesService.delete(id);
  }
}
