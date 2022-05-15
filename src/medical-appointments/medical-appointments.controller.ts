import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUpdateMedicalAppointmentDto } from './dto/create-update-medical-appointment.dto';
import { MedicalAppointmentsService } from './medical-appointments.service';

@Controller('medical-appointments')
export class MedicalAppointmentsController {
  constructor(private readonly medicalAppointmentsService: MedicalAppointmentsService) {}

  @Post()
  create(@Body() createMedicalAppointmentDto: CreateUpdateMedicalAppointmentDto) {
    return this.medicalAppointmentsService.create(createMedicalAppointmentDto);
  }

  @Get()
  findAll() {
    return this.medicalAppointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalAppointmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalAppointmentDto: Partial<CreateUpdateMedicalAppointmentDto>) {
    return this.medicalAppointmentsService.update(id, updateMedicalAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalAppointmentsService.delete(id);
  }
}
