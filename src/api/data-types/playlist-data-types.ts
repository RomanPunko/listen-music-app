import type { ISong } from "./songs-data-types";

export interface IPlaylist {
  id: string;
  name: string;
  artist: string;
  avatar: string;
  genre: string;
  category: string;
  songs: ISong[];
}

export type IAllPlaylists = IPlaylist[];