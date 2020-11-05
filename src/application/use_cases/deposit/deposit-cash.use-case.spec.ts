import { IDepositCash } from 'src/domain/interfaces/entities/IDepositCash';
import { DepositCashAccountDto } from 'src/dto/account/deposit-cash-account.dto';
import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { CreateAccountDto } from '../../../dto/account/create-account.dto';
import { DeleteAccountDto } from '../../../dto/account/delete-account.dto';
import { filterAccountDto } from '../../../dto/account/filter-account.dto';
import { FindAccountDto } from '../../../dto/account/find-account.dto';
import { UpdateAccountDto } from '../../../dto/account/update-account.dto';
import { DepositCashUseCase } from './deposit-cash.use-case';


describe('create account', () => {

 const fakeDeposit = ():IDepositCash => {
  return {
   agency: 1090,
   account: 559020,
   depositValue: 10
  };
 };

 const fakeAccount = ():IAccount => {
  return {
   id:'null',
   agency: 1090,
   account: 559020,
   balance: 100,
   name: 'Maraia'
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
   depositCashOnAccount: async (deposit: DepositCashAccountDto, depositValue: number): Promise<IAccount> => {
    return {
     id:'idasd6546',
     agency: deposit.agency,
     account: 559020,
     balance: 100 + depositValue,
     name:'Hoao'
    };}};
 };


 it('should create a instance of account to make a deposit', () => {
  const repository = makeSut();
    const depositDto = fakeDeposit();
    const result = async ()=> await new DepositCashUseCase(repository).execute(depositDto);
    expect(result).not.toThrow();
 });

});