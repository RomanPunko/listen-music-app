import { type FC, useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/app-hooks';
import { nextSong } from '@/store/slices/audio-slice';
import { useAudioRef } from '../context/AudioContext';

const Audio: FC = () => {
  const dispatch = useAppDispatch();
  const audioRef = useAudioRef();
  const currentSong = useAppSelector((state) => state.audio.currentSong);
  const isPlaying = useAppSelector((state) => state.audio.isPlaying);

  useEffect(() => {
    if (audioRef?.current && currentSong) {
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef?.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={currentSong?.urlSong} onEnded={() => dispatch(nextSong())} />
    </>
  );
};

export default Audio;
