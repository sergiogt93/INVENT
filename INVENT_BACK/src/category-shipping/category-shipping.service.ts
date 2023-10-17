import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryShippingDto } from './dto/create-category-shipping.dto';
import { UpdateCategoryShippingDto } from './dto/update-category-shipping.dto';

import { CategoryShipping } from './entities/category-shipping.entity';

import { calculatePrice } from './enums/intervalShipping.enum';

@Injectable()
export class CategoryShippingService {
  constructor(
    @InjectRepository(CategoryShipping)
    private readonly categoryShippingRepository: Repository<CategoryShipping>,
  ) {}

  async create(createCategoryShippingDto: CreateCategoryShippingDto) {
    if(await this.existCategory(createCategoryShippingDto)) {
      return new BadRequestException("Ya existe esta categoria");
    }
    return this.categoryShippingRepository.save(createCategoryShippingDto);
  }

  findAll() {
    return this.categoryShippingRepository.find();
  }

  findOne(id: number) {
    return this.categoryShippingRepository.findOneBy({ id });
  }

  update(id: number, updateCategoryShippingDto: UpdateCategoryShippingDto) {
    return this.categoryShippingRepository.update(
      id,
      updateCategoryShippingDto,
    );
  }

  remove(id: number) {
    return this.categoryShippingRepository.delete({ id });
  }

  existCategory(createCategoryShippingDto: CreateCategoryShippingDto) {
    return this.categoryShippingRepository.findOneBy({
      acronym: createCategoryShippingDto.acronym, 
      description: createCategoryShippingDto.description
    })
  }

  findByIntervalWeight(weight: number) {
    return this.categoryShippingRepository
      .createQueryBuilder('CategoryShipping')
      .where('CategoryShipping.minWeight < :minWeight', { minWeight: weight })
      .andWhere('CategoryShipping.maxWeight > :maxWeight', {
        maxWeight: weight,
      })
      .getOne()
  }

  priceTotal(acronym: string, weight: number) {
    return calculatePrice[acronym](weight);
  }
}
