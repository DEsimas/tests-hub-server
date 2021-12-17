import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccentTesterController } from './AccentTester.controller';
import { AccentTesterService } from './AccentTester.service';
import { Word, WordSchema } from './Word.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Word.name, schema: WordSchema}])],
  controllers: [AccentTesterController],
  providers: [AccentTesterService],
})
export class AccentTesterModule {}
