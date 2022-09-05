import { Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { ContentService } from '../services/content.service';
import { ContentEntity } from '../db/entities/content.entity';
import { AuthGuard } from '../guards/auth.guard';

@Controller('contents')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getContents(@Headers('Authorization') authHeader: string): Promise<ContentEntity[]> {
    return await this.contentService.getContents();
  }
}
