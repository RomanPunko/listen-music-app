import { createSlice } from '@reduxjs/toolkit';
import { type ISong } from '@/api/data-types/songs-data-types';

interface ISongPlayingState {
  currentSong: ISong | undefined;
  currentSongsList: ISong[];
  originalSongsList: ISong[];
  isPlaying: boolean;
  shuffle: boolean;
  repeatOneSong: boolean;
}

const initialState: ISongPlayingState = {
  currentSong: undefined,
  currentSongsList: [],
  originalSongsList: [],
  isPlaying: false,
  shuffle: false,
  repeatOneSong: false,
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    play: (state, action) => {
      const { song, songsList } = action.payload;
      state.currentSong = song;
      state.originalSongsList = songsList;

      if (state.shuffle) {
        state.currentSongsList = [...songsList].sort(() => Math.random() - 0.5);
      } else {
        state.currentSongsList = songsList;
      }

      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    nextSong: (state) => {
      const currentIndex = state.currentSongsList.findIndex(
        (song: ISong) => song.id === state.currentSong?.id
      );

      if (currentIndex >= 0 && currentIndex < state.currentSongsList.length - 1) {
        state.currentSong = state.currentSongsList[currentIndex + 1];
      } else {
        state.currentSong = state.currentSongsList[0];
      }

      state.isPlaying = true;
    },
    previousSong: (state) => {
      const currentIndex = state.currentSongsList.findIndex(
        (song: ISong) => song.id === state.currentSong?.id
      );

      if (currentIndex > 0) {
        state.currentSong = state.currentSongsList[currentIndex - 1];
      } else {
        state.currentSong = state.currentSongsList[state.currentSongsList.length - 1];
      }

      state.isPlaying = true;
    },
    setShuffle: (state, action) => {
      state.shuffle = action.payload;

      if (state.shuffle) {
        const shuffled = [...state.originalSongsList].sort(() => Math.random() - 0.5);
        state.currentSongsList = shuffled;
      } else {
        state.currentSongsList = state.originalSongsList;
      }
    },
    setRepeatOneSong: (state, action) => {
      state.repeatOneSong = action.payload;
    },
  },
});

export const { play, pause, nextSong, previousSong, setShuffle, setRepeatOneSong } =
  audioSlice.actions;

export default audioSlice.reducer;
