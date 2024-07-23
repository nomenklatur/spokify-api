import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('playlists')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
