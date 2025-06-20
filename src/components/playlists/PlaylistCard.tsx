import { type FC } from 'react';
import { type IPlaylist } from '@/api/data-types/playlist-data-types';
import { useNavigate } from 'react-router-dom';
import { IoIosPlay } from 'react-icons/io';

interface IPlaylistCardProps {
  playlist: IPlaylist;
}

const PlaylistCard: FC<IPlaylistCardProps> = ({ playlist }) => {
  const navigate = useNavigate();

  const redirect = (id: string) => {
    navigate(`/playlist/${id}`);
  };

  return (
    <div
      className="relative group bg-white/5 hover:bg-white/10 h-full p-3 pb-1 rounded-[5px] w-full cursor-pointer select-none"
      onClick={() => redirect(playlist.id)}
    >
      <img
        src={playlist.avatar}
        alt=""
        className="w-full h-[190px] rounded-[5px] mb-2 object-cover"
      />
      <p className="font-bold">{playlist.artist}</p>
      <p className="opacity-60 text-[14px]">{playlist.name}</p>
      <IoIosPlay
        className="absolute top-37 right-4 bg-green-600 rounded-full w-12 h-12 p-3 text-white
                   cursor-pointer hover:bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default PlaylistCard;
