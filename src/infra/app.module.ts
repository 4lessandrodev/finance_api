import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/database/typeorm.config';
import {AccountsModule  } from './orms/mongo/repositories/account/accounts.module';
import { DepositsModule } from './orms/mongo/repositories/deposit/deposit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    AccountsModule,
    DepositsModule
  ]
})
export class AppModule {}
