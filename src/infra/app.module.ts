import { Module } from '@nestjs/common';
import { AccountController } from '../presentation/account/account.controller';
import { CreateAccountService } from '../application/use_cases/account/create-account/create-account.service';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [CreateAccountService],
})
export class AppModule {}
