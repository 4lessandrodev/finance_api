
import { Module } from '@nestjs/common';
import { AccountController } from '../../../../../presentation/accounts.controller';
import { AccountService } from './accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([AccountRepository])
  ],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountsModule {}