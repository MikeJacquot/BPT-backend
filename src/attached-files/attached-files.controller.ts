import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttachedFilesService } from './attached-files.service';
import { CreateUpdateAttachedFileDto } from './dto/create-update-attached-file.dto';


@Controller('attached-files')
export class AttachedFilesController {
  constructor(private readonly attachedFilesService: AttachedFilesService) {}

  @Post('milestone/:id')
  addOneToMilestone(@Param('id') id: string,
    @Body() createAttachedFileDto: CreateUpdateAttachedFileDto) {
    return this.attachedFilesService.addOneToMilestone(id, createAttachedFileDto);
  }

  @Post('medical-appointment/:id')
  addOneToMedicalAppointment(@Param('id') id: string,
    @Body() createAttachedFileDto: CreateUpdateAttachedFileDto) {
    return this.attachedFilesService.addOneToMedicalAppointment(id, createAttachedFileDto);
  }

  @Get('milestone/:id')
  findAllByMilestoneId(@Param('id') id: string,) {
    return this.attachedFilesService.findAllByMilestoneId(id);
  }

  @Get('medical-appointment/:id')
  findAllByMedicalAppointmentId(@Param('id') id: string,) {
    return this.attachedFilesService.findAllByMedicalAppointmentId(id);
  }

  @Get()
  findOneForMilestone(@Param('id') id: string) {
    return this.attachedFilesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttachedFileDto: CreateUpdateAttachedFileDto) {
    return this.attachedFilesService.update(id, updateAttachedFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attachedFilesService.remove(id);
  }
}
