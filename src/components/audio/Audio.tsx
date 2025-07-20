import { type FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/app-hooks';
import { nextSong } from '@/store/slices/audio-slice';
import { useAudioController } from '@/context/AudioContext';

const Audio: FC = () => {
  const dispatch = useAppDispatch();
  const audio = useAudioController();
  const currentSong = useAppSelector((state) => state.audio.currentSong);
  const isPlaying = useAppSelector((state) => state.audio.isPlaying);
  const repeatOneSong = useAppSelector((state) => state.audio.repeatOneSong); // ✅

  useEffect(() => {
    if (audio && currentSong) {
      audio.updateTime(0);
      audio.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (audio) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <audio
      ref={audio?.audioRef}
      src={currentSong?.urlSong}
      onEnded={() => {
        if (repeatOneSong) {
          audio?.updateTime(0);
          audio?.play();
        } else {
          dispatch(nextSong());
        }
      }}
    />
  );
};

export default Audio;
