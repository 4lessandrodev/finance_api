import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteAccountDto{
 @IsNotEmpty()
 @IsUUID('4')
 id: string;
}