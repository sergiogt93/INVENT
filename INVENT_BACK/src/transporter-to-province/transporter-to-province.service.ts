import { Injectable } from '@nestjs/common';
import { CreateTransporterToProvinceDto } from './dto/create-transporter-to-province.dto';
import { UpdateTransporterToProvinceDto } from './dto/update-transporter-to-province.dto';
import { TransporterToProvince } from './entities/transporter-to-province.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransporterToProvinceService {
  constructor(
    @InjectRepository(TransporterToProvince)
    private readonly transporterToProvinceRepository: Repository<TransporterToProvince>,
  ) {}

  create(createTransporterToProvinceDto: CreateTransporterToProvinceDto) {
    return this.transporterToProvinceRepository.save(
      createTransporterToProvinceDto,
    );
  }

  findAll() {
    return `This action returns all transporterToProvince`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transporterToProvince`;
  }

  update(
    id: number,
    _updateTransporterToProvinceDto: UpdateTransporterToProvinceDto,
  ) {
    return `This action updates a #${id} transporterToProvince`;
  }

  remove(id: number) {
    return `This action removes a #${id} transporterToProvince`;
  }

  transporterShipping(provinceId: string) {
    return this.transporterToProvinceRepository.findOne({
      where: { provinceId },
    });
  }
}
