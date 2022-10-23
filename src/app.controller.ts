import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UniversityService } from './university/university.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly universityService: UniversityService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('university')
  async getUniversities(
    @Query('name') name: string,
    @Query('order') order: string,
  ): Promise<any> {
    name = !name ? '' : name;
    order = !order ? 'Asc' : order;

    return await this.universityService.getUniversity(name, order);
  }
}
