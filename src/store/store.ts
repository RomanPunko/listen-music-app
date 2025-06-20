import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import playlistReducer from './slices/playlists-data-slice';
import songReducer from './slices/songs-data-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  playlist: playlistReducer,
  song: songReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
