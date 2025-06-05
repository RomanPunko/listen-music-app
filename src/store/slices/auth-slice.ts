import { createSlice, type PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@/api/services/auth/auth-service';
import type { IFormData } from '@/types/auth-form-types';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IFormData, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

interface IAuth {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: IAuth = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Failed to register';
      });
  },
});

export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
