import { Shipping } from '../../shipping/entities/shipping.entity';
import { TransporterToProvince } from '../../transporter-to-province/entities/transporter-to-province.entity';
import { Entity, Column, DeleteDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Transporter {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(
    () => TransporterToProvince,
    (transporterToProvince) => transporterToProvince.province,
  )
  transporterToProvince: TransporterToProvince[];

  @OneToMany(() => Shipping, (shipping) => shipping.transporter)
  shipping: Shipping;
}
