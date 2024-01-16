import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ayuntamiento {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  nombre: string;
  @Column('text')
  periodo: string;
}
