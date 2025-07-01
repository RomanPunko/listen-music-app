import { type FC } from 'react';
import type { ISong } from '@/api/data-types/songs-data-types';
import { TableCell, TableRow } from '@/components/ui/table';
import { IoIosPlay } from 'react-icons/io';
import { IoPause } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';

interface ISongProps {
  song: ISong;
  togglePlayPause: (song: ISong) => void;
  toggleLike: (song: ISong, event: React.MouseEvent) => void;
  isLikedSongs: boolean;
  loadingSongLike: string | null;
  currentSong: ISong | undefined;
  isPlaying: boolean;
}

const Song: FC<ISongProps> = ({
  song,
  togglePlayPause,
  toggleLike,
  isLikedSongs,
  loadingSongLike,
  currentSong,
  isPlaying,
}) => {


  return (
    <TableRow
      className={`w-full border-b border-t border-border/30 hover:bg-white/10 cursor-pointer ${
        currentSong?.id === song.id ? 'bg-white/10' : ''
      }`}
      onClick={() => togglePlayPause(song)}
    >
      <TableCell>
        {currentSong?.id === song?.id && isPlaying ? (
          <IoPause size={32} />
        ) : (
          <IoIosPlay size={32} />
        )}
      </TableCell>
      <TableCell>
        <img src={song.avatar} alt="" className="w-10 h-10 rounded-sm" />
      </TableCell>
      <TableCell>{song.name}</TableCell>
      <TableCell>{song.artist}</TableCell>
      <TableCell>{song.listens}</TableCell>
      <TableCell>{song.time}</TableCell>
      <TableCell>
        {loadingSongLike === song.id ? (
          <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
        ) : isLikedSongs ? (
          <MdFavorite size={26} onClick={(event) => toggleLike(song, event)} />
        ) : (
          <MdFavoriteBorder size={26} onClick={(event) => toggleLike(song, event)} />
        )}
      </TableCell>
    </TableRow>
  );
};

export default Song;
