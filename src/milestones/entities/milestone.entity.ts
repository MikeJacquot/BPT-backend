
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AttachedFile } from '../../attached-files/entities/attached-file.entity';

@Entity({name: 'milestone'})
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

    @OneToMany(() => AttachedFile, attachedFile => attachedFile.milestone)
    attachedFiles: AttachedFile[];
}
