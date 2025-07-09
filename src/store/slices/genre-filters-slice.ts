import { createSlice } from '@reduxjs/toolkit';

interface IGenreFiltersState {
  currentGenre: string[];
}

const initialState: IGenreFiltersState = {
  currentGenre: [],
};

export const genreFiltersSlice = createSlice({
  name: 'songPlaying',
  initialState,
  reducers: {
    setGenre: (state, action) => {
      if (state.currentGenre.includes(action.payload)) {
        state.currentGenre = state.currentGenre.filter((item) => item !== action.payload);
      } else {
        state.currentGenre = [...state.currentGenre, action.payload];
      }
    },
  },
});

export const { setGenre } = genreFiltersSlice.actions;
export default genreFiltersSlice.reducer;
