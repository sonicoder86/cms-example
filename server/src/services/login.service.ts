import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { DataSource, EntityManager } from 'typeorm';
import { config } from '../config';
import { User } from '../db/entities/user.entity';

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  token: string;
}

@Injectable()
export class LoginService {
  constructor(private dataSource: DataSource, private entityManager: EntityManager) {}

  public async login(username: string, password: string): Promise<LoginResponse> {
    const user = await this.entityManager.findOneBy(User, { username, password });

    if (!user) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      token: sign({ id: user.id }, config.clientSecret),
    };
  }
}
