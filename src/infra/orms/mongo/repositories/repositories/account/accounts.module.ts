
import { Module } from '@nestjs/common';
import { AccountController } from '../../../../../../presentation/account/accounts.controller';
import { DatabaseModule } from '../../../../../config/database/database.module';
import { AccountService } from './accounts.service';
import { accountProviders } from './accounts.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [AccountController],
  providers: [
    AccountService,
    ...accountProviders,
  ],
})
export class AccountsModule {}