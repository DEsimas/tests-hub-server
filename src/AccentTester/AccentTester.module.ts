import { Module } from '@nestjs/common';
import { AccentTesterController } from './AccentTester.controller';
import { AccentTesterService } from './AccentTester.service';

@Module({
  imports: [],
  controllers: [AccentTesterController],
  providers: [AccentTesterService],
})
export class AccentTesterModule {}
