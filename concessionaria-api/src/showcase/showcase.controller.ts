import { Controller, Get } from '@nestjs/common';
import { ShowcaseService } from './showcase.service';

@Controller('showcase')
export class ShowcaseController {
  constructor(private readonly service: ShowcaseService) {}

  @Get()
  getHome() {
    return this.service.getHome();
  }
}
