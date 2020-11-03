import { CreateAccountDto } from "src/dto/create-account.dto";

export class Account{
 private readonly id: string;
 private readonly agencia: number;
 private readonly conta: number;
 private readonly name: string;
 constructor(account: CreateAccountDto) {
  this.agencia = account.agencia;
  this.conta = account.conta;
  this.name = account.name;
  this.id = account.id;
 }
}