import { createSlice, type PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PlaylistService } from '@/api/services/playlist/playlist-service';
import type { IAllPlaylists } from '@/api/data-types/playlist-data-types';

export const getPlaylists = createAsyncThunk<IAllPlaylists, void, { rejectValue: string }>(
  'playlists/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await PlaylistService();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Помилка отримання плейлистів');
    }
  }
);

interface IPlaylistsState {
  playlists: IAllPlaylists | [];
  loading: boolean;
  error: string | null;
}

const initialState: IPlaylistsState = {
  playlists: [],
  loading: false,
  error: null,
};

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlaylists.fulfilled, (state, action: PayloadAction<IAllPlaylists>) => {
        state.loading = false;
        state.playlists = action.payload;
      })
      .addCase(getPlaylists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error';
      });
  },
});

export default playlistsSlice.reducer;
