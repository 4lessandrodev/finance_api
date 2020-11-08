import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { DepositCashAccountDto } from 'src/dto/account/deposit-cash-account.dto';
import { Deposit } from '../../../domain/entities/Deposit';
import { IAccountRepository } from '../../../domain/interfaces/repositories/IAccountRepository';
import { IUseCase } from '../interfaces/IUseCase';

export class DepositCashUseCase implements IUseCase<DepositCashAccountDto, IAccount>{
 execute = async (depositDto:DepositCashAccountDto, repository: IAccountRepository): Promise<IAccount> => {  
  const deposit = new Deposit(depositDto);
  return await repository.depositCashOnAccount(deposit, depositDto.depositValue);  
  
 }
}