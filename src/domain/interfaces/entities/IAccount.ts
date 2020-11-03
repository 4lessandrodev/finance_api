import { AggregateRoot } from "src/domain/aggregate-root/AggregateRoot";

export class IAccount extends AggregateRoot{
 id: string | null;
 agencia: number;
 conta: number;
 name: string;
}