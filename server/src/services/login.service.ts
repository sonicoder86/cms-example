import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { config } from '../config';

export interface LoginResponse {
  username: string;
  email: string;
  token: string;
}

@Injectable()
export class LoginService {
  public login(username: string, password: string): LoginResponse {
    if (username === 'admin' && password === 'secret') {
      return {
        username: username,
        email: 'admin@example.com',
        token: sign({ username: username, email: 'admin@example.com' }, config.clientSecret),
      };
    } else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
