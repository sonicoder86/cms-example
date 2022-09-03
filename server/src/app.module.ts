import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { LoginController } from './controllers/login.controller';
import { AppService } from './services/app.service';
import { LoginService } from './services/login.service';

@Module({
  imports: [],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
