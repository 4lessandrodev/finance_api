export const UUID_VERSION = 4;
import { v4 as uuid } from 'uuid';

export class AggregateRoot{
 static validateId(id: string):string {
   return (id === null || id === '' || id === undefined) ? uuid() : id;
 }
}