import { IAccountRepository } from "src/domain/interfaces/repositories/IAccountRepository";
import { Account } from "../../schemas/account.schema";


export class AccountRespository extends Account implements IAccountRepository{
 createAccount = async function(): Promise<Account>{
  throw new Error("Method not implemented.");
 }
 updateAccount = async function(): Promise<Account>{
  throw new Error("Method not implemented.");
 }
 deleteAccount = async function(): Promise<Account>{
  throw new Error("Method not implemented.");
 }
 findOneAccount = async function(): Promise<Account>{
  throw new Error("Method not implemented.");
 }
}