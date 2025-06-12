import { type FC } from 'react';
import GenreFilters from '@/components/genre-filters/GenreFilters';
import FreePremiumBanner from '@/components/premium/FreePremiumBanner';
import PlaylistsRow from '@/components/playlist/PlaylistsRow';

const HomePage: FC = () => {

  return (
    <div className="w-full">
      <GenreFilters/>
      <FreePremiumBanner/>
      <PlaylistsRow/>
    </div>
  );
};

export default HomePage;
