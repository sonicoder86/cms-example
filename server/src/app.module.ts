import { Module } from '@nestjs/common';
import { dbModule } from './db/db.module';
import { AppController } from './controllers/app.controller';
import { AuthController } from './controllers/auth.controller';
import { ContentController } from './controllers/content.controller';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { ContentService } from './services/content.service';

@Module({
  imports: [dbModule],
  controllers: [AppController, AuthController, ContentController],
  providers: [AppService, AuthService, ContentService],
})
export class AppModule {}
