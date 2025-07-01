import { type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { getPlaylists } from '@/store/slices/playlists-data-slice';
import { LoadingSpinner } from '@/components/ui/spinner';
import { IoIosPlay } from 'react-icons/io';
import { getSongs } from '@/store/slices/songs-data-slice';
import { getFavoriteSongs } from '@/store/slices/favorites-songs-slice';
import SongsList from '@/components/songs/SongsList';

const PlaylistPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const playlistsLoading = useAppSelector((state) => state.playlists.loading);
  const playlistsError = useAppSelector((state) => state.playlists.error);
  const songs = useAppSelector((state) => state.songs.songs);
  const songsLoading = useAppSelector((state) => state.songs.loading);
  const songsError = useAppSelector((state) => state.songs.error);

  useEffect(() => {
    dispatch(getPlaylists());
    dispatch(getSongs());

  }, [dispatch]);

  if (playlistsLoading || songsLoading)
    return (
      <div className="flex items-center justify-center h-screen w-full mt-[-50px]">
        <LoadingSpinner />
      </div>
    );

  if (playlistsError || songsError)
    return (
      <div className="flex items-center justify-center h-screen w-full mt-[-50px]">
        <p>ERROR</p>
      </div>
    );

  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) return <p>Плейлист не знайдено</p>;

  const playlistSongs =
    playlist.category == 'popular artists'
      ? songs.filter((song) => song.artist == playlist.artist)
      : songs.filter((song) => song.genre == playlist.genre);

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
      <SongsList songsList={playlistSongs} />
    </div>
  );
};

export default PlaylistPage;
