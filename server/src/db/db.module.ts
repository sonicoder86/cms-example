import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from './entities/role.entity';
import { SessionEntity } from './entities/session.entity';
import { ContentEntity } from './entities/content.entity';

export const dbModule = TypeOrmModule.forRoot({
  type: 'mariadb',
  ...config.db,
  entities: [UserEntity, RoleEntity, SessionEntity, ContentEntity],
  synchronize: false,
});
