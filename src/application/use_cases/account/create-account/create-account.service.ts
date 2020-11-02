import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from 'src/infra/orms/mongo/repositories/schemas/account.schema';

@Injectable()
export class CreateAccountService {
 constructor(
  @InjectModel(Account.name) private accountModel: Model<AccountDocument>
 ) { }
 
}
