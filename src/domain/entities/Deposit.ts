import { IDepositCash } from '../interfaces/entities/IDepositCash';

export class Deposit implements IDepositCash{
 readonly agency: number;
 readonly account: number;
 readonly depositValue: number;

 constructor(deposit: IDepositCash) {
  this.agency = deposit.agency;
  this.account = deposit.account;
  this.depositValue = deposit.depositValue;
  this.validateDeposit();
 }

 isValidDeposit(): boolean {
  return (this.account > 0)&&(this.agency > 0)&&(this.depositValue > 0);
 }

 validateDeposit(): Error | void {
  const isValidDeposit = this.isValidDeposit();
  if (!isValidDeposit) { throw new Error('Invalid deposit params');}
 }

}