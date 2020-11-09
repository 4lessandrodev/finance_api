import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { FromAccountDto } from './transference-from-account.dto';
import { ToAccountDto } from './transference-to-account.dto';

export class MakeTransferenceDto implements FromAccountDto, ToAccountDto{
 @IsNotEmpty()
 @IsUUID('4')
 id: string;

 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 fromAgency: number;
 
 @IsNotEmpty()
 @IsNumber({maxDecimalPlaces:0})
 fromAccount: number;

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