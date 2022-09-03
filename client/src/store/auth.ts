import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../services/api';

export interface AuthState {
  loggedIn: boolean;
  username: string;
  email: string;
  token: string;
}

const initialState: AuthState = {
  loggedIn: false,
  username: '',
  email: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      state.loggedIn = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: state => {
      state.loggedIn = false;
      state.username = '';
      state.email = '';
      state.token = '';
    },
  }
})

// Action creators are generated for each case reducer function
export const { logout, login } = authSlice.actions;
export const authReducer = authSlice.reducer;
