
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export type FamilyRelationshipType =
  | 'parent'
  | 'grandparent'
  | 'uncle / aunt'
  | 'godparent'
  | 'other';

export const familyRelationshipsList = [
  'parent',
  'grandparent',
  'uncle / aunt',
  'godparent',
  'other',
];
@Entity({ name: 'family' })

export class Family extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: familyRelationshipsList,
  })
  familyRelationShip: FamilyRelationshipType;

  @ManyToOne(() => User, user => user.id, {onDelete: 'CASCADE'})
  user: User

}
