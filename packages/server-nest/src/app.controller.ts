import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { helloWorld } from 'common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    helloWorld();

    return this.appService.getHello();
  }
}
