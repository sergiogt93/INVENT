import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';
import { Province } from './entities/province.entity';
import { ProvinceSeeder } from 'bd/seeders/province.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Province])],
  controllers: [ProvincesController],
  providers: [ProvincesService, ProvinceSeeder],
  exports: [ProvincesService],
})
export class ProvincesModule {}
