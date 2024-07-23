import { Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Playlist } from 'src/playlists/playlist.entity.js';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Playlist, (playList) => playList.user)
  playLists: Playlist[];
}
