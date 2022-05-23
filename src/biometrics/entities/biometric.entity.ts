import { Baby } from 'src/babies/entities/baby.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

