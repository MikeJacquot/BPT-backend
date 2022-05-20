import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BabiesService } from './babies.service';
import { CreateUpdateBabyDto } from './dto/create-update-baby.dto';

@Controller('babies')
export class BabiesController {
  constructor(private readonly babiesService: BabiesService) {}

  @Post(':familyId/create')
  create(@Param(':familyId') familyId: string,
  @Body() createBabyDto: CreateUpdateBabyDto) {
    return this.babiesService.create(familyId, createBabyDto);
  }

  @Get(':id/list')
  findAllByFamilyId(@Param('id') id: string) {
    return this.babiesService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.babiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBabyDto: Partial<CreateUpdateBabyDto>) {
    return this.babiesService.update(id, updateBabyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.babiesService.delete(id);
  }
}
