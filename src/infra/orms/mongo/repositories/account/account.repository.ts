import { IAccount } from 'src/domain/interfaces/entities/IAccount';
import { CreateAccountDto } from 'src/dto/account/create-account.dto';
import { DeleteAccountDto } from 'src/dto/account/delete-account.dto';
import { DepositCashAccountDto } from 'src/dto/account/deposit-cash-account.dto';
import { filterAccountDto } from 'src/dto/account/filter-account.dto';
import { FindAccountDto } from 'src/dto/account/find-account.dto';
import { UpdateAccountDto } from 'src/dto/account/update-account.dto';
import { IAccountRepo } from 'src/infra/interfaces/IAccountRepo';
import { EntityRepository, Repository } from 'typeorm';
import { AccountSchema } from '../schemas/account.entity';

@EntityRepository(AccountSchema)
export class AccountRepository extends Repository<AccountSchema> implements IAccountRepo{
 createAccount: (account: CreateAccountDto) => Promise<IAccount>;
 updateAccount: (account: UpdateAccountDto) => Promise<IAccount>;
 deleteAccount: (id: DeleteAccountDto) => Promise<void>;
 findOneAccount: (id: FindAccountDto) => Promise<IAccount>;
 findManyAccount: (search: filterAccountDto) => Promise<IAccount[]>;
 depositCashOnAccount: (deposit: DepositCashAccountDto) => Promise<IAccount>;
}