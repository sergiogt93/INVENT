import { Module } from '@nestjs/common';
import { CategoryShippingService } from './category-shipping.service';
import { CategoryShippingController } from './category-shipping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryShipping } from './entities/category-shipping.entity';
import { CategoryShippingSeeder } from 'bd/seeders/categoryShipping.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryShipping])],
  controllers: [CategoryShippingController],
  providers: [CategoryShippingService, CategoryShippingSeeder],
  exports: [CategoryShippingService],
})
export class CategoryShippingModule {}
