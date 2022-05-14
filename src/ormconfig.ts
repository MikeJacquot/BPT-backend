import { ConnectionOptions } from 'typeorm';
import { Family } from './families/entities/family.entity';
import { UserFamilyRelationship } from './relationships/entities/user-family-relationship.entity';
import { User } from './users/entities/user.entity';

const entities = [User, Family, UserFamilyRelationship];

const connectionOptions: ConnectionOptions = {
  type: 'mariadb',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'babytracker',
  entities: entities,
  synchronize: true, // todo: use migrations later
  logging: true,
  logger: 'file',
};

export = connectionOptions;
