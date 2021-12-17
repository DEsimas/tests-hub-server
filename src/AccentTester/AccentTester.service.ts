import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccentTester, AccentTesterDocument } from './AccentTester.schema';

@Injectable()
export class AccentTesterService {
  constructor(@InjectModel(AccentTester.name) private wordModel: Model<AccentTesterDocument>) {}

  async findAll() {
    return this.wordModel.find().exec();
  }
}
