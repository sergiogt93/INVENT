import { Column, Entity, ManyToOne } from 'typeorm';
import { Transporter } from '../../transporter/entities/transporter.entity';
import { Province } from '../../provinces/entities/province.entity';

@Entity()
export class TransporterToProvince {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  transporterId: number;

  @Column()
  provinceId: string;

  @ManyToOne(
    () => Transporter,
    (transporter) => transporter.transporterToProvince,
  )
  transporter: Transporter;

  @ManyToOne(() => Province, (province) => province.transporterToProvince)
  province: Province;
}
