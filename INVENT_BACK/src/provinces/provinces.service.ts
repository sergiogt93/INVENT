import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { Province } from './entities/province.entity';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  create(createProvinceDto: CreateProvinceDto) {
    if (this.findOne(createProvinceDto.id)) {
      return new BadRequestException('Ya existe esta provincia');
    }
    return this.provinceRepository.save(createProvinceDto);
  }

  findAll() {
    return this.provinceRepository.find();
  }

  findOne(id: string) {
    return this.provinceRepository.findOneBy({ id });
  }

  async update(id: string, updateProvinceDto: UpdateProvinceDto) {
    const foundProvince = await this.findOne(id)
    if (!foundProvince) {
      return new BadRequestException('No existe esta provincia');
    }
    return this.provinceRepository.update(id, updateProvinceDto);
  }

  async remove(id: string) {
    return this.provinceRepository.delete({ id });
  }
}
