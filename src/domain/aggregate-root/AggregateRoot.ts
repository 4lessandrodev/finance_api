export const UUID_VERSION = 4;
import { v4 as uuid } from 'uuid';

export class AggregateRoot{
 validateId(id:string) {
  return (id === null) ? uuid() : id;
 }
}