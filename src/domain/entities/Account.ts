import { CreateAccountDto } from "../../dto/create-account.dto";
import { AggregateRoot } from "../aggregate-root/AggregateRoot";

export class Account extends AggregateRoot{
 private readonly id: string;
 private readonly agencia: number;
 private readonly conta: number;
 private readonly name: string;

 constructor(account: CreateAccountDto) {
  super();
  this.agencia = account.agencia;
  this.conta = account.conta;
  this.name = account.name;
  this.id = this.validateId(account.id);
 }


}