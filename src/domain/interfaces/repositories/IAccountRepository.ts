import { CreateAccountDto } from "src/dto/create-account.dto";
import { Account } from "src/infra/orms/mongo/repositories/schemas/account.schema";

export interface IAccountRepository {
 createAccount(account:CreateAccountDto): Promise<Account>;
 updateAccount(): Promise<Account>;
 deleteAccount(): Promise<Account>;
 findOneAccount(): Promise<Account>;
}