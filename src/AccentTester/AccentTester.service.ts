import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Promise } from 'mongodb';
import { Model } from 'mongoose';
import { Word, WordDocument } from './Word.schema';

@Injectable()
export class AccentTesterService {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  async findAll() {
    return this.wordModel.find().exec();
  }
}
