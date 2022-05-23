import { MedicalAppointment } from 'src/medical-appointments/entities/medical-appointment.entity';
import { Milestone } from 'src/milestones/entities/milestone.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

