import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { config } from '../config';

export default new DataSource({
  type: 'mariadb',
  ...config.db,
  entities: [User],
  synchronize: false,
  migrations: ['src/db/migrations/*.ts'],
});
