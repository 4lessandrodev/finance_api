import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { v4 as uuid} from 'uuid';

export const customPkFactory = () => uuid();

export const typeormConfig:TypeOrmModuleOptions[] = [{
    type: 'mongodb',
    host: 'cluster0.2nyar.mongodb.net',
    port: 27017,
    database: 'test',
    poolSize: 3,
    loggerLevel: 'info',
    password: 'admin',
    username: 'admin',
    pkFactory: customPkFactory(),
    entities: [`${__dirname}/../**/*.entity.ts`],
    synchronize:true
}];