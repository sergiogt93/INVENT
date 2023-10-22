import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transporter } from '#src/transporter/entities/transporter.entity';

interface TransporterData {
  name: string;
}

const transporters: TransporterData[] = [
  { name: 'Correos' },
  { name: 'Seur' },
  { name: 'Invent' },
];

@Injectable()
export class TransporterSeeder {
  constructor(
    @InjectRepository(Transporter)
    private readonly transporterRepository: Repository<Transporter>,
  ) {
    this.run();
  }

  public async run() {
    transporters.map(async (transporter) => {
      const exist = await this.transporterRepository.findOneBy({
        name: transporter.name,
      });
      if (!exist) {
        await this.transporterRepository.insert(transporter);
      }
    });
  }
}
