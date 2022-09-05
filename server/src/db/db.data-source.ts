import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from './entities/role.entity';
import { SessionEntity } from './entities/session.entity';
import { ContentEntity } from './entities/content.entity';
import { config } from '../config';

export default new DataSource({
  type: 'mariadb',
  ...config.db,
  entities: [UserEntity, RoleEntity, SessionEntity, ContentEntity],
  synchronize: false,
  migrations: ['src/db/migrations/*.ts'],
});
