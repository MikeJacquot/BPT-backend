import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn
} from 'typeorm';
  
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
  
  }