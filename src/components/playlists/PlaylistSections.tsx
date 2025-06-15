import { type FC, useEffect } from 'react';
import PlaylistsRow from './PlaylistsRow';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { getPlaylists } from '@/store/slices/playlist-slice';

const PlaylistSections: FC = () => {
  const dispatch = useAppDispatch();
  const { playlists, loading, error } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  if (loading) return <p>Завантаження плейлистів...</p>;
  if (error) return <p>Помилка: {error}</p>;

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
