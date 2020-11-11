import { validate } from 'uuid';
import { AggregateRoot } from '../aggregate-root/AggregateRoot';
import { Result } from '../aggregate-root/Result';
import { IDepositCash } from '../interfaces/entities/IDepositCash';

export class Deposit extends AggregateRoot implements IDepositCash{
 readonly id: string;
 readonly toAgency: number;
 readonly toAccount: number;
 readonly value: number;
 
 private constructor(deposit: IDepositCash) {
  super();
  this.id = deposit.id;
  this.toAgency = deposit.toAgency;
  this.toAccount = deposit.toAccount;
  this.value = deposit.value;
 }
 
 
 public static create(deposit: IDepositCash):Result<Deposit> {
  deposit.id = this.validateId(deposit?.id);
  const isValidDeposit = (deposit.toAccount > 0)&&(deposit.toAgency > 0)&&(deposit.value > 0)&&(validate(deposit.id));
  if (!isValidDeposit) {
   return Result.fail<Deposit>('Invalid deposit params');
  }
  return Result.ok<Deposit>(new Deposit(deposit));
 }
 
}