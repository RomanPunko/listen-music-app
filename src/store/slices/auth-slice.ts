import { createSlice, type PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@/api/services/auth/auth-service';


export interface IFormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IFormData, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password }: IFormData, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(email, password);
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

      // pending
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      //fulfilled
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })

      //rejected
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Failed to register';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Failed to register';
      });
  },
});

export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
