import { Result } from '../aggregate-root/Result';

interface INameValueObject{
 value:string
}

export class NameValueObject implements INameValueObject{
 public value: string;
 private constructor(value:string) {
  this.value = value;
 }
 public static create(value: string): Result<NameValueObject> {
  if (value.length < 3) {
   return Result.fail<NameValueObject>('Invalid name length. Name should be min 3 characters');
  }
 return Result.ok<NameValueObject>(new NameValueObject(value));
 }
}