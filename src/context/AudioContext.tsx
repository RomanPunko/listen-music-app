import { createContext, useContext, useRef, useEffect } from 'react';

type AudioController = {
  play: () => void;
  pause: () => void;
  updateTime: (time: number) => void;
  updateVolume: (volume: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  audioRef: React.RefObject<HTMLAudioElement | null>;
};

const AudioContext = createContext<AudioController | null>(null);

export const useAudioController = () => useContext(AudioContext);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const controller: AudioController = {
    play: () => {
      audioRef.current?.play();
    },
    pause: () => {
      audioRef.current?.pause();
    },
    updateTime: (time: number) => {
      if (audioRef.current) audioRef.current.currentTime = time;
    },
    updateVolume: (volume: number) => {
      if (audioRef.current) audioRef.current.volume = volume;
    },
    getCurrentTime: () => audioRef.current?.currentTime || 0,
    getDuration: () => audioRef.current?.duration || 0,
    audioRef,
  };

  return <AudioContext.Provider value={controller}>{children}</AudioContext.Provider>;
};
