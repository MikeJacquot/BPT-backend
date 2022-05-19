import { userInfo } from 'os';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => User, user => user.id )
  user: User

}
