import { type FC } from 'react';
import { useAppSelector } from '@/hooks/app-hooks';

const PlayerSongInfo: FC = () => {
  const currentSong = useAppSelector((state) => state.audio.currentSong);

  return (
    <div className="flex items-center absolute top-1/2 left-4 -translate-y-1/2">
      {currentSong && (
        <>
          <img src={currentSong.avatar} alt={currentSong.name} className="w-10 h-10 rounded-md" />
          <div className="ml-5">
            <div className="">{currentSong.name}</div>
            <div className="">{currentSong.artist}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerSongInfo;