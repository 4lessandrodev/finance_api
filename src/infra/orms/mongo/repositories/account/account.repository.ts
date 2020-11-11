import { IAccount } from '../../../../../domain/interfaces/entities/IAccount';
import { CreateAccountDto } from '../../../../../dto/account/create-account.dto';
import { DeleteAccountDto } from '../../../../../dto/account/delete-account.dto';
import { FilterAccountDto } from '../../../../../dto/account/filter-account.dto';
import { FindAccountDto } from '../../../../../dto/account/find-account.dto';
import { UpdateAccountDto } from '../../../../../dto/account/update-account.dto';

import { EntityRepository, Repository } from 'typeorm';
import { AccountSchema } from '../schemas/account.entity';
import { IAccountRepository } from '../../../../../domain/interfaces/repositories/IAccountRepository';
import { DepositCashOnMyAccountDto } from '../../../../../dto/account/deposit-cash-on-my-account.dto';
import { MakeTransferenceDto } from '../../../../../dto/account/make-transference.dto';
import { Result } from '../../../../../domain/aggregate-root/Result';

@EntityRepository(AccountSchema)
export class AccountRepository extends Repository<AccountSchema> implements IAccountRepository{
 createAccount: (account: CreateAccountDto) => Promise<Result<IAccount>>;
 updateAccount: (account: UpdateAccountDto) => Promise<Result<IAccount>>;
 deleteAccount: (id: DeleteAccountDto) => Promise<Result<void>>;
 findOneAccount: (id: FindAccountDto) => Promise<Result<IAccount>>;
 findManyAccount: (search: FilterAccountDto) => Promise<Result<IAccount[]>>;
 makeTransference: (transference: MakeTransferenceDto) => Promise<Result<IAccount>>;
 depositCashOnMyAccount: (deposit: DepositCashOnMyAccountDto)=> Promise<Result<IAccount>>;
}
