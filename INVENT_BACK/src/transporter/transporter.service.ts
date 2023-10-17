import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTransporterDto } from './dto/create-transporter.dto';
import { UpdateTransporterDto } from './dto/update-transporter.dto';

import { Transporter } from './entities/transporter.entity';
import { TransporterToProvinceService } from 'src/transporter-to-province/transporter-to-province.service';

const TRANPORTER_DEFAULT = 'invent';
@Injectable()
export class TransporterService {
  constructor(
    @InjectRepository(Transporter)
    private readonly transporterRepository: Repository<Transporter>,
    private readonly transporterToProvinceService: TransporterToProvinceService,
  ) {}

  create(createTransporterDto: CreateTransporterDto) {
    if (this.transporterRepository.findOneBy({ name: createTransporterDto.name })) {
      return new BadRequestException('Ya existe este transportista');
    }

    return this.transporterRepository.save(createTransporterDto);
  }

  findAll() {
    return this.transporterRepository.find();
  }

  findOne(id: number) {
    return this.transporterRepository.findOneBy({ id });
  }

  async update(id: number, updateTransporterDto: UpdateTransporterDto) {
    if (this.transporterRepository.findOneBy({ name: updateTransporterDto.name })) {
      return new BadRequestException('Ya existe este transportista');
    }
    return this.transporterRepository.update(id, updateTransporterDto);
  }

  remove(id: number) {
    return this.transporterRepository.softDelete({ id });
  }

  async transporterSend(provinceId: string) {
    const isDefaultTransporter =
      await this.transporterToProvinceService.transporterShipping(provinceId);

    const transporter = isDefaultTransporter
      ? await this.findOne(isDefaultTransporter.id)
      : await this.transporterRepository.findOneBy({
          name: TRANPORTER_DEFAULT,
        });

    return transporter;
  }
}
