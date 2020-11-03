import { IAccount } from "../../../domain/interfaces/entities/IAccount";
import { IAccountRepository } from "../../../domain/interfaces/repositories/IAccountRepository";
import { CreateAccountDto } from "../../../dto/create-account.dto";

export const createAccount = async (account:CreateAccountDto, repository:IAccountRepository):Promise<IAccount> => {
 return await repository.createAccount(account);
}