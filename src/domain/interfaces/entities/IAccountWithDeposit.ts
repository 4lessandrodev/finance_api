import { IDepositCash } from './IDepositCash';

export interface IAccountWithDeposit extends IDepositCash{
 id: string;
 agency: number;
 account: number;
 name: string;
 balance: number;
}
