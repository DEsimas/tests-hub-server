import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TypingTester, TypingTesterDocument } from "./TypingTester.schema";

@Injectable()
export class TypingTesterService {
    constructor(@InjectModel(TypingTester.name) private TypingTesterModel: Model<TypingTesterDocument>) {}

    async findAll(): Promise<string> {
        const texts = await this.TypingTesterModel.find().exec();
        return JSON.stringify({texts: texts});
    }
}