import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import {AccountsModule  } from './orms/mongo/repositories/repositories/account/accounts.module';

@Module({
  imports: [
    DatabaseModule,
    AccountsModule
  ]
})
export class AppModule {}
