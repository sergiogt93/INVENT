import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { TransporterService } from '#src/transporter/transporter.service';
import { Transporter } from '#src/transporter/entities/transporter.entity';
import { CategoryShippingService } from '#src/category-shipping/category-shipping.service';
import { calculatePrice } from '#src/category-shipping/enums/intervalShipping.enum';
// import { UpdateShippingDto } from './dto/update-shipping.dto';
import { Shipping } from './entities/shipping.entity';

@Injectable()
export class ShippingService {
  transporters: Transporter[];

  constructor(
    @InjectRepository(Shipping)
    private readonly shippingRepository: Repository<Shipping>,
    private readonly transporterService: TransporterService,
    private readonly categoryShippingService: CategoryShippingService,
  ) {}

  async create(createShippingDto: CreateShippingDto) {
    const province = createShippingDto.postalCode.slice(0, 2);
    const transporter = await this.transporterService.transporterSend(province);
    if (!transporter) {
      return new NotFoundException('No se encuetra el transportista');
    }
    const categoryShipping =
      await this.categoryShippingService.findByIntervalWeight(
        createShippingDto.weight,
      );
    if (!categoryShipping) {
      return new NotFoundException(
        'No se encuetra la categoria del paquete con ese intervalo',
      );
    }
    const totalPrice = calculatePrice[categoryShipping.acronym](
      createShippingDto.weight,
    );

    const newShipping = {
      destinationAddress: createShippingDto.destinationAddress,
      postalCode: createShippingDto.postalCode,
      destinationName: createShippingDto.destinationName,
      senderName: createShippingDto.senderName,
      weight: +createShippingDto.weight + 'kg',
      totalPrice: totalPrice,
      categoryId: categoryShipping.id,
      transporterId: transporter.id,
    };

    return this.shippingRepository.save(newShipping);
  }

  findAll() {
    return this.shippingRepository.find({
      relations: ['transporter'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} shipping`;
  }

  // update(id: number, updateShippingDto: UpdateShippingDto) {
  //   return `This action updates a #${id} shipping`;
  // }

  remove(id: number) {
    return `This action removes a #${id} shipping`;
  }
}
