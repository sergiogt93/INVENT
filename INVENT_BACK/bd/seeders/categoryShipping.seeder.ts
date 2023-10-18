import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ACRONYMS_SHIPPING } from '../../src/category-shipping/enums/intervalShipping.enum';
import { CategoryShipping } from '../../src/category-shipping/entities/category-shipping.entity';

interface CategoryShippingData {
  acronym: ACRONYMS_SHIPPING;
  description: string;
  minWeight: number;
  maxWeight: number;
}

@Injectable()
export class CategoryShippingSeeder {
  private readonly categoriesShipping: CategoryShippingData[] = [
    {
      acronym: ACRONYMS_SHIPPING.MAXLIGHT,
      description: 'Paquete ultra ligero',
      minWeight: 0,
      maxWeight: 0.1,
    },
    {
      acronym: ACRONYMS_SHIPPING.LIGHT,
      description: 'Paquete ligero',
      minWeight: 0.1,
      maxWeight: 0.3,
    },
    {
      acronym: ACRONYMS_SHIPPING.STANDARD,
      description: 'Paquete estándar',
      minWeight: 0.3,
      maxWeight: 5,
    },
    {
      acronym: ACRONYMS_SHIPPING.HEAVY,
      description: 'Paquete pesado',
      minWeight: 5,
      maxWeight: 10,
    },
    {
      acronym: ACRONYMS_SHIPPING.LARGEVOLUM,
      description: 'Gran volumen',
      minWeight: 10,
      maxWeight: 10000,
    },
  ];

  constructor(
    @InjectRepository(CategoryShipping)
    private readonly categoryShippingRepository: Repository<CategoryShipping>,
  ) {
    this.run();
  }

  public async run() {
    this.categoriesShipping.map(async (categoryShipping) => {
      const exist = await this.categoryShippingRepository.findOneBy({
        acronym: categoryShipping.acronym,
      });
      if (!exist) {
        await this.categoryShippingRepository.insert(categoryShipping);
      }
    });
  }
}
