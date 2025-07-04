import { type FC, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useAudioController } from '../../context/AudioContext';

const VolumeControl: FC = () => {
  const audio = useAudioController();
  const [volume, setVolume] = useState(50);
  const [prevVolume, setPrevVolume] = useState(volume);

  const handleVolumeChange = (event: number[]) => {
    const newVolume = event[0];
    setVolume(newVolume);
    audio?.updateVolume(newVolume / 100);
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
      audio?.updateVolume(0);
    } else {
      setVolume(prevVolume);
      audio?.updateVolume(prevVolume / 100);
    }
  };

  return (
    <div className="flex items-center gap-3 justify-center">
      {volume === 0 ? (
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
