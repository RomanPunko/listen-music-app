import { type FC } from 'react';
import SongsList from '@/components/songs/SongsList';
import GenreFilters from '@/components/genre-filters/GenreFilters';

export const FavoritePage: FC = () => {
  return (
    <div className="pb-[80px] select-none">
      <GenreFilters />
      <SongsList />
    </div>
  );
};

export default FavoritePage;
