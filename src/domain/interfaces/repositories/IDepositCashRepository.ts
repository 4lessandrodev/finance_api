import { IDepositCash } from '../entities/IDepositCash';
export interface IDepositCashRepository{
 depositCashOnAccount(account: IDepositCash): Promise<IDepositCash>;
}