import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { DepositCashAccountDto } from 'src/dto/account/deposit-cash-account.dto';
import { Deposit } from '../../../domain/entities/Deposit';
import { IAccountRepository } from '../../../domain/interfaces/repositories/IAccountRepository';
import { IUseCase } from '../interfaces/IUseCase';

export class DepositCashUseCase implements IUseCase<DepositCashAccountDto, IAccount>{
 constructor(private repository: IAccountRepository) {}
 execute = async (depositDto:DepositCashAccountDto): Promise<IAccount> => {
  
  const deposit = new Deposit(depositDto);
  return await this.repository.depositCashOnAccount(deposit, depositDto.depositValue);  

 }
}