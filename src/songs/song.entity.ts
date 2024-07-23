import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import { Playlist } from 'src/playlists/playlist.entity.js';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('date')
  releasedDate: Date;

  @Column('time')
  duration: Date;

  @Column('text')
  lyrics: string;

  @ManyToOne(() => Playlist, (playlist) => playlist.songs)
  playlist: Playlist;
}
