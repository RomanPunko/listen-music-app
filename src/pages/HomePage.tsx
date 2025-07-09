import { type FC } from 'react';
import GenreFilters from '@/components/genre-filters/GenreFilters';
import PlaylistSections from '@/components/playlists/PlaylistSections';

const HomePage: FC = () => {

  return (
    <div className="w-full min-h-screen pb-[80px] relative">
      <GenreFilters/>
      <PlaylistSections/>
    </div>
  );
};

export default HomePage;
