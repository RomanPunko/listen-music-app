import { type FC, useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { FaVolumeUp } from 'react-icons/fa';
import { FaVolumeMute } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { useAudioRef } from '../../context/AudioContext';
import { setVolume } from '@/store/slices/audio-slice';

const VolumeControl: FC = () => {
  const dispatch = useAppDispatch();
  const audioRef = useAudioRef();
  const volume = useAppSelector((state) => state.audio.volume);
  const [prevVolume, setPrevVolume] = useState(volume);

  const handleVolumeChange = (event: number[]) => {
    const newVolume = event[0];
    dispatch(setVolume(newVolume));
  };

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const toggleMute = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      dispatch(setVolume(0));
    } else {
      dispatch(setVolume(prevVolume));
    }
  };

  return (
    <div className="flex items-center gap-3 justify-center">
      {volume == 0 ? (
        <FaVolumeMute size={18} className="cursor-pointer" onClick={toggleMute} />
      ) : (
        <FaVolumeUp size={20} className="cursor-pointer" onClick={toggleMute} />
      )}
      <Slider
        value={[volume]}
        max={100}
        step={1}
        className="w-[100px] cursor-pointer"
        onValueChange={handleVolumeChange}
      />
    </div>
  );
};

export default VolumeControl;
