import { type FC } from 'react';
import type { ISong } from '@/api/data-types/songs-data-types';
import { TableCell, TableRow } from '@/components/ui/table';
import { IoIosPlay } from 'react-icons/io';
import { MdFavoriteBorder } from "react-icons/md";

interface ISongProps {
  song: ISong;
}

const SongsList: FC<ISongProps> = ({ song }) => {
  return (
    <TableRow className="w-full border-b border-t border-border/30 hover:bg-white/10 cursor-pointer">
      <TableCell><IoIosPlay size={32}/></TableCell>
      <TableCell><img src={song.avatar} alt="" className='w-10 h-10 rounded-sm'/></TableCell>
      <TableCell>{song.name}</TableCell>
      <TableCell>{song.artist}</TableCell>
      <TableCell>{song.listens}</TableCell>
      <TableCell>{song.time}</TableCell>
      <TableCell><MdFavoriteBorder size={26}/></TableCell>
    </TableRow>
  );
};

export default SongsList;
