import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { ShippingController } from './shipping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipping } from './entities/shipping.entity';
import { CategoryShipping } from '#src/category-shipping/entities/category-shipping.entity';
import { Transporter } from '#src/transporter/entities/transporter.entity';
import { TransporterModule } from '#src/transporter/transporter.module';
import { CategoryShippingModule } from '#src/category-shipping/category-shipping.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Shipping, CategoryShipping, Transporter]),
    TransporterModule,
    CategoryShippingModule,
  ],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class ShippingModule {}
