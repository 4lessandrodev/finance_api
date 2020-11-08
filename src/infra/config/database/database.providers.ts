import { Connection, createConnection } from 'typeorm';

export const connection: Connection = await createConnection({
    type: 'mongodb',
    host: 'cluster0.2nyar.mongodb.net',
    port: 27017,
    database: 'test'
});
