import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user-slice'

const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']