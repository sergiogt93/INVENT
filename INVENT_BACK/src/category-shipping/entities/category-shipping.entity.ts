import { Entity, Column, OneToMany } from 'typeorm';
import { ACRONYMS_SHIPPING } from '../enums/intervalShipping.enum';
import { Shipping } from 'src/shipping/entities/shipping.entity';

@Entity()
export class CategoryShipping {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({
    type: 'enum',
    enum: ACRONYMS_SHIPPING,
    unique: true,
    nullable: false,
  })
  acronym: ACRONYMS_SHIPPING;

  @Column({ unique: true, nullable: false })
  description: string;

  @Column({ nullable: false })
  minWeight: number;

  @Column({ nullable: false })
  maxWeight: number;

  @OneToMany(() => Shipping, (shipping) => shipping.category)
  shipping: Shipping;
}
