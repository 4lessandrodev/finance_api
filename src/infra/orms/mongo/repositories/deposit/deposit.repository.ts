import { IDepositCash } from '../../../../../domain/interfaces/entities/IDepositCash';
import { IDepositCashRepository } from '../../../../../domain/interfaces/repositories/IDepositCashRepository';
import { DepositCashAccountDto } from '../../../../../dto/deposit/deposit-cash-account.dto';
import { EntityRepository, Repository } from 'typeorm';
import { DepositSchema } from '../schemas/deposit.entity';
import { Result } from '../../../../../domain/aggregate-root/Result';

@EntityRepository(DepositSchema)
export class DepositRepository extends Repository<DepositSchema> implements IDepositCashRepository{
 depositCashOnAccount(deposit: DepositCashAccountDto): Promise<Result<IDepositCash>> {
  throw new Error('Method not implemented.' + deposit);
 }
 
}