import { type FC } from 'react';
import PlaylistCard from './PlaylistCard';

const PlaylistsRow: FC = () => {
  return (
    <div className='flex gap-4'>
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
    </div>
  );
};

export default PlaylistsRow;
