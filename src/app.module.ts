import { Module } from '@nestjs/common';
import { AccentTesterModule } from './AccentTester/AccentTester.module';

@Module({
  imports: [AccentTesterModule],
})
export class AppModule {}
