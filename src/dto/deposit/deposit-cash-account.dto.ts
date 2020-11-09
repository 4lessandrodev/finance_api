import { IsNotEmpty, IsNumber } from 'class-validator';
import { ToAccountDto } from '../account/transference-to-account.dto';

export class DepositCashAccountDto implements ToAccountDto{
 id: string | null;

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