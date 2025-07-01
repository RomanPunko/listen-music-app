import { type FC, useState } from 'react';
import type { IAllSongs, ISong } from '@/api/data-types/songs-data-types';
import Song from './Song';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { play, pause } from '@/store/slices/audio-slice';
import {toggleFavoriteSong } from '@/store/slices/favorites-songs-slice';

interface ISongsListProps {
  songsList: IAllSongs;
}

const SongsList: FC<ISongsListProps> = ({ songsList }) => {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audio.isPlaying);
  const currentSong = useAppSelector((state) => state.audio.currentSong);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const [loadingSongLike, setLoadingSongLike] = useState<string | null>(null);


  const togglePlayPause = (song: ISong) => {
    if (currentSong?.id === song?.id && isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play({ song: song, songsList: songsList }));
    }
  };

  const toggleLike = async (song: ISong, event: React.MouseEvent) => {
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


  return (
    <div>
      <Table className="text-[16px] text-text border-b border-border/30">
        <TableHeader>
          <TableRow className="border-b border-border/30">
            <TableHead className="w-[32px]"></TableHead>
            <TableHead className="text-left">Avatar</TableHead>
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-leftr">Artist</TableHead>
            <TableHead className="text-left">Listens</TableHead>
            <TableHead className="text-left">Time</TableHead>
            <TableHead className="text-left">Fav</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {songsList.map((song) => (
            <Song
              song={song}
              togglePlayPause={togglePlayPause}
              key={song.id}
              toggleLike={toggleLike}
              isLikedSongs={favorites.some(fav => fav.id === song.id)}
              loadingSongLike={loadingSongLike}
              currentSong={currentSong}
              isPlaying={isPlaying}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SongsList;
