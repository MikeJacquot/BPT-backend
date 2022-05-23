import { ConnectionOptions } from 'typeorm';
import { AttachedFile } from './attached-files/entities/attached-file.entity';
import { Baby } from './babies/entities/baby.entity';
import { Biometric } from './biometrics/entities/biometric.entity';
import { Family } from './families/entities/family.entity';
import { MedicalAppointment } from './medical-appointments/entities/medical-appointment.entity';
import { Milestone } from './milestones/entities/milestone.entity';
import { User } from './users/entities/user.entity';

const entities = [User, Family, Baby, Biometric, MedicalAppointment, Milestone, AttachedFile];

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
