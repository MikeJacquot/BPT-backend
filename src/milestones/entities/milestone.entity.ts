import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Milestone extends BaseEntity{

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
    type: string;

    @Column({
        type: 'varchar',
        default: null,
    })
    location: string;

    @Column({
        type: 'date',
        default: null,
    })
    date: Date;
}
