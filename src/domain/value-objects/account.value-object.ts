import { Result } from '../aggregate-root/Result';

interface IAccountValueObject{
 value:number
}

export class AccountValueObject implements IAccountValueObject{
 value: number;
 private constructor(value:number) {
  this.value = value;
 }
 public static create(value: number): Result<AccountValueObject> {
  if (value > 99999 || value.toString().length < 5 || value < 0) {
   return Result.fail<AccountValueObject>('Invalid account number');
  }
 return Result.ok<AccountValueObject>(new AccountValueObject(value));
}
}