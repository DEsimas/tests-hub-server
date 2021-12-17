import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccentTester, AccentTesterDocument } from './AccentTester.schema';
import * as crypto from 'crypto';

@Injectable()
export class AccentTesterService {
  constructor(@InjectModel(AccentTester.name) private wordModel: Model<AccentTesterDocument>) {}
  private readonly algorithm = 'aes-256-ctr';

  private encrypt(text: string) {
    const iv = crypto.randomBytes(16);
    
    const cipher = crypto.createCipheriv(this.algorithm, process.env.ENCODING_KEY, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
  }

  async findAll(): Promise<string> {
    const words = await this.wordModel.find().exec();
    const msg = this.encrypt(JSON.stringify(words));
    msg.content += process.env.ENCODING_KEY;
    return JSON.stringify(msg);
  }
}
