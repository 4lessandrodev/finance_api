import { Result } from '../../../domain/aggregate-root/Result';
import { Account } from '../../../domain/entities/Account';
import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { IAccountRepository } from '../../../domain/interfaces/repositories/IAccountRepository';
import { CreateAccountDto } from '../../../dto/account/create-account.dto';
import { IUseCase } from '../interfaces/IUseCase';

export class CreateAccountUseCase implements IUseCase<CreateAccountDto, IAccount>{
 execute = async (accountDto:IAccount, repository: IAccountRepository): Promise<Result<IAccount>> => {
  
   const accountOrError = Account.create(accountDto);
   if (accountOrError.isFailure) {
     return Result.fail<Account>(accountOrError.error.toString());
   }
   return await repository.createAccount(accountOrError.getValue());
  
 }
}