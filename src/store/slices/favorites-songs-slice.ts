import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { toggleFavoriteSongService } from '@/api/services/favorites/favorites-service';
import { getFavoriteSongsService } from '@/api/services/favorites/favorites-service';
import type { ISong } from '@/api/data-types/songs-data-types';

export const toggleFavoriteSong = createAsyncThunk<ISong, string, { rejectValue: string }>(
  'favorites/toggle',
  async (songId, { rejectWithValue }) => {
    try {
      const data = await toggleFavoriteSongService(songId);

      return data.song;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Error');
    }
  }
);

export const getFavoriteSongs = createAsyncThunk<ISong[], void, { rejectValue: string }>(
  'favorites/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getFavoriteSongsService();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch favorites');
    }
  }
);

interface IFavoritesState {
  favorites: ISong[];
  favoriteIds: string[];
  loading: boolean;
  error: string | null;
}

const initialState: IFavoritesState = {
  favorites: [],
  favoriteIds: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    
    // pending
      .addCase(toggleFavoriteSong.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFavoriteSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

    // fulfilled
      .addCase(toggleFavoriteSong.fulfilled, (state, action: PayloadAction<ISong>) => {
        state.loading = false;

        if (!action.payload || !action.payload.id) return;
        if (state.favorites.find((song) => song.id === action.payload.id)) {
          state.favorites = state.favorites.filter((song) => song.id !== action.payload.id);
        } else {
          state.favorites = [...state.favorites, action.payload];
        }
        state.favoriteIds = state.favorites.map(song => song.id);
      })
      .addCase(getFavoriteSongs.fulfilled, (state, action: PayloadAction<ISong[]>) => {
        state.loading = false;

        state.favorites = action.payload;
        state.favoriteIds = action.payload.map(song => song.id);
      })

    // rejected
      .addCase(toggleFavoriteSong.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error';
      })
      .addCase(getFavoriteSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error';
      });
  },
});

export default favoritesSlice.reducer;
