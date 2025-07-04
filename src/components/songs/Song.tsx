import { type FC } from 'react';
import type { ISong } from '@/api/data-types/songs-data-types';
import { TableCell, TableRow } from '@/components/ui/table';
import { IoIosPlay } from 'react-icons/io';
import { IoPause } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';

interface ISongProps {
  song: ISong;
  onPlayPause: () => void;
  onLike: (event: React.MouseEvent) => void;
  isLiked: boolean;
  loadingLike: boolean;
  isCurrent: boolean;
  isPlaying: boolean;
}

const Song: FC<ISongProps> = ({
  song,
  onPlayPause,
  onLike,
  isLiked,
  loadingLike,
  isCurrent,
  isPlaying,
}) => (
  <TableRow
    className={`w-full border-b border-t border-border/30 hover:bg-white/10 cursor-pointer ${
      isCurrent ? 'bg-white/10' : ''
    }`}
    onClick={onPlayPause}
  >
    <TableCell>
      {isCurrent && isPlaying ? <IoPause size={32} /> : <IoIosPlay size={32} />}
    </TableCell>
    <TableCell>
      <img src={song.avatar} alt="" className="w-10 h-10 rounded-sm" />
    </TableCell>
    <TableCell>{song.name}</TableCell>
    <TableCell>{song.artist}</TableCell>
    <TableCell>{song.listens}</TableCell>
    <TableCell>{song.time}</TableCell>
    <TableCell>
      {loadingLike ? (
        <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
      ) : isLiked ? (
        <MdFavorite size={26} onClick={onLike} />
      ) : (
        <MdFavoriteBorder size={26} onClick={onLike} />
      )}
    </TableCell>
  </TableRow>
);

export default Song;
