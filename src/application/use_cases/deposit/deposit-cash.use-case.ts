import { DepositCashAccountDto } from '../../../dto';
import { Deposit } from '../../../domain/entities/Deposit';
import { IUseCase } from '../interfaces/IUseCase';
import { IDepositCash } from '../../../domain/interfaces/entities/IDepositCash';
import { IDepositCashRepository } from '../../../domain/interfaces/repositories/IDepositCashRepository';

export class DepositCashUseCase implements IUseCase<DepositCashAccountDto, IDepositCash>{
 execute = async (depositDto:IDepositCash, repository: IDepositCashRepository): Promise<IDepositCash> => {  
  const deposit = new Deposit(depositDto);
  return await repository.depositCashOnAccount(deposit);  
 }
}