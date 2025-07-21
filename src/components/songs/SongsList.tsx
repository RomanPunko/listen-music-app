import { type FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { ISong } from '@/api/data-types/songs-data-types';
import Song from './Song';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { play, pause } from '@/store/slices/audio-slice';
import { getFavoriteSongs, toggleFavoriteSong } from '@/store/slices/favorites-songs-slice';
import { LoadingSpinner } from '../ui/spinner';
import { getSongs } from '@/store/slices/songs-data-slice';
import { getSongsByGenres } from '../genre-filters/GenreFilters';
import type { IPlaylist } from '@/api/data-types/playlist-data-types';

interface ISongListProps {
  playlist?: IPlaylist;
}

const SongsList: FC<ISongListProps> = ({ playlist }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isPlaying = useAppSelector((state) => state.audio.isPlaying);
  const currentSong = useAppSelector((state) => state.audio.currentSong);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const songs = useAppSelector((state) => state.songs.songs);
  const songsLoading = useAppSelector((state) => state.songs.loading);
  const songsError = useAppSelector((state) => state.songs.error);
  const favoriteIds = useAppSelector((state) => state.favorites.favoriteIds);
  const currentGenre = useAppSelector((state) => state.genre.currentGenre);

  const [loadingSongLike, setLoadingSongLike] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getSongs());
    dispatch(getFavoriteSongs());
  }, [dispatch]);

  if (songsLoading)
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadingSpinner />
      </div>
    );

  if (songsError)
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p>ERROR</p>
      </div>
    );

  const isFavoritesPage = location.pathname === '/favorite';

  const playlistSongs =
    playlist?.category === 'popular artists'
      ? songs.filter((song) => song.artist === playlist?.artist)
      : songs.filter((song) => song.genre === playlist?.genre);

  const activeSongsList = isFavoritesPage
    ? getSongsByGenres(favorites, currentGenre)
    : playlistSongs;

  const handlePlayPause = (song: ISong) => {
    if (currentSong?.id === song?.id && isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play({ song, songsList: activeSongsList }));
    }
  };

  const handleLike = (song: ISong) => async (event: React.MouseEvent) => {
    event.stopPropagation();
    setLoadingSongLike(song.id);

    try {
      await dispatch(toggleFavoriteSong(song.id));
    } catch (error) {
      console.error('Toggle favorite error:', error);
    } finally {
      setLoadingSongLike(null);
    }
  };

  const renderSongs = (songs: ISong[]) =>
    songs.map((song) => (
      <Song
        key={song.id}
        song={song}
        onPlayPause={() => handlePlayPause(song)}
        onLike={handleLike(song)}
        isLiked={favoriteIds.includes(song.id)}
        loadingLike={loadingSongLike === song.id}
        isCurrent={currentSong?.id === song.id}
        isPlaying={isPlaying}
      />
    ));

  return (
    <div>
      {isFavoritesPage && favorites.length === 0 ? (
        <div className="w-full flex items-center justify-center py-16 text-text-light text-lg rounded-md bg-white/5">
          You don't have any saved tracks yet
        </div>
      ) : (
        <Table className="text-[16px] text-text border-b border-border/30">
          <TableHeader>
            <TableRow className="border-b border-border/30">
              <TableHead className="w-[32px]"></TableHead>
              <TableHead className="text-left">Avatar</TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-left">Artist</TableHead>
              <TableHead className="text-left">Listens</TableHead>
              <TableHead className="text-left">Time</TableHead>
              <TableHead className="text-left">Fav</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {renderSongs(activeSongsList)}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default SongsList;
