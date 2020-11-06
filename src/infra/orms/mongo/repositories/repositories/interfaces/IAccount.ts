
import { Document } from 'mongoose';

export interface IAccount extends Document {
 readonly id: string,
 readonly agency: number,
 readonly account: number,
 readonly name: string,
 readonly balance: number,
}