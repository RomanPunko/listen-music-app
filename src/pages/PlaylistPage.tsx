import { type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { getPlaylists } from '@/store/slices/playlists-data-slice';
import { LoadingSpinner } from '@/components/ui/spinner';
import { IoIosPlay } from 'react-icons/io';
import SongsList from '@/components/songs/SongsList';

const PlaylistPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const playlistsLoading = useAppSelector((state) => state.playlists.loading);
  const playlistsError = useAppSelector((state) => state.playlists.error);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  if (playlistsLoading)
    return (
      <div className="absolute top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadingSpinner />
      </div>
    );

  if (playlistsError)
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p>ERROR</p>
      </div>
    );

  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) return <p>Плейлист не знайдено</p>;

  return (
    <div className="w-full overflow-y-auto pb-[80px] pt-2 h-full select-none">
      <div className=" flex gap-6 text-3xl pb-2">
        <div className="relative">
          <img
            src={playlist.avatar}
            className="w-[180px] h-[180px] rounded-lg object-cover select-none "
            alt={playlist.name}
          ></img>
        </div>
        <div className=" relative flex flex-col justify-end ">
          <IoIosPlay className="absolute left-0 mb-12 bg-green-600 rounded-full w-15 h-15 p-3 cursor-pointer hover:bg-green-500" />
          <div className="text-5xl font-bold">{playlist.artist}</div>
        </div>
      </div>
      <SongsList playlist={playlist}/>
    </div>
  );
};

export default PlaylistPage;
