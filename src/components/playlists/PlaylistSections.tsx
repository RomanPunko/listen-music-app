import { type FC, useEffect } from 'react';
import PlaylistsRow from './PlaylistsRow';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { getPlaylists } from '@/store/slices/playlist-slice';
import { LoadingSpinner } from '../ui/spinner';

const PlaylistSections: FC = () => {
  const dispatch = useAppDispatch();
  const { playlists, loading, error } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  if (loading)
    return (
      <div className="absolute left-1/2 top-[150%] transform -translate-x-1/2 -translate-y-1/2">
        <LoadingSpinner />
      </div>
    );
  if (error)
    return (
      <div className="absolute left-1/2 top-[150%] transform -translate-x-1/2 -translate-y-1/2">
        <p>ERROR</p>
      </div>
    );

  const popularArtistsPlaylists = playlists.filter(
    (playlist) => playlist.category === 'popular artists'
  );

  const bestGenresPlaylists = playlists.filter(
    (playlist) => playlist.category === 'the best genres'
  );

  return (
    <div className="w-full flex flex-col gap-4">
      <PlaylistsRow
        playlists={popularArtistsPlaylists}
        category={popularArtistsPlaylists.find((playlist) => playlist.category)?.category || ''}
      />
      <PlaylistsRow
        playlists={bestGenresPlaylists}
        category={bestGenresPlaylists.find((playlist) => playlist.category)?.category || ''}
      />
    </div>
  );
};

export default PlaylistSections;
