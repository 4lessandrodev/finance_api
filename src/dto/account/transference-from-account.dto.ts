import { IsNotEmpty, IsNumber } from 'class-validator';

export class FromAccountDto{
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 fromAgency: number;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 fromAccount: number;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:2})
 value: number;
}