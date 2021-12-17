import { Controller, Get } from '@nestjs/common';
import { AccentTesterService } from './AccentTester.service';
import { Word } from './Word.schema';

@Controller('/AccentTester')
export class AccentTesterController {
  constructor(private readonly AccentTesterService: AccentTesterService) {}

  @Get()
  findAll(): Promise<Word[]> {
    return this.AccentTesterService.findAll();
  }
}
