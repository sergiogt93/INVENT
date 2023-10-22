import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from '#src/provinces/entities/province.entity';
import { Repository } from 'typeorm';

interface ProvinceData {
  id: string;
  name: string;
}

@Injectable()
export class ProvinceSeeder {
  private readonly provinces: ProvinceData[] = [
    { id: '08', name: 'Barcelona' },
    { id: '09', name: 'Tarragona' },
  ];

  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {
    this.run();
  }

  public async run() {
    this.provinces.map(async (province) => {
      const exist = await this.provinceRepository.findOneBy({
        id: province.id,
        name: province.name,
      });
      if (!exist) {
        await this.provinceRepository.insert(province);
      }
    });
  }
}
