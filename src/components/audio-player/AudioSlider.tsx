import { type FC, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { useAppSelector, useAppDispatch } from '@/hooks/app-hooks';
import { setCurrentTime, setDuration } from '@/store/slices/audio-slice';
import { formatTime } from '@/utils/helpers';
import { useAudioRef } from '../context/AudioContext';

const AudioSlider: FC = () => {
  const dispatch = useAppDispatch();
  const audioRef = useAudioRef();
  const currentTime = useAppSelector((state) => state.audio.currentTime);
  const duration = useAppSelector((state) => state.audio.duration);

  useEffect(() => {
    if (audioRef?.current) {
      const updateTime = () => dispatch(setCurrentTime(audioRef.current?.currentTime));
      audioRef.current.addEventListener('timeupdate', updateTime);

      const updateDuration = () => dispatch(setDuration(audioRef.current?.duration));
      audioRef.current.addEventListener('loadedmetadata', updateDuration);

      return () => {
        audioRef.current?.removeEventListener('timeupdate', updateTime);
        audioRef.current?.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, [audioRef, dispatch]);

  const handleSliderChange = (value: number[]) => {
    if (audioRef?.current && duration) {
      const newTime = (value[0] / 100) * duration;
      audioRef.current.currentTime = newTime;
      dispatch(setCurrentTime(newTime));
    }
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center">
      <p className="text-xs mr-2 opacity-60">{formatTime(currentTime)}</p>
      <Slider
        value={[progress]}
        max={100}
        step={0.1}
        className="w-[400px] cursor-pointer"
        onValueChange={handleSliderChange}
      />
      <p className="text-xs ml-2 opacity-60">{formatTime(duration)}</p>
    </div>
  );
};

export default AudioSlider;
