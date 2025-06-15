import { type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { getPlaylists } from '@/store/slices/playlist-slice';

const PlaylistPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const { playlists, loading, error } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  if (loading) return <p>Завантаження плейлистів...</p>;
  if (error) return <p>Помилка: {error}</p>;

  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) return <p>Плейлист не знайдено</p>;

  return (
    <div className="w-full overflow-y-auto pb-[80px] pt-2 h-full">
      <div className=" border-b border-border/30 flex gap-6 text-3xl pb-8 ">
        <div className="relative">
          <img
            src={playlist.avatar}
            className="w-[200px] h-[200px] rounded-lg object-cover select-none "
            alt={playlist.name}
          ></img>
        </div>
        <div className="flex flex-col justify-end ">
          <div className="">{playlist.artist}</div>
          <div className="text-5xl font-bold">{playlist.name}</div>
        </div>
      </div>
      <div className="pt-2"></div>
    </div>
  );
};

export default PlaylistPage;
