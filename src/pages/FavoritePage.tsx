import { type FC, useEffect } from 'react';
import SongsList from '@/components/songs/SongsList';
import { useAppSelector, useAppDispatch } from '@/hooks/app-hooks';
import { getFavoriteSongs } from '@/store/slices/favorites-songs-slice';
import { LoadingSpinner } from '@/components/ui/spinner';
import GenreFilters from '@/components/genre-filters/GenreFilters';

export const FavoritePage: FC = () => {
  const dispatch = useAppDispatch();
  const { favorites, loading, error } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoriteSongs());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen w-full mt-[-50px]">
        <LoadingSpinner />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen w-full mt-[-50px]">
        <p>ERROR</p>
      </div>
    );

  return (
    <div className="pb-[80px]">
      <GenreFilters/>
      <SongsList songsList={favorites} />
    </div>
  );
};

export default FavoritePage;
