import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { LoginController } from './controllers/login.controller';
import { AppService } from './services/app.service';
import { LoginService } from './services/login.service';
import { dbModule } from './db/db.module';

@Module({
  imports: [dbModule],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
