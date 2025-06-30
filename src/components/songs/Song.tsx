import { type FC } from 'react';
import type { ISong } from '@/api/data-types/songs-data-types';
import { TableCell, TableRow } from '@/components/ui/table';
import { IoIosPlay } from 'react-icons/io';
import { IoPause } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { play, pause } from '@/store/slices/audio-slice';

interface ISongProps {
  song: ISong;
  songsList: ISong[];
}

const Song: FC<ISongProps> = ({ song, songsList }) => {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audio.isPlaying);
  const currentSong = useAppSelector((state) => state.audio.currentSong);

  const togglePlayPause = () => {
    if (currentSong?.id === song?.id && isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play({ song: song, songsList: songsList }));
    }
  };

  return (
    <TableRow
      className={`w-full border-b border-t border-border/30 hover:bg-white/10 cursor-pointer ${
        currentSong?.id === song.id ? 'bg-white/10' : ''
      }`}
      onClick={togglePlayPause}
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
        <MdFavoriteBorder size={26} />
      </TableCell>
    </TableRow>
  );
};

export default Song;
