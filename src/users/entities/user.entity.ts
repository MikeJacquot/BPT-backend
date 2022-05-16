import * as bcrypt from 'bcryptjs';
import {
  BaseEntity, BeforeInsert, Column,
  CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({
    default: null,
  })
  password: string;

  @Column({
    default: null,
 
  })
  firstName: string;

  @Column({
    default: null,
  })
  lastName: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
