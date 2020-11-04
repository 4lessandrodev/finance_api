import { CreateAccountDto } from '../../dto/account/create-account.dto';
import { AggregateRoot } from '../aggregate-root/AggregateRoot';
import {validate} from 'uuid';
import { IAccount } from '../interfaces/entities/IAccount';

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

 isValidAccount(): boolean {
  return (this.account > 0) &&
   (this.agency > 0) &&
   (this.balance >= 0) &&
   (this.name.length >= 3) &&
   (validate(this.id));
 }

 validateAccount(): Error | void {
  const isValidAccount = this.isValidAccount();
  if (!isValidAccount) {
   throw new Error('Invalid account params');
  }
 }
}