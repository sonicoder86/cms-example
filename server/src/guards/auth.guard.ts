import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = (request.headers.authorization || '').replace('Bearer ', '');

    try {
      await this.authService.authenticate(token);
      return true;
    } catch(e) {
      return false;
    }
  }
}
