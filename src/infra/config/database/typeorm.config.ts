import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { v4 as uuid} from 'uuid';

export const customPkFactory = () => uuid();

export const typeormConfig:TypeOrmModuleOptions[] = [{
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test',
    poolSize: 1,
    loggerLevel: 'info',
    password: 'root',
    username: 'root',
    pkFactory: customPkFactory(),
    entities: ['./src/infra/orms/**/*.entity.{ts,js}'],
    migrations: ['./src/infra/orms/migrations/**/*.{ts,js}'],
    synchronize: true,
    cli: {
        entitiesDir: './src/infra/orms',
        migrationsDir: './src/infra/orms/migrations'
    },
    useUnifiedTopology: true
}];