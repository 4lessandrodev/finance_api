import { IDebitCash } from './IDebitCash';

export interface IAccountWithDebit extends IDebitCash{
 id: string;
 agency: number;
 account: number;
 name: string;
 balance: number;
}
