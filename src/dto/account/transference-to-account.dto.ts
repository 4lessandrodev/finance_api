import { IsNotEmpty, IsNumber } from 'class-validator';

export class ToAccountDto{
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 toAgency: number;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 toAccount: number;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:2})
 value: number;
}