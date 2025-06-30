import { createContext, useContext, useRef, type RefObject } from 'react';

const AudioContext = createContext<RefObject<HTMLAudioElement | null> | null>(null);

export const useAudioRef = () => useContext(AudioContext);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <AudioContext.Provider value={audioRef}>
      {children}
    </AudioContext.Provider>
  );
};

