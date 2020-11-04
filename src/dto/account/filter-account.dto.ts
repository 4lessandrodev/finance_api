import { IsOptional, IsString } from 'class-validator';

export class filterAccountDto{
 @IsOptional()
 @IsString()
 search:string
}