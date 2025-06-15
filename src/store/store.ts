import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import playlistReducer from './slices/playlist-slice'

const rootReducer = combineReducers({
  auth: authReducer,
  playlist: playlistReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
