import { Injectable } from '@nestjs/common';
import { CreateUpdateMedicalAppointmentDto } from './dto/create-update-medical-appointment.dto';
import { MedicalAppointment } from './entities/medical-appointment.entity';

@Injectable()
export class MedicalAppointmentsService {
  async create(createMedicalAppointmentDto: CreateUpdateMedicalAppointmentDto) {
    const toSave = MedicalAppointment.create(createMedicalAppointmentDto);
    return await MedicalAppointment.save(toSave);
  }

  async findAll() {
    return MedicalAppointment.find();;
  }

  async findOne(id: string) {
    return MedicalAppointment.findOne(id);
  }

  async update(id: string, updateMedicalAppointmentDto: Partial<CreateUpdateMedicalAppointmentDto>) {
    return MedicalAppointment.update(id, updateMedicalAppointmentDto);
  }

  async delete(id: string) {
    return MedicalAppointment.delete(id);
  }
}
