import { Injectable } from '@nestjs/common';
import { MedicalAppointment } from 'src/medical-appointments/entities/medical-appointment.entity';
import { Milestone } from 'src/milestones/entities/milestone.entity';
import { CreateUpdateAttachedFileDto } from './dto/create-update-attached-file.dto';
import { AttachedFile } from './entities/attached-file.entity';


@Injectable()
export class AttachedFilesService {

  async addOneToMilestone(id: string, createAttachedFileDto: CreateUpdateAttachedFileDto) {
    AttachedFile.create(createAttachedFileDto);
    const milestone = await Milestone.findOne(id);
    createAttachedFileDto.milestone = milestone;
    return createAttachedFileDto;

  }

  async addOneToMedicalAppointment(id: string, createAttachedFileDto: CreateUpdateAttachedFileDto) {
    const toSave = AttachedFile.create(createAttachedFileDto);
    const medicalAppointment = await MedicalAppointment.findOne(id);
    toSave.medicalAppointment = medicalAppointment;
    AttachedFile.save(toSave);
    return toSave;

  }

  async findAllByMilestoneId(id: string) {
    return await AttachedFile.find({where: {milestone: id}});
  }

  async findAllByMedicalAppointmentId(id: string) {
    return await AttachedFile.find({where: {medicalAppointment: id}});
  }

  async findOne(id: string) {
    return await AttachedFile.findOne(id);
  }

  async update(id: string, updateAttachedFileDto: CreateUpdateAttachedFileDto) {
    updateAttachedFileDto.id = id;
    return await AttachedFile.save(updateAttachedFileDto as AttachedFile);
  }

  async remove(id: string) {
    return AttachedFile.delete(id);
  }
}
