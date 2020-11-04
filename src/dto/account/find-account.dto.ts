import { IsNotEmpty, IsUUID } from 'class-validator';

export class FindAccountDto{
 @IsNotEmpty()
 @IsUUID('4')
 id: string;
}