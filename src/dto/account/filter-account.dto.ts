import { IsOptional, IsString } from 'class-validator';

export class FilterAccountDto{
 @IsOptional()
 @IsString()
 search:string
}