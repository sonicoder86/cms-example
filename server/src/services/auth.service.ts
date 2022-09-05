import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { DataSource } from 'typeorm';
import { createHash } from 'crypto';
import { config } from '../config';
import { User } from '../db/entities/user.entity';
import { Session } from '../db/entities/session.entity';

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  token: string;
  roles: string[]
}

@Injectable()
export class AuthService {
  constructor(private dataSource: DataSource) {}

  public async login(username: string, password: string): Promise<LoginResponse> {
    const user = await this.findUser(username, password);
    const token = await this.createSession(user);

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      roles: user.roles.map(role => role.name),
      token,
    };
  }

  public async logout(token: string): Promise<void> {
    await this.authenticate(token)

    await this.dataSource.getRepository(Session).delete({ token });
  }

  public async authenticate(token: string): Promise<void> {
    const session = await this.dataSource.getRepository(Session).findOne({
      where: { token },
    });

    if (!session) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  private async findUser(username: string, password: string): Promise<User> {
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

    return user;
  }

  private sha1Encode(password: string): string {
    const shaSum = createHash('sha1');
    shaSum.update(password);

    return shaSum.digest('hex');
  }

  private async createSession(user: User): Promise<string> {
    const token = sign({ id: user.id }, config.clientSecret);
    const session = new Session();
    session.token = token;
    session.user_id = user.id;
    session.created = new Date();
    await this.dataSource.getRepository(Session).insert(session);

    return token;
  }
}
