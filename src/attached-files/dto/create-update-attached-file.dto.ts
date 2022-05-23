import { MedicalAppointment } from 'src/medical-appointments/entities/medical-appointment.entity';
import { Milestone } from 'src/milestones/entities/milestone.entity';

export class CreateUpdateAttachedFileDto {
    id?: string;
    label: string;
    url: string;
    milestone?: Milestone;
    medicalAppointment?: MedicalAppointment;
}
