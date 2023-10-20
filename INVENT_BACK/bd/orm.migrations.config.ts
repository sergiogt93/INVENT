import { ConfigModule } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const ormconfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '../src/**/*.entity.ts'],
  migrations: [__dirname + './dist/bd/migrations/**/*{.js,.ts}'],
  synchronize: false,
};

export const bdconfig = new DataSource(ormconfig);
