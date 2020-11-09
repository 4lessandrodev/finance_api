import { validate } from 'uuid';
import { AggregateRoot } from '../aggregate-root/AggregateRoot';
import { IDepositCash } from '../interfaces/entities/IDepositCash';

export class Deposit extends AggregateRoot implements IDepositCash{
 readonly id: string;
 readonly toAgency: number;
 readonly toAccount: number;
 readonly value: number;

 constructor(deposit: IDepositCash) {
  super();
  this.id = this.validateId(deposit?.id);
  this.toAgency = deposit.toAgency;
  this.toAccount = deposit.toAccount;
  this.value = deposit.value;
  this.validateDeposit();
 }

 private isValidDeposit(): boolean {
  return (this.toAccount > 0)&&(this.toAgency > 0)&&(this.value > 0)&&(validate(this.id));
 }

 private validateDeposit(): Error | void {
  const isValidDeposit = this.isValidDeposit();
  if (!isValidDeposit) { throw new Error('Invalid deposit params');}
 }

}