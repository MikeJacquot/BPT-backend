import { MedicalAppointment } from '../../medical-appointments/entities/medical-appointment.entity';
import { Milestone } from '../../milestones/entities/milestone.entity';


export class CreateUpdateAttachedFileDto {
    id?: string;
    label: string;
    url: string;
    milestone?: Milestone;
    medicalAppointment?: MedicalAppointment;
}
