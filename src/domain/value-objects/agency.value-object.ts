import { Result } from '../aggregate-root/Result';

interface IAgencyValueObject{
 value:number
}

export class AgencyNumber implements IAgencyValueObject{
 value: number;
 private constructor(value:number) {
  this.value = value;
 }
 public static create(value: number): Result<AgencyNumber> {
  if (value > 9999 || value.toString().length < 4 || value < 0) {
   return Result.fail<AgencyNumber>('Invalid agency number');
  }
 return Result.ok<AgencyNumber>(new AgencyNumber(value));
}
}