import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;
}
