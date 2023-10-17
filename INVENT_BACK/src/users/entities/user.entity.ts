import { Entity, Column, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  username: string;

  // @Column({ unique: true, nullable: false })
  // email: string;

  @Column({ nullable: false })
  password: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
