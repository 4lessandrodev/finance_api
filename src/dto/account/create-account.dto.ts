import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAccountDto{
 id: string | null;

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
 balance:number
}