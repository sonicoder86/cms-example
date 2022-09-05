import { Controller, Get, Headers } from '@nestjs/common';
import { ContentService } from '../services/content.service';
import { ContentEntity } from '../db/entities/content.entity';
import { AuthService } from '../services/auth.service';

@Controller('contents')
export class ContentController {
  constructor(private readonly contentService: ContentService, private readonly authService: AuthService) {}

  @Get()
  async getContents(@Headers('Authorization') authHeader: string): Promise<ContentEntity[]> {
    const token = (authHeader || '').replace('Bearer ', '');
    await this.authService.authenticate(token);
    return await this.contentService.getContents();
  }
}
