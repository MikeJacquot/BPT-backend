
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Baby } from '../../babies/entities/baby.entity';

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

    @Column()
    date: Date;

    @ManyToOne(() => Baby, baby => baby.id )
    baby: Baby;
}

