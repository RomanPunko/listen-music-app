export interface ISong {
  id: string;
  name: string;
  artist: string;
  genre: string;
  listens: string;
  avatar: string;
  time: string;
  urlSong: string;
}

export type IAllSongs = ISong[];