import { Body, Controller, Post, HttpCode, Headers } from '@nestjs/common';
import { AuthService, LoginResponse } from '../services/auth.service';

interface LoginRequest {
  username: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  public async handleLogin(@Body() body: LoginRequest): Promise<LoginResponse> {
    return this.authService.login(body.username, body.password);
  }

  @Post('logout')
  @HttpCode(200)
  public async handleLogout(@Headers('Authorization') authHeader: string): Promise<void> {
    const token = (authHeader || '').replace('Bearer ', '');
    return this.authService.logout(token);
  }
}
