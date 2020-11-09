import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepositCashUseCase } from 'src/application/use_cases/deposit/deposit-cash.use-case';
import { IDepositCash } from 'src/domain/interfaces';
import { DepositCashAccountDto } from 'src/dto';
import { DepositRepository } from './deposit.repository';

@Injectable()
export class DepositService{
 constructor(
  @InjectRepository(DepositRepository) private depositRepository: DepositRepository
 ) { }
 
 async create(depositCashDto: DepositCashAccountDto): Promise<IDepositCash> {
  const createAccount = new DepositCashUseCase().execute(depositCashDto, this.depositRepository);
  return createAccount;
}

 // Add repository CRUD method
 
}