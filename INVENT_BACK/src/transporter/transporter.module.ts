import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils/forward-ref.util';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransporterService } from './transporter.service';
import { TransporterController } from './transporter.controller';
import { Transporter } from './entities/transporter.entity';
import { TransporterToProvince } from '../transporter-to-province/entities/transporter-to-province.entity';
import { TransporterToProvinceModule } from '../transporter-to-province/transporter-to-province.module';
import { ProvincesModule } from '../../src/provinces/provinces.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transporter, TransporterToProvince]),
    forwardRef(() => TransporterToProvinceModule),
    ProvincesModule,
  ],
  controllers: [TransporterController],
  providers: [TransporterService],
  exports: [TransporterService],
})
export class TransporterModule {}
