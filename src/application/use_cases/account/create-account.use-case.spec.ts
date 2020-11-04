import { IAccount } from 'src/domain/interfaces/entities/IAccount';
import { CreateAccountDto } from 'src/dto/account/create-account.dto';
import { DeleteAccountDto } from 'src/dto/account/delete-account.dto';
import { filterAccountDto } from 'src/dto/account/filter-account.dto';
import { FindAccountDto } from 'src/dto/account/find-account.dto';
import { UpdateAccountDto } from 'src/dto/account/update-account.dto';
import { CreateAccountUseCase } from './create-account.use-case';

describe('create account', () => {

 const fakeAccount = ():IAccount => {
  return {
   id:null,
   agency: 1090,
   account: 559020,
   name: 'Joao Da Se',
   balance: 1090
  };
 };

 const makeSut = () => {
  const accounts:IAccount[] = [fakeAccount(), fakeAccount(), fakeAccount()];
  return {
   createAccount: async (account:CreateAccountDto):Promise<IAccount> => account,
   updateAccount: async (account: UpdateAccountDto): Promise<IAccount> => account,
   deleteAccount: async (id:DeleteAccountDto): Promise<void> => {id;},
   findOneAccount: async (id: FindAccountDto): Promise<IAccount> => { console.log(id); return fakeAccount(); },
   findManyAccount: async (search: filterAccountDto): Promise<IAccount[]> => { console.log(search); return accounts; }
  };
 };

 it('should use repo and return result', async () => {
  const repositorySut = makeSut();
  const fakeAcc = fakeAccount();
  const result = await CreateAccountUseCase.execute(fakeAcc, repositorySut);
  expect(result).toBe(fakeAcc);
 });
});