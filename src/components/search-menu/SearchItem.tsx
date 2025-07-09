import type { FC } from 'react';
import type { ISong } from '@/api/data-types/songs-data-types';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { IoIosPlay } from 'react-icons/io';
import { IoPause } from 'react-icons/io5';

interface ISearchItemProps {
  song: ISong;
  onPlayPause: () => void;
  onLike: (event: React.MouseEvent) => void;
  isLiked: boolean;
  loadingLike: boolean;
  isCurrent: boolean;
  isPlaying: boolean;
}

const SearchItem: FC<ISearchItemProps> = ({
  song,
  onPlayPause,
  onLike,
  isLiked,
  loadingLike,
  isCurrent,
  isPlaying,
}) => {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer hover:bg-white/10 w-full px-3 py-2 rounded-lg transition-all ${
        isCurrent ? 'bg-white/10' : ''
      }`}
      onClick={onPlayPause}
    >
      <img src={song.avatar} alt={song.name} className="w-10 h-10 rounded-md object-cover" />
      <div className="flex flex-col flex-grow">
        <p className="text-base font-semibold leading-tight">{song.name}</p>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>
      <div className="flex items-center gap-2">
        {isCurrent && isPlaying ? <IoPause size={22} /> : <IoIosPlay size={22} />}
        {loadingLike ? (
          <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
        ) : isLiked ? (
          <MdFavorite size={22} onClick={onLike} />
        ) : (
          <MdFavoriteBorder size={22} onClick={onLike} />
        )}
      </div>
    </div>
  );
};

export default SearchItem;
