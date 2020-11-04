import { DeleteAccountDto } from '../../../dto/account/delete-account.dto';
import { filterAccountDto } from '../../../dto/account/filter-account.dto';
import { FindAccountDto } from '../../../dto/account/find-account.dto';
import { UpdateAccountDto } from '../../../dto/account/update-account.dto';
import { CreateAccountDto } from '../../../dto/account/create-account.dto';
import { IAccount } from '../entities/IAccount';

export interface IAccountRepository {
 createAccount(account:CreateAccountDto): Promise<IAccount>;
 updateAccount(account:UpdateAccountDto): Promise<IAccount>;
 deleteAccount(id:DeleteAccountDto): Promise<void>;
 findOneAccount(id:FindAccountDto): Promise<IAccount>;
 findManyAccount(search:filterAccountDto): Promise<IAccount[]>;
}