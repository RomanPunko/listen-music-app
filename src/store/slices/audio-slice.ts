import { createSlice } from '@reduxjs/toolkit';
import { type ISong } from '@/api/data-types/songs-data-types';

interface ISongPlayingState {
  currentSong: ISong | undefined,
  currentSongsList: ISong[],
  isPlaying: boolean,
}

const initialState: ISongPlayingState = {
  currentSong: undefined,
  currentSongsList: [],
  isPlaying: false,
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
    },
    pause: (state) => {
      state.isPlaying = false;
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
      } else {
        state.currentSong = state.currentSongsList[0];
        state.isPlaying = true;
      }
    },
    previousSong: (state) => {
      const currentIndex = state.currentSongsList.findIndex(
        (song: ISong) => song.id === state.currentSong!.id
      );

      if (currentIndex > 0) {
        state.currentSong = state.currentSongsList[currentIndex - 1];
        state.isPlaying = true;
      } else {
        state.currentSong = state.currentSongsList[state.currentSongsList.length - 1];
      }
    },
  },
});

export const {
  play,
  pause,
  nextSong,
  previousSong,
} = audioSlice.actions;
export default audioSlice.reducer;