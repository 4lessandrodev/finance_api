import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class UpdateAccountDto{
 @IsNotEmpty()
 @IsUUID('4')
 id: string;
 
 @IsNotEmpty()
 @IsNumber()
 agency: number;
 
 @IsNotEmpty()
 @IsNumber()
 account: number;
 
 @IsNotEmpty()
 name: string;

 @IsNotEmpty()
 @IsNumber()
 balance: number;
}