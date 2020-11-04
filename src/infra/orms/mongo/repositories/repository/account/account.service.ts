import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAccount } from 'src/domain/interfaces/entities/IAccount';
import { CreateAccountUseCase } from '../../../../../../application/use_cases/account/create-account.use-case';
import { CreateAccountDto } from '../../../../../../dto/account/create-account.dto';
import { Account, AccountDocument } from '../../schemas/account.schema';
import { AccountRespository } from './account.repository';

@Injectable()
export class AccountService {
 constructor(
  @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
  @Inject(AccountRespository) private accountRepository: AccountRespository,
  @Inject(CreateAccountUseCase) private createAccountUseCase: CreateAccountUseCase
 ) { }
 
 async createNewAccount(createAccountDto:CreateAccountDto):Promise<IAccount> {
  return await new CreateAccountUseCase(this.accountRepository).execute(createAccountDto);
 }
}
