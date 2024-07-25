import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Song } from '../songs/song.entity';
@Entity('playlists')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Song, (song) => song.playlist)
  songs: Song[];

  @ManyToOne(() => User, (user) => user.playLists)
  user: User;
}
