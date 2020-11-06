import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateAccountDto } from '../../dto/account/create-account.dto';
import { AccountService } from '../../infra/orms/mongo/repositories/account/accounts.service';

@Controller('accounts')
export class AccountController {
 constructor(private accountService: AccountService) { }
 
 @Post()
 createNewAccount(@Body(ValidationPipe) createAccountDto: CreateAccountDto) {
  this.accountService.create(createAccountDto);
 }
}
