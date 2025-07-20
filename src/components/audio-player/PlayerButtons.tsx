import { type FC } from 'react';
import { IoIosPlay } from 'react-icons/io';
import { IoIosSkipBackward } from 'react-icons/io';
import { IoIosSkipForward } from 'react-icons/io';
import { IoPause } from 'react-icons/io5';
import { useAppSelector, useAppDispatch } from '@/hooks/app-hooks';
import {
  play,
  pause,
  nextSong,
  previousSong,
  setShuffle,
  setRepeatOneSong,
} from '@/store/slices/audio-slice';
import { IoMdRepeat } from 'react-icons/io';
import { MdRepeatOne } from 'react-icons/md';
import { IoShuffle } from 'react-icons/io5';
import { TbArrowsRight } from 'react-icons/tb';

const PlayerButtons: FC = () => {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audio.isPlaying);
  const currentSong = useAppSelector((state) => state.audio.currentSong);
  const currentSongsList = useAppSelector((state) => state.audio.currentSongsList);
  const shuffle = useAppSelector((state) => state.audio.shuffle);
  const repeatOneSong = useAppSelector((state) => state.audio.repeatOneSong);

  const togglePlayPause = () => {
    if (!currentSong) return;

    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play({ song: currentSong, songsList: currentSongsList }));
    }
  };

  const handlePreviousSong = () => {
    if (currentSongsList.length > 0) {
      dispatch(previousSong());
      dispatch(setRepeatOneSong(false));
    }
  };

  const handleNextSong = () => {
    if (currentSongsList.length > 0) {
      dispatch(nextSong());
      dispatch(setRepeatOneSong(false));
    }
  };

  const handleShuffleSongs = () => {
    dispatch(setShuffle(!shuffle));
  };

  const handleRepeatOneSong = () => {
    dispatch(setRepeatOneSong(!repeatOneSong));
  };

  return (
    <div className="flex items-center justify-center gap-5 mt-[5px]">
      {shuffle ? (
        <IoShuffle
          size={30}
          onClick={handleShuffleSongs}
          className="p-1 fill-current cursor-pointer hover:bg-white/5 hover:rounded-[10px]"
        />
      ) : (
        <TbArrowsRight
          size={30}
          onClick={handleShuffleSongs}
          className="p-1 fill-current cursor-pointer  hover:bg-white/5 hover:rounded-[10px]"
        />
      )}
      <IoIosSkipBackward
        size={36}
        onClick={handlePreviousSong}
        className="p-1 fill-current cursor-pointer hover:bg-white/5 hover:rounded-[10px]"
      />
      {isPlaying ? (
        <IoPause
          size={40}
          onClick={togglePlayPause}
          className="p-1 fill-current cursor-pointer hover:bg-white/5 hover:rounded-[10px]"
        />
      ) : (
        <IoIosPlay
          size={40}
          onClick={togglePlayPause}
          className="p-1 fill-current cursor-pointer hover:bg-white/5 hover:rounded-[10px]"
        />
      )}
      <IoIosSkipForward
        size={36}
        onClick={handleNextSong}
        className="p-1 fill-current cursor-pointer  hover:bg-white/5 hover:rounded-[10px]"
      />
      {repeatOneSong ? (
        <MdRepeatOne
          size={30}
          onClick={handleRepeatOneSong}
          className="p-1 fill-current cursor-pointer  hover:bg-white/5 hover:rounded-[10px]"
        />
      ) : (
        <IoMdRepeat
          size={30}
          onClick={handleRepeatOneSong}
          className="p-1 fill-current cursor-pointer  hover:bg-white/5 hover:rounded-[10px]"
        />
      )}
    </div>
  );
};

export default PlayerButtons;
