import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema(
 {
 id: String,
 agency: Number,
 account: Number,
 name: String,
 balance: Number,
 }
);
