
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalAppointment } from '../../medical-appointments/entities/medical-appointment.entity';
import { Milestone } from '../../milestones/entities/milestone.entity';

@Entity({name: 'attached-file'})
export class AttachedFile extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        default: null,
    })
    label: string;

    @Column({
        type: 'varchar',
        default: null,
    })
    url: string;

    @ManyToOne(() => Milestone, milestone => milestone.attachedFiles)
    milestone?: Milestone;

    @ManyToOne(() => MedicalAppointment, medicalAppointment => medicalAppointment.attachedFiles)
    medicalAppointment?: MedicalAppointment;
}

