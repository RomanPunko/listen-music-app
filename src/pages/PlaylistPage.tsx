import { type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { getPlaylists } from '@/store/slices/playlists-data-slice';
import { LoadingSpinner } from '@/components/ui/spinner';
import SongsList from '@/components/songs/SongsList';
import { setShuffle, setRepeatOneSong } from '@/store/slices/audio-slice';
import { IoMdRepeat } from 'react-icons/io';
import { MdRepeatOne } from 'react-icons/md';
import { IoShuffle } from 'react-icons/io5';
import { TbArrowsLeftRight } from "react-icons/tb";

const PlaylistPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const playlistsLoading = useAppSelector((state) => state.playlists.loading);
  const playlistsError = useAppSelector((state) => state.playlists.error);
  const shuffle = useAppSelector((state) => state.audio.shuffle);
  const repeatOneSong = useAppSelector((state) => state.audio.repeatOneSong);

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

  if (!playlist) return <p>Playlist not found</p>;

  const handleShuffleSongs = () => {
    dispatch(setShuffle(!shuffle));
  };

  const handleRepeatOneSong = () => {
    dispatch(setRepeatOneSong(!repeatOneSong));
  };

  return (
    <div className="w-full overflow-y-auto pb-[80px] pt-2 h-full select-none">
      <div className=" flex gap-6 text-3xl pb-2">
        <div className="relative">
          <img
            src={playlist.avatar}
            className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-lg object-cover select-none "
            alt={playlist.name}
          ></img>
        </div>
        <div className=" relative flex flex-col justify-end ">
          <div className="flex items-center gap-2">
            {shuffle ? (
              <IoShuffle
                size={36}
                onClick={handleShuffleSongs}
                className="p-1 fill-current cursor-pointer hover:bg-white/5 hover:rounded-[10px]"
              />
            ) : (
              <TbArrowsLeftRight
                size={36}
                onClick={handleShuffleSongs}
                className="p-1 fill-current cursor-pointer  hover:bg-white/5 hover:rounded-[10px]"
              />
            )}
            {repeatOneSong ? (
              <MdRepeatOne
                size={36}
                onClick={handleRepeatOneSong}
                className="p-1 fill-current cursor-pointer  hover:bg-white/5 hover:rounded-[10px]"
              />
            ) : (
              <IoMdRepeat
                size={36}
                onClick={handleRepeatOneSong}
                className="p-1 fill-current cursor-pointer  hover:bg-white/5 hover:rounded-[10px]"
              />
            )}
          </div>
          <div className="text-3xl md:text-5xl font-bold">{playlist.artist}</div>
        </div>
      </div>
      <SongsList playlist={playlist} />
    </div>
  );
};

export default PlaylistPage;
