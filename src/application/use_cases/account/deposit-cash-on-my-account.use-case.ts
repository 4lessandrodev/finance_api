import { IAccountWithDeposit,IAccount, IAccountRepository } from '../../../domain/interfaces';
import { DepositCashOnMyAccountDto } from '../../../dto';
import { Account } from '../../../domain/entities/Account';
import { IUseCase } from '../interfaces/IUseCase';
import { Result } from '../../../domain/aggregate-root/Result';

export class DepositCashOnMyAccountUseCase implements IUseCase<DepositCashOnMyAccountDto, IAccount>{
 execute = async (accountDto:IAccountWithDeposit, repository: IAccountRepository): Promise<Result<IAccount>> => {
  const accountOrError = Account.create(accountDto);
  
  if (accountOrError.isFailure) {
   return accountOrError;
  }
  const depositOrError = accountOrError.getValue().applyDepositValue(accountDto);
  
  if (depositOrError.isFailure) {
   return depositOrError;
  }
  return await repository.depositCashOnMyAccount({ ...accountOrError.getValue(), value: accountDto.value });
  
 }
}