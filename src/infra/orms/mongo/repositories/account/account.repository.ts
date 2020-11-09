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

@EntityRepository(AccountSchema)
export class AccountRepository extends Repository<AccountSchema> implements IAccountRepository{
 createAccount: (account: CreateAccountDto) => Promise<IAccount>;
 updateAccount: (account: UpdateAccountDto) => Promise<IAccount>;
 deleteAccount: (id: DeleteAccountDto) => Promise<void>;
 findOneAccount: (id: FindAccountDto) => Promise<IAccount>;
 findManyAccount: (search: FilterAccountDto) => Promise<IAccount[]>;
 makeTransference: (transference: MakeTransferenceDto) => Promise<IAccount>;
 depositCashOnMyAccount: (deposit: DepositCashOnMyAccountDto)=> Promise<IAccount>;
}
