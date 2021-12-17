import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type AccentTesterDocument = AccentTester & Document;

@Schema()
export class AccentTester {
    @Prop()
    word: string;
}

export const AccentTesterSchema = SchemaFactory.createForClass(AccentTester);