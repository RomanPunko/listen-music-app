import { type FC } from 'react';
import GenreFilters from '@/components/genre-filters/GenreFilters';
import FreePremiumBanner from '@/components/premium/FreePremiumBanner';
import PlaylistSections from '@/components/playlists/PlaylistSections';

const HomePage: FC = () => {

  return (
    <div className="w-full pb-[80px] relative ">
      <GenreFilters/>
      <FreePremiumBanner/>
      <PlaylistSections/>
    </div>
  );
};

export default HomePage;
