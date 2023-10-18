import { TransporterToProvince } from '../../transporter-to-province/entities/transporter-to-province.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Province {
  @Column({ primary: true, generated: false, unique: true })
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @OneToMany(
    () => TransporterToProvince,
    (transporterToProvince) => transporterToProvince.province,
  )
  transporterToProvince: TransporterToProvince[];
}
