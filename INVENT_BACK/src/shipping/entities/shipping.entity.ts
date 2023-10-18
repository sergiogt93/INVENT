import { CategoryShipping } from '../../category-shipping/entities/category-shipping.entity';
import { Transporter } from '../../transporter/entities/transporter.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Shipping {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ nullable: false })
  destinationAddress: string;

  @Column('char', { nullable: false, length: 5 })
  postalCode: string;

  @Column({ nullable: false })
  destinationName: string;

  @Column({ nullable: false })
  senderName: string;

  @Column({ nullable: false })
  weight: string;

  @Column({ nullable: false, default: 0})
  totalPrice: number;

  @ManyToOne(
    () => CategoryShipping,
    (categoryShipping) => categoryShipping.shipping,
    {
      cascade: true,
    },
  )
  category: CategoryShipping[];

  @ManyToOne(() => Transporter, (transporter) => transporter.shipping, {
    cascade: true,
  })
  transporter: Transporter[];
}
