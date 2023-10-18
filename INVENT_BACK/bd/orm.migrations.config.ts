import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { Province } from '../src/provinces/entities/province.entity';
import { Transporter } from '../src/transporter/entities/transporter.entity';
import { User } from '../src/users/entities/user.entity';
import { CategoryShipping } from '../src/category-shipping/entities/category-shipping.entity';
import { Shipping } from '../src/shipping/entities/shipping.entity';
import { TransporterToProvince } from '../src/transporter-to-province/entities/transporter-to-province.entity';

config();

const ormconfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    Province,
    Transporter,
    User,
    CategoryShipping,
    Shipping,
    TransporterToProvince,
  ],
  migrations: ['./dist/bd/migrations/**/*{.js,.ts}'],
  synchronize: false, // do not set it true in production application,
};

export const bdconfig = new DataSource(ormconfig);
