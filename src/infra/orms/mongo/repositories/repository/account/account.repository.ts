import { CreateAccountDto } from '../../../../../../dto/account/create-account.dto';
import { DeleteAccountDto } from '../../../../../../dto/account/delete-account.dto';
import { filterAccountDto } from '../../../../../../dto/account/filter-account.dto';
import { FindAccountDto } from '../../../../../../dto/account/find-account.dto';
import { UpdateAccountDto } from '../../../../../../dto/account/update-account.dto';
import { IAccountRepository } from '../../../../../../domain/interfaces/repositories/IAccountRepository';
import { Account } from '../../schemas/account.schema';
import { IDepositCash } from 'src/domain/interfaces/entities/IDepositCash';


export class AccountRespository extends Account implements IAccountRepository{
 depositCashOnAccount = async (account: CreateAccountDto, depositValue: number): Promise<IDepositCash> => {
  throw new Error('Method not implemented.' + account + depositValue);
 }

 createAccount = async (account: CreateAccountDto): Promise<Account> => {
  return await this.collection.insertOne(account)[0];
 }

 async updateAccount(account: UpdateAccountDto): Promise<Account> {
  const result = await this.collection.findOneAndUpdate(
   { _id: account.id }, { account }, { upsert: true, returnOriginal: false }
  );
  if (!result.ok) {
   throw new Error(result.lastErrorObject);
  }
  return result.value;
 }

 deleteAccount(id: DeleteAccountDto): Promise<void> {
  throw new Error('Method not implemented.' + id);
 }

 findOneAccount(id: FindAccountDto): Promise<Account> {
  throw new Error('Method not implemented.' + id);
 }
 
 findManyAccount(search: filterAccountDto): Promise<Account[]> {
  throw new Error('Method not implemented.' + search);
 }
}