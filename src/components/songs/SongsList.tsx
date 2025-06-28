import { type FC } from 'react';
import type { IAllSongs } from '@/api/data-types/songs-data-types';
import Song from "./Song"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface ISongsListProps{
  songsList: IAllSongs
}

const SongsList: FC<ISongsListProps> = ({songsList}) => {
  return (
    <div>
      <Table className="text-[16px] text-text border-b border-border/30">
        <TableHeader>
          <TableRow className="border-b border-border/30">
            <TableHead className='w-[32px]'></TableHead>
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
            <Song song={song} key={song.id}/>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SongsList;
