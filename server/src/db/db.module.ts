import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';

export const dbModule = TypeOrmModule.forRoot({
  type: 'mariadb',
  ...config.db,
  entities: [User, Role],
  synchronize: false,
});
