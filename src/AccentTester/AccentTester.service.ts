import { Injectable } from '@nestjs/common';

@Injectable()
export class AccentTesterService {
  getHello(): string {
    return 'Hello AccentTester!';
  }
}
