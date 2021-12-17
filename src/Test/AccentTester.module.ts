import { Module } from '@nestjs/common';
import { TestController } from './Test.controller'
import { TestService } from './Test.service';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
