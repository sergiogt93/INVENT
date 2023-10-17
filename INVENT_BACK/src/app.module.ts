import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProvincesModule } from './provinces/provinces.module';
import { ShippingModule } from './shipping/shipping.module';
import { TransporterModule } from './transporter/transporter.module';
import { CategoryShippingModule } from './category-shipping/category-shipping.module';
import { TransporterToProvinceModule } from './transporter-to-province/transporter-to-province.module';
import { ormconfig } from 'bd/orm.coonfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    AuthModule,
    ProvincesModule,
    ShippingModule,
    TransporterModule,
    CategoryShippingModule,
    TransporterToProvinceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
