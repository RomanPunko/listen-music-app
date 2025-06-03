import { type FC } from 'react';
import { Slider } from '@/components/ui/slider';

const AudioSlider: FC = () => {
  return (
    <div className='flex items-center'>
      <p className="text-xs mr-2 opacity-60">00:00</p>
      <Slider defaultValue={[0]} max={100} step={1} className="w-[400px]" />
      <p className="text-xs ml-2 opacity-60">00:00</p>
    </div>
  );
};

export default AudioSlider;
