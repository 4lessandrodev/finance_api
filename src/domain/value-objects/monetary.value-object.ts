import { Result } from '../aggregate-root/Result';

interface IMonetaryValueObject{
 value:number
}

export class MonetaryValueObject implements IMonetaryValueObject{
 public value: number;
 private constructor(value:number) {
  this.value = value;
 }
 public static create(value: number): Result<MonetaryValueObject> {
  if (value < 0) {
   return Result.fail<MonetaryValueObject>('Invalid value. It should be positive');
  }
 return Result.ok<MonetaryValueObject>(new MonetaryValueObject(value));
 }
}