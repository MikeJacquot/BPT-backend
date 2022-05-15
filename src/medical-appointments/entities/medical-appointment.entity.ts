import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

}
