import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccentTesterController } from './AccentTester.controller';
import { AccentTesterService } from './AccentTester.service';
import { AccentTester, AccentTesterSchema } from './AccentTester.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: AccentTester.name, schema: AccentTesterSchema}])],
  controllers: [AccentTesterController],
  providers: [AccentTesterService],
})
export class AccentTesterModule {}
