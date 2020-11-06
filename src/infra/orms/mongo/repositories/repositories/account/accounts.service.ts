
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { IAccount } from '../interfaces/IAccount';
import { CreateAccountDto } from 'src/dto/account/create-account.dto';
// import { CreateAccountUseCase } from '../../../../../../application/use_cases/account/create-account.use-case';


@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_MODEL') private accountModel: Model<IAccount>
    ) {}
    
  async create(createAccount: CreateAccountDto): Promise<IAccount> {
    const createdCat = new this.accountModel(createAccount);
    return createdCat.save();
  }

  async findAll(): Promise<IAccount[]> {
    return this.accountModel.find().exec();
  }
}
