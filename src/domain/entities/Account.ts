import { CreateAccountDto } from '../../dto/account/create-account.dto';
import { AggregateRoot } from '../aggregate-root/AggregateRoot';
import {validate} from 'uuid';
import { IAccount } from '../interfaces/entities/IAccount';
import { IAccountWithDebit } from '../interfaces/entities/IAccountWithDebit';
import { IAccountWithDeposit } from '../interfaces/entities/IAccountWithDeposit';
import { Result } from '../aggregate-root/Result';


export class Account extends AggregateRoot implements IAccount{
 readonly id: string;
 readonly agency: number;
 readonly account: number;
 readonly name: string;
 readonly balance: number;
 private constructor(account: CreateAccountDto) {
  super();
  this.id = account.id;
  this.agency = account.agency;
  this.account = account.account;
  this.name = account.name;
  this.balance = account.balance;
 }


 applyDepositValue(deposit: IAccountWithDeposit): Result<Account>{
  if (deposit.value <= 0) {
   return Result.fail<Account>('Invalid value');
  }
  const updatedBalance = this.balance + deposit.value;
  return Result.ok<Account>(new Account({ ...this, balance: updatedBalance }));
 }


 applyDebitValue(debit: IAccountWithDebit): Result<Account>{
  const validDebitValue = debit.value < 0 ? 0 : debit.value;
  if (this.balance <= 0 || (this.balance - validDebitValue) < 0) {
   return Result.fail<Account>('Insufficient funds for this operation');
  }
  const updatedBalance = this.balance - validDebitValue;
  return Result.ok<Account>(new Account({ ...this, balance: updatedBalance}));
 }


 public static create(account: CreateAccountDto):Result<Account> {
  account.id = this.validateId(account?.id);
  
  const isValid = (account.account > 0) && (account.agency > 0) &&
   (account.balance >= 0) && (account.name.length >= 3) && (validate(account.id));
  
  if (!isValid) {
   return Result.fail<Account>('Invalid account params');
  }
  return Result.ok<Account>(new Account(account));
 }

}