
import { Connection } from 'mongoose';
import { AccountSchema } from '../schemas/account.schema';

export const accountProviders = [
  {
    provide: 'ACCOUNT_MODEL',
    useFactory: (connection: Connection) => connection.model('Account', AccountSchema),
    inject: ['DATABASE_CONNECTION'],
  }
];