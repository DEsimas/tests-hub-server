import { Controller, Get } from '@nestjs/common';
import { TestService } from './Test.service';

@Controller('/Test')
export class TestController {
  constructor(private readonly TestService: TestService) {}

  @Get()
  getHello(): string {
    return this.TestService.getHello();
  }
}
