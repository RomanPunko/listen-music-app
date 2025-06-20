import { createSlice, type PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SongService } from '@/api/services/song/song-service';
import type { IAllSongs } from '@/api/data-types/songs-data-types';

export const getSongs = createAsyncThunk<IAllSongs, void, { rejectValue: string }>(
  'songs/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await SongService();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Помилка отримання плейлистів');
    }
  }
);

interface ISongsState {
  songs: IAllSongs | [];
  loading: boolean;
  error: string | null;
}

const initialState: ISongsState = {
  songs: [],
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSongs.fulfilled, (state, action: PayloadAction<IAllSongs>) => {
        state.loading = false;
        state.songs = action.payload;
      })
      .addCase(getSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error';
      });
  },
});

export default songsSlice.reducer;
