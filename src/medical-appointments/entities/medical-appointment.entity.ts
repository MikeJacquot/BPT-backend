
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AttachedFile } from '../../attached-files/entities/attached-file.entity';

@Entity({name: 'medical-appointment'})
export class MedicalAppointment extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        default: null,
    })
    doctor: string;

    @Column({
        type: 'varchar',
        default: null,
    })
    purpose: string;

    @Column({
        type: 'date',
        default: null,
    })
    date: Date;

    @Column({
        type: 'varchar',
        default: null,
    })
    observations: string;

    @OneToMany(() => AttachedFile, attachedFile => attachedFile.medicalAppointment)
    attachedFiles: AttachedFile[];

}
