import { type FC, useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { formatTime } from '@/utils/helpers';
import { useAudioController } from '../../context/AudioContext';

const AudioSlider: FC = () => {
  const audio = useAudioController();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audio?.audioRef.current) return;

    const updateTime = () => setCurrentTime(audio.getCurrentTime());
    const updateDuration = () => setDuration(audio.getDuration());

    const audioEl = audio.audioRef.current;
    audioEl.addEventListener('timeupdate', updateTime);
    audioEl.addEventListener('loadedmetadata', updateDuration);

    setCurrentTime(audio.getCurrentTime());
    setDuration(audio.getDuration());

    return () => {
      audioEl.removeEventListener('timeupdate', updateTime);
      audioEl.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audio]);

  const handleSliderChange = (value: number[]) => {
    if (audio && duration) {
      const newTime = (value[0] / 100) * duration;
      audio.updateTime(newTime);
      setCurrentTime(newTime);
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
        className="w-[200px] lg:w-[400px] cursor-pointer"
        onValueChange={handleSliderChange}
      />
      <p className="text-xs ml-2 opacity-60">{formatTime(duration)}</p>
    </div>
  );
};

export default AudioSlider;