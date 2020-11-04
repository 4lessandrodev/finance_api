import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { IAccountRepository } from '../../../domain/interfaces/repositories/IAccountRepository';
import { CreateAccountDto } from '../../../dto/account/create-account.dto';

export class CreateAccountUseCase {
 static async execute(account: CreateAccountDto, repository: IAccountRepository): Promise<IAccount>{
  return await repository.createAccount(account);
 }
}