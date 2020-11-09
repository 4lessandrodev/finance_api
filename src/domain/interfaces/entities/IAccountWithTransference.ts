import { IDepositCash } from './IDepositCash';

export interface IAccountWithTransference extends IDepositCash{
 id: string;
 agency: number;
 account: number;
 name: string;
 balance: number;
}
