import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account extends Document{
 
 @Prop()
 id: string;

 @Prop({required:true})
 agencia: number;
 
 @Prop({required:true})
 conta: number;
 
 @Prop({required:true})
 name: string;
 
 @Prop({required:true})
 balance: number;
 
}

export const AccountSchema = SchemaFactory.createForClass(Account);