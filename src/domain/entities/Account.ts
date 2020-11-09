import { CreateAccountDto } from '../../dto/account/create-account.dto';
import { AggregateRoot } from '../aggregate-root/AggregateRoot';
import {validate} from 'uuid';
import { IAccount } from '../interfaces/entities/IAccount';
import { IAccountWithDebit } from '../interfaces/entities/IAccountWithDebit';
import { IAccountWithDeposit } from '../interfaces/entities/IAccountWithDeposit';


export class Account extends AggregateRoot implements IAccount{
 readonly id: string;
 readonly agency: number;
 readonly account: number;
 readonly name: string;
 readonly balance: number;
 constructor(account: CreateAccountDto) {
  super();
  this.id = this.validateId(account?.id);
  this.agency = account?.agency;
  this.account = account?.account;
  this.name = account?.name;
  this.balance = account?.balance;
  this.validateAccount();
 }

 private isValidAccount(): boolean {
  return (this.account > 0)&&(this.agency > 0)&&(this.balance >= 0)&&(this.name.length >= 3)&&(validate(this.id));
 }

 private validateAccount(): Error | void {
  const isValidAccount = this.isValidAccount();
  if (!isValidAccount) { throw new Error('Invalid account params');}
 }

 applyDepositValue(deposit: IAccountWithDeposit): Account{
  const validDepositValue = deposit.value < 0 ? 0 : deposit.value;
  if (validDepositValue <= 0) {
   throw new Error('Not valid value');
  }
  const updatedBalance = this.balance + validDepositValue;
  return new Account({...this, balance: updatedBalance});
 }

 applyDebitValue(debit: IAccountWithDebit): Account | Error{
  const validDebit = debit.value < 0 ? 0 : debit.value;
  if (this.balance <= 0 || (this.balance - validDebit) < 0) {
   throw new Error('Insufficient funds for this operation');
  }
  const updatedBalance = this.balance - validDebit;
  return new Account({ ...this, balance: updatedBalance});
 }

}