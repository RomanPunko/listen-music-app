import { useEffect, type FC } from 'react';
import SongsList from '@/components/songs/SongsList';
import GenreFilters from '@/components/genre-filters/GenreFilters';
import { useAppSelector, useAppDispatch } from '@/hooks/app-hooks';
import { getFavoriteSongs } from '@/store/slices/favorites-songs-slice';

export const FavoritePage: FC = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoriteSongs());
  }, [dispatch]);

  return (
    <div className="pb-[80px]">
      <GenreFilters />
      {favorites.length ? (
        <SongsList />
      ) : (
        <div className="flex items-center justify-center h-full text-text-light text-2xl pt-10">
          You don't have any saved tracks yet
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
