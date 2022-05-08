import { ConnectionOptions } from 'typeorm';
import { User } from './users/entities/user.entity';

const entities = [User];

const connectionOptions: ConnectionOptions = {
    type: 'mariadb',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'babytracker',
    entities: entities,
    synchronize: true,
    logging: true,
    logger: 'file',
};

export = connectionOptions;
