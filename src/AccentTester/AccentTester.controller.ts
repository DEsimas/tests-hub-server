import { Controller, Get } from '@nestjs/common';
import { AccentTesterService } from './AccentTester.service';

@Controller('/AccentTester')
export class AccentTesterController {
  constructor(private readonly AccentTesterService: AccentTesterService) { }

  @Get('/Collections')
  async getCollections(): Promise<string> {
    return JSON.stringify(await this.AccentTesterService.getCollections());
  }

  @Get()
  findAll(): Promise<string> {
    return this.AccentTesterService.findAll();
  }
}
