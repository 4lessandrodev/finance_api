import { IAccountWithDeposit,IAccount, IAccountRepository } from '../../../domain/interfaces';
import { DepositCashOnMyAccountDto } from '../../../dto';
import { Account } from '../../../domain/entities/Account';
import { IUseCase } from '../interfaces/IUseCase';

export class DepositCashOnMyAccountUseCase implements IUseCase<DepositCashOnMyAccountDto, IAccount>{
 execute = async (accountDto:IAccountWithDeposit, repository: IAccountRepository): Promise<IAccount> => {
  const account = new Account(accountDto).applyDepositValue({ ...accountDto });
  return await repository.depositCashOnMyAccount({ ...account, value: accountDto.value});
 }
}