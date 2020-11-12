import { Result } from '../aggregate-root/Result';

interface IDigitValueObject{
 value:number
}

export class DigitValueObject implements IDigitValueObject{
 value: number;
 private constructor(value:number) {
  this.value = value;
 }
 public static create(value: number): Result<DigitValueObject> {
  if (value > 9 || value < 0) {
   return Result.fail<DigitValueObject>('Invalid digit number');
  }
 return Result.ok<DigitValueObject>(new DigitValueObject(value));
}
}