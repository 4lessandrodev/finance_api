import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { v4 as uuid} from 'uuid';

export const customPkFactory = () => uuid();

export const typeormConfig:TypeOrmModuleOptions = {
    type:'mongodb',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    password: process.env.TYPEORM_PASSWORD,
    username: process.env.TYPEORM_USERNAME,
    database: process.env.TYPEORM_DATABASE,
    poolSize: 1,
    loggerLevel: 'info',
    logging:true,
    useUnifiedTopology: true,
    pkFactory: customPkFactory(),
    entities: ['dist/infra/orms/**/*.entity.{ts,js}'],
    migrations: ['dist/infra/orms/migrations/**/*.{ts,js}'],
    cli: {
        entitiesDir: 'dist/infra/orms',
        migrationsDir: 'dist/infra/orms/migrations'
    },
    synchronize: true,
    ssl: true,
    authSource: 'admin',
};