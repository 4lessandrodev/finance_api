import { IAccount } from "src/domain/interfaces/entities/IAccount";
import { IAccountRepository } from "src/domain/interfaces/repositories/IAccountRepository";
import { CreateAccountDto } from "src/dto/create-account.dto";

export const createAccount = async (account:CreateAccountDto, repository:IAccountRepository):Promise<IAccount> => {
 return await repository.createAccount(account);
}