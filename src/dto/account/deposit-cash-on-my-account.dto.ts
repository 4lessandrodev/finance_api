import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { UpdateAccountDto } from './update-account.dto';

export class DepositCashOnMyAccountDto implements UpdateAccountDto{
 @IsNotEmpty()
 @IsUUID('4')
 id: string;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 agency: number;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 account: number;
 
 @IsNotEmpty()
 name: string;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:2})
 balance: number;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:2})
 value: number;
}