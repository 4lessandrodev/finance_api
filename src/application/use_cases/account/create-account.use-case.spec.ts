import { DepositCashAccountDto } from 'src/dto/account/deposit-cash-account.dto';
import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { CreateAccountDto } from '../../../dto/account/create-account.dto';
import { DeleteAccountDto } from '../../../dto/account/delete-account.dto';
import { filterAccountDto } from '../../../dto/account/filter-account.dto';
import { FindAccountDto } from '../../../dto/account/find-account.dto';
import { UpdateAccountDto } from '../../../dto/account/update-account.dto';
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
   findManyAccount: async (search: filterAccountDto): Promise<IAccount[]> => { console.log(search); return accounts; },
   depositCashOnAccount: async (account: DepositCashAccountDto, depositValue: number): Promise<IAccount> => {
    console.log(`${account} + ${depositValue}`);
    return fakeAccount();
   }
  };
 };

 it('should use repo and return result', async () => {
  const repositorySut = makeSut();
  const fakeAcc = fakeAccount();
  const createOne = async ():Promise<IAccount> => await new CreateAccountUseCase(repositorySut).execute(fakeAcc);
  const result = createOne();
  expect(createOne).not.toThrow();
  expect((await result).account).toBe(fakeAcc.account);
  expect((await result).agency).toBe(fakeAcc.agency);
  expect((await result).balance).toBe(fakeAcc.balance);
  expect((await result).name).toBe(fakeAcc.name);
  expect((await result).id).not.toBe(null);
  expect(result).not.toBe(undefined);
 });
});