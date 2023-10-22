import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['#src/**/*.entity.ts'],
  autoLoadEntities: true,
  migrations: ['#bd/migrations/**/*{.ts,.js}'],
  synchronize: false, // do not set it true in production application,
};
