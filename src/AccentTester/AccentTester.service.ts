import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as crypto from 'crypto';
import { Model } from 'mongoose';
import { Collection } from './AccentTester.schema';

@Injectable()
export class AccentTesterService {
  constructor(@InjectModel('collections', 'accent') private CollectionsModel: Model<Collection>) { }
  private readonly algorithm = 'aes-256-ctr';

  private encrypt(text: string) {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(this.algorithm, process.env.ACCENT_TESTER_ENCODING_KEY, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex')
    };
  }

  async findAll(): Promise<string> {
    // const words = await this.wordModel.find().exec();
    // const msg = this.encrypt(JSON.stringify(words));
    // msg.content += process.env.ACCENT_TESTER_ENCODING_KEY;
    // return JSON.stringify(msg);
    return 'll';
  }

  async getCollections(): Promise<string[]> {
    const collections = await this.CollectionsModel.find().exec();
    return collections.map((collection) => (JSON.parse(JSON.stringify(collection)).alias));
  }
}