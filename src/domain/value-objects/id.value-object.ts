import { Result } from '../aggregate-root/Result';
import {validate} from 'uuid';

interface IIdValueObject{
 value:string
}

export class IdValueObject implements IIdValueObject{
 value: string;
 private constructor(value:string) {
  this.value = value;
 }
 public static create(value: string): Result<IdValueObject> {
  if (validate(value)) {
   return Result.fail<IdValueObject>('Invalid uuid string pattern');
  }
 return Result.ok<IdValueObject>(new IdValueObject(value));
}
}