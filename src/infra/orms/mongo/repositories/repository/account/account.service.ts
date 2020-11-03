import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDto } from '../../../../../../dto/create-account.dto';
import { Account, AccountDocument } from '../../schemas/account.schema';
import { AccountRespository } from './account.repository';

@Injectable()
export class AccountService {
 constructor(
  @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
  @Inject(AccountRespository) private accountRepository: AccountRespository
 ) { }
 
 createNewAccount(createAccountDto:CreateAccountDto) {
  this.accountRepository.createAccount();
 }
}
