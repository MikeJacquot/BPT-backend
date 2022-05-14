import { Family } from 'src/families/entities/family.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

type familyRelationshipType =
  | 'parent'
  | 'grandparent'
  | 'uncle / aunt'
  | 'godparent'
  | 'other';

const familyRelationshipsList = [
  'parent',
  'grandparent',
  'uncle / aunt',
  'godparent',
  'other',
];

@Entity({ name: 'user_family_relationship' })
/**
 * A relation entity used to define the relation in this module
 * between a User and a Family adding the relationship between these two
 */

export class UserFamilyRelationship extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: familyRelationshipsList,
    default: 'other',
  })
  falimyRelationship: familyRelationshipType;

  @ManyToOne(() => User, {
    nullable: true,
    cascade: true,
    onDelete: 'NO ACTION',
  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Family, {
    nullable: true,
    cascade: true,
    onDelete: 'NO ACTION',
  })
  @JoinColumn()
  family: Family;
}
