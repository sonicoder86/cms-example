import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Session } from './entities/session.entity';
import { config } from '../config';

export default new DataSource({
  type: 'mariadb',
  ...config.db,
  entities: [User, Role, Session],
  synchronize: false,
  migrations: ['src/db/migrations/*.ts'],
});
