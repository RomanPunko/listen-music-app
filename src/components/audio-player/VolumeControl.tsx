import { type FC } from 'react';
import { Slider } from '@/components/ui/slider';
import { FaVolumeUp } from 'react-icons/fa';

const VolumeControl: FC = () => {

  return (
    <div className="flex items-center gap-3 justify-center">
      <FaVolumeUp size={20} className="cursor-pointer" />
      <Slider defaultValue={[40]} max={100} step={1} className="w-[100px] cursor-pointer" />
    </div>
  );
};

export default VolumeControl;
