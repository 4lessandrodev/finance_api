export const UUID_VERSION = 4;
import { v4 as uuid } from 'uuid';

export class AggregateRoot{
 validateId(id: string):string {
  try {
   return (id === null || id === '' || id === undefined) ? uuid() : id;
  } catch (error) {
   return uuid();
  }
 }
}