import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityService } from './university/university.service';
import { ApiService } from './api/api.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, UniversityService, ApiService],
})
export class AppModule {}
