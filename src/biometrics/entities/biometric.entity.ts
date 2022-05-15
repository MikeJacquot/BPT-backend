import { Baby } from 'src/babies/entities/baby.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'biometric'})
export class Biometric extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'float',
        default: null,
    })
    height: number;

    @Column({
        type: 'float',
        default: null,
    })
    weight: number;

    @Column({
        type: 'date',
        default: null,
    })
    date: Date;

    @ManyToOne(() => Baby, {
        nullable: true,
        cascade: true,
        onDelete: 'CASCADE',
    })
    baby: Baby;
}

