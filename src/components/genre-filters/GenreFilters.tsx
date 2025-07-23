import { type FC } from 'react';
import GenreFiltersItem from './GenreFilterItem';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { setGenre } from '@/store/slices/genre-filters-slice';
import type { IAllSongs } from '@/api/data-types/songs-data-types';
import type { IAllPlaylists } from '@/api/data-types/playlist-data-types';

const GENRES = ['Rock', 'Pop', 'Rap', 'Hip-Hop', 'Jazz', 'Classical', 'Country'];

export const getSongsByGenres = (songs: IAllSongs, currentGenre: string[]) => {
  if (currentGenre.length === 0) {
    return songs;
  }
  return songs.filter((song) => currentGenre.includes(song.genre));
};

export const getPlaylistByGenres = (playlists: IAllPlaylists, currentGenre: string[]) => {
  if (currentGenre.length === 0) {
    return playlists;
  }
  return playlists.filter((playlist) => currentGenre.includes(playlist.genre));
};

const GenreFilters: FC = () => {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre.currentGenre);

  const handleSelectGenre = (genre: string) => {
    dispatch(setGenre(genre));
  };

  return (
    <div className="flex flex-wrap gap-3 mb-2">
      {GENRES.map((genre) => (
        <GenreFiltersItem
          key={genre}
          genre={genre}
          active={currentGenre.includes(genre)}
          onClick={() => handleSelectGenre(genre)}
        />
      ))}
    </div>
  );
};

export default GenreFilters;
