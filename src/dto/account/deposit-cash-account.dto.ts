import { IsNotEmpty, IsNumber } from 'class-validator';

export class DepositCashAccountDto{
 @IsNotEmpty()
 @IsNumber()
 agency: number;
 
 @IsNotEmpty()
 @IsNumber()
 account: number;

 @IsNotEmpty()
 @IsNumber()
 depositValue: number;
}