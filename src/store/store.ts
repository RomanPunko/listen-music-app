import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import playlistsDataReducer from './slices/playlists-data-slice';
import songsDataReducer from './slices/songs-data-slice';
import audioSlice from './slices/audio-slice';
import favoritesSlice from './slices/favorites-songs-slice'
import  genreFiltersSlice from './slices/genre-filters-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  playlists: playlistsDataReducer,
  songs: songsDataReducer,
  audio: audioSlice,
  favorites: favoritesSlice,
  genre: genreFiltersSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
