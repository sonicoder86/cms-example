import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { LoginService, LoginResponse } from '../services/login.service';

interface LoginRequest {
  username: string;
  password: string;
}

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @HttpCode(200)
  public async handleLogin(@Body() body: LoginRequest): Promise<LoginResponse> {
    return this.loginService.login(body.username, body.password);
  }
}
