import { Controller, Get } from '@nestjs/common';
import { AccentTesterService } from './AccentTester.service';
import { AccentTester } from './AccentTester.schema';

@Controller('/AccentTester')
export class AccentTesterController {
  constructor(private readonly AccentTesterService: AccentTesterService) {}

  @Get()
  findAll(): Promise<AccentTester[]> {
    return this.AccentTesterService.findAll();
  }
}
