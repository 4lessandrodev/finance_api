import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAccountDto{
 id: string | null;

 @IsNotEmpty()
 @IsNumber()
 agencia: number;
 
 @IsNotEmpty()
 @IsNumber()
 conta: number;

 @IsNotEmpty()
 name: string;
}