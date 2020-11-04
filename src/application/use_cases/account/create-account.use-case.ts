import { Account } from '../../../domain/entities/Account';
import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { IAccountRepository } from '../../../domain/interfaces/repositories/IAccountRepository';
import { CreateAccountDto } from '../../../dto/account/create-account.dto';
import { IUseCase } from '../interfaces/IUseCase';

export class CreateAccountUseCase implements IUseCase<CreateAccountDto, IAccount>{
 constructor(private repository: IAccountRepository) {}
 execute = async (accountDto:CreateAccountDto): Promise<IAccount> => {
  
   const account = new Account(accountDto);
   return await this.repository.createAccount(account);
  
 }
}