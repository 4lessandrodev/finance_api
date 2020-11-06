import { validate } from 'uuid';
import { AggregateRoot } from '../aggregate-root/AggregateRoot';
import { IDepositCash } from '../interfaces/entities/IDepositCash';

export class Deposit extends AggregateRoot implements IDepositCash{
 readonly id: string;
 readonly agency: number;
 readonly account: number;
 readonly depositValue: number;

 constructor(deposit: IDepositCash) {
  super();
  this.id = this.validateId(deposit?.id);
  this.agency = deposit.agency;
  this.account = deposit.account;
  this.depositValue = deposit.depositValue;
  this.validateDeposit();
 }

 isValidDeposit(): boolean {
  return (this.account > 0)&&(this.agency > 0)&&(this.depositValue > 0)&&(validate(this.id));
 }

 validateDeposit(): Error | void {
  const isValidDeposit = this.isValidDeposit();
  if (!isValidDeposit) { throw new Error('Invalid deposit params');}
 }

}