import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils/forward-ref.util';
import { TransporterToProvinceService } from './transporter-to-province.service';
import { TransporterToProvinceController } from './transporter-to-province.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransporterToProvince } from './entities/transporter-to-province.entity';
import { Transporter } from '../../src/transporter/entities/transporter.entity';
import { Province } from '../../src/provinces/entities/province.entity';
import { TransporterModule } from '../../src/transporter/transporter.module';
import { ProvincesModule } from '../../src/provinces/provinces.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransporterToProvince, Transporter, Province]),
    forwardRef(() => TransporterModule),
    forwardRef(() => ProvincesModule),
  ],
  controllers: [TransporterToProvinceController],
  providers: [TransporterToProvinceService],
  exports: [TransporterToProvinceService],
})
export class TransporterToProvinceModule {}
