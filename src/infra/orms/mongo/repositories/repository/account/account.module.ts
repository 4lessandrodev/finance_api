import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateAccountUseCase } from 'src/application/use_cases/account/create-account.use-case';
import { AccountController } from '../../../../../../presentation/account/account.controller';
import { Account, AccountSchema } from '../../schemas/account.schema';
import { AccountRespository } from './account.repository';
import { AccountService } from './account.service';

@Module({
 imports: [
  MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  AccountRespository,
  CreateAccountUseCase
 ],
 controllers: [AccountController],
 providers:[AccountService]
})
export class AccountModule{}