import { Module } from '@nestjs/common';
import { AccentTesterModule } from './AccentTester/AccentTester.module';
import { TestModule } from './Test/AccentTester.module';

@Module({
  imports: [TestModule, AccentTesterModule],
})
export class AppModule {}
