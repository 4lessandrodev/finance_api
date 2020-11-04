import { Account } from '../../../domain/entities/Account';
import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { IAccountRepository } from '../../../domain/interfaces/repositories/IAccountRepository';
import { CreateAccountDto } from '../../../dto/account/create-account.dto';

export class CreateAccountUseCase {
 static async execute(accountDto: CreateAccountDto, repository: IAccountRepository): Promise<IAccount | Error>{
  try {
   const account = new Account(accountDto);
   return await repository.createAccount(account);
  } catch (error) {
   return error;
  }
 }
}