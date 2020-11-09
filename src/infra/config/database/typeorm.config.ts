import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { v4 as uuid} from 'uuid';

export const customPkFactory = () => uuid();

export const typeormConfig:TypeOrmModuleOptions = {
    type: 'mongodb',
    host: 'cluster0.2nyar.mongodb.net',
    port: 27017,
    password: 'admin',
    username: 'admin',
    database: 'test',
    poolSize: 1,
    loggerLevel: 'info',
    logging:true,
    useUnifiedTopology: true,
    pkFactory: customPkFactory(),
    entities: ['./src/infra/orms/**/*.entity.{ts,js}'],
    migrations: ['./src/infra/orms/migrations/**/*.{ts,js}'],
    cli: {
        entitiesDir: './src/infra/orms',
        migrationsDir: './src/infra/orms/migrations'
    },
    synchronize: true,
    ssl: true,
    authSource: 'admin',
    // url:'mongodb+srv://admin:admin@cluster0.2nyar.mongodb.net/test?retryWrites=true&w=majority'
};