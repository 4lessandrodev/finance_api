import { Result } from '../../../domain/aggregate-root/Result';
import { IDepositCash } from '../entities/IDepositCash';
export interface IDepositCashRepository{
 depositCashOnAccount(account: IDepositCash): Promise<Result<IDepositCash>>;
}