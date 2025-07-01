import { createSlice } from '@reduxjs/toolkit';
import { type ISong } from '@/api/data-types/songs-data-types';

interface ISongPlayingState{
  currentSong: ISong | undefined,
  currentSongsList: ISong[],
  isPlaying: boolean,
  volume: number,
  currentTime: number,
  duration: number,
  pausedTime: number,
}

const initialState: ISongPlayingState = {
  currentSong: undefined,
  currentSongsList: [],
  isPlaying: false,
  volume: 30,
  currentTime: 0,
  duration: 0.001,
  pausedTime: 0,
};

export const audioSlice = createSlice({
  name: 'songPlaying',
  initialState,
  reducers: {
    play: (state, action) => {
      const { song, songsList } = action.payload;
      state.currentSong = song;
      state.currentSongsList = songsList;
      state.isPlaying = true;
      state.currentTime = state.pausedTime;
    },
    pause: (state) => {
      state.isPlaying = false;
      state.pausedTime = state.currentTime;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    nextSong: (state) => {
      const currentIndex = state.currentSongsList.findIndex(
        (song: ISong) => song.id === state.currentSong!.id
      );

      if (
        currentIndex >= 0 &&
        currentIndex < state.currentSongsList.length - 1
      ) {
        state.currentSong = state.currentSongsList[currentIndex + 1];
        state.isPlaying = true;
        state.currentTime = 0;
      } else {
        state.currentSong = state.currentSongsList[0];
        state.isPlaying = true;
        state.currentTime = 0;
      }
    },
    previousSong: (state) => {
      const currentIndex = state.currentSongsList.findIndex(
        (song: ISong) => song.id === state.currentSong!.id
      );

      if (currentIndex > 0) {
        state.currentSong = state.currentSongsList[currentIndex - 1];
        state.isPlaying = true;
        state.currentTime = 0;
      } else {
        state.currentSong = state.currentSongsList[state.currentSongsList.length - 1];
        state.currentTime = 0;
      }
    },
  },
});

export const {
  play,
  pause,
  setCurrentTime,
  setVolume,
  setDuration,
  nextSong,
  previousSong,
  // toggleLike,
} = audioSlice.actions;
export default audioSlice.reducer;
