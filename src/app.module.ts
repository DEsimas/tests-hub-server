import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccentTesterModule } from './AccentTester/AccentTester.module';
import { TestModule } from './Test/AccentTester.module';
import { TypingTesterModule } from './TypingTester/TypingTester.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.TESTS_HUB_DB_URI),
    TestModule,
    AccentTesterModule,
    TypingTesterModule
  ],
})
export class AppModule {}
