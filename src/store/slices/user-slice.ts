import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  isAuthenticated: boolean;
}

const initialState: IUser = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated } = userSlice.actions;
export default userSlice.reducer;
