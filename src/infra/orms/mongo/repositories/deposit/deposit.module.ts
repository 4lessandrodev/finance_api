import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositController } from 'src/presentation/deposits.controller';
import { DepositRepository } from './deposit.repository';
import { DepositService } from './deposit.service';

@Module({
 imports: [
  TypeOrmModule.forFeature([DepositRepository]),
 ],
 controllers:[DepositController],
 providers:[DepositService]
})
export class DepositsModule{}