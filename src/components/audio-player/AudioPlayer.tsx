import { type FC } from 'react';
import PlayerSongInfo from './PlayerSongInfo';
import PlayerButtons from './PlayerButtons';
import AudioSlider from './AudioSlider';
import VolumeControl from './VolumeControl';
import Audio from '../audio/Audio';

const AudioPlayer: FC = () => {
  return (
    <>
      <Audio />
      <div className="h-[70px] bg-secondary relative border-t-1 border-border/30 select-none">
        <PlayerSongInfo />
        <div className="flex flex-col items-center justify-center ">
          <PlayerButtons />
          <AudioSlider />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <VolumeControl />
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
