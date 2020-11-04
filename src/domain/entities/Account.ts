import { CreateAccountDto } from '../../dto/account/create-account.dto';
import { AggregateRoot } from '../aggregate-root/AggregateRoot';

export class Account extends AggregateRoot{
 private readonly id: string;
 private readonly agency: number;
 private readonly account: number;
 private readonly name: string;

 constructor(account: CreateAccountDto) {
  super();
  this.agency = account.agency;
  this.account = account.account;
  this.name = account.name;
  this.id = this.validateId(account.id);
 }
}