import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAccountDto{
 id: string | null;

 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 agency: number;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 account: number;

 @IsNotEmpty()
 name: string;

 @IsNotEmpty()
 @IsNumber({ maxDecimalPlaces: 2 })
 balance: number;

}