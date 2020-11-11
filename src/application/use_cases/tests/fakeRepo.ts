import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { IAccountWithDeposit } from '../../../domain/interfaces/entities/IAccountWithDeposit';
import { CreateAccountDto } from '../../../dto/account/create-account.dto';
import { DeleteAccountDto } from '../../../dto/account/delete-account.dto';
import { DepositCashOnMyAccountDto } from '../../../dto/account/deposit-cash-on-my-account.dto';
import { FilterAccountDto } from '../../../dto/account/filter-account.dto';
import { FindAccountDto } from '../../../dto/account/find-account.dto';
import { UpdateAccountDto } from '../../../dto/account/update-account.dto';
import { v4 as uuid } from 'uuid';
import { MakeTransferenceDto } from '../../../dto/account/make-transference.dto';
import { IDepositCash } from '../../../domain/interfaces/entities/IDepositCash';
import { DepositCashAccountDto } from '../../../dto/deposit/deposit-cash-account.dto';
import { Result } from '../../../domain/aggregate-root/Result';

export const fakeAccountWithDeposit = ():IAccountWithDeposit => {
 return {
  id:null,
  agency: 1090,
  account: 559020,
  name: 'Joao Da Se',
  balance: 1090,
  value: 10,
  toAccount:559020,
  toAgency:1090
 };
};

export const fakeAccountWithId = ():IAccount => {
 return {
  id:uuid(),
  agency: 1090,
  account: 559020,
  name: 'Joao Da Se',
  balance: 1090
 };
};

export const fakeAccount = ():IAccount => {
 return {
  id:null,
  agency: 1090,
  account: 559020,
  name: 'Joao Da Se',
  balance: 1090
 };
};

export const fakeCustomAccount = (
 id?:string,
 agency?:number,
 account?:number,
 name?:string,
 balance?:number
): IAccount => {
 return {
  id,
  agency,
  account,
  name,
  balance
 };
};

export const fakeDeposit = ():IDepositCash => {
 return {
    id:null,
    toAgency: 1090,
    toAccount: 559020,
    value: 10
 };
};

export const fakeDepositWithId = ():IDepositCash => {
 return {
    id:uuid(),
    toAgency: 1090,
    toAccount: 559020,
    value: 10
 };
};

export const fakeAccountRepo = () => {
 const accounts:IAccount[] = [fakeAccountWithId(), fakeAccountWithId(), fakeAccountWithId(),fakeAccountWithId()];
 return {
    createAccount: async (account: CreateAccountDto): Promise<Result<IAccount>> => {
       return Result.ok<IAccount>(account);
    },
    updateAccount: async (account: UpdateAccountDto): Promise<Result<IAccount>> => {
       return Result.ok<IAccount>(account);
    },
    deleteAccount: async (id: DeleteAccountDto): Promise<Result<void>> => {
       console.log(id);
       return Result.ok<void>();
    },
    findOneAccount: async (fn: FindAccountDto): Promise<Result<IAccount>> => {
       const accountOrError = accounts.find((acc) => acc.id === fn.id);
       if (!accountOrError) {
          return Result.fail<IAccount>('Not found');
       }
       return Result.ok<IAccount>(accountOrError);
    },
    findManyAccount: async (search: FilterAccountDto): Promise<Result<IAccount[]>> => {
       const accountOrError = accounts.filter((acc) => acc.id === search.search);
       if (accountOrError.length === 0) {
         return Result.fail<IAccount[]>('Not found');
      }
       return Result.ok<IAccount[]>(accountOrError);
    },
  makeTransference: async (transference: MakeTransferenceDto): Promise<Result<IAccount>> => {
     console.log(transference);
   return Result.ok<IAccount>(fakeAccount());
  },
    depositCashOnMyAccount: async (account: DepositCashOnMyAccountDto): Promise<Result<IAccount>> => {
       account.balance += account.value;
       return Result.ok<IAccount>(account);
    }
 };
};


export const fakeDepositRepo = () => {
 const deposits:IDepositCash[] = [fakeDepositWithId(), fakeDepositWithId(), fakeDepositWithId(), fakeDepositWithId()];
 return {
  async depositCashOnAccount(deposit: DepositCashAccountDto): Promise<Result<IDepositCash>> {
   const depositResult = { value:deposit.value, toAccount: deposit.toAccount, toAgency: deposit.toAgency };
   deposits.push(depositResult);
   return Result.ok<IDepositCash>(depositResult);
  }
};
};