import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { DataSource, EntityManager } from 'typeorm';
import { createHash } from 'crypto';
import { config } from '../config';
import { User } from '../db/entities/user.entity';

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  token: string;
  roles: string[]
}

@Injectable()
export class LoginService {
  constructor(private dataSource: DataSource, private entityManager: EntityManager) {}

  public async login(username: string, password: string): Promise<LoginResponse> {
    const user = await this.dataSource.getRepository(User).findOne({
      where: {
        username,
        password: this.sha1Encode(password),
      },
      relations: {
        roles: true,
      },
    });

    if (!user) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      roles: user.roles.map(role => role.name),
      token: sign({ id: user.id }, config.clientSecret),
    };
  }

  private sha1Encode(password: string): string {
    const shaSum = createHash('sha1');
    shaSum.update(password);

    return shaSum.digest('hex');
  }
}
