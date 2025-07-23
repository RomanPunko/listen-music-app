import { type FC } from 'react';
import { useAppSelector } from '@/hooks/app-hooks';

const PlayerSongInfo: FC = () => {
  const currentSong = useAppSelector((state) => state.audio.currentSong);

  if (!currentSong) return null;

  return (
    <div className="bg-secondary w-screen absolute top-0 mt-[-15px] flex items-center md:w-auto md:bg-none md:mt-0 md:flex md:items-center md:absolute md:top-1/2 md:left-4 md:-translate-y-1/2">
      <img
        src={currentSong.avatar}
        alt={currentSong.name}
        className=" hidden md:block w-10 h-10 rounded-md"
      />
      <div className="ml-5 flex items-center gap-2 md:flex-col md:items-start md:gap-0">
        <div className="font-semibold truncate max-w-[150px] lg:max-w-full">{currentSong.name}</div>
        <div className="md:hidden">-</div>
        <div className="text-white/70 truncate max-w-[120px] lg:max-w-full"> {currentSong.artist}</div>
      </div>
    </div>
  );
};

export default PlayerSongInfo;
