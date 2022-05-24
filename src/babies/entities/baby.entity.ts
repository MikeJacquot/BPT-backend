
import {
  BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';
import { Family } from '../../families/entities/family.entity';

@Entity({ name: 'baby' })
export class Baby extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthDate: Date;

  @Column()
  birthLocation: string;

  @ManyToOne(() => Family, family => family.id)
  family: Family;

}