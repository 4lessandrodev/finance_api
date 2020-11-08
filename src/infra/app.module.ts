import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/database/typeorm.config';
import {AccountsModule  } from './orms/mongo/repositories/account/accounts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    AccountsModule
  ]
})
export class AppModule {}
