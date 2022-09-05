import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../services/api';

export interface AuthState {
  loggedIn: boolean;
  id: number;
  username: string;
  email: string;
  roles: string[],
  token: string;
}

const initialState: AuthState = {
  loggedIn: false,
  id: 0,
  username: '',
  email: '',
  roles: [],
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      state.loggedIn = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
      state.token = action.payload.token;
    },
    logout: state => {
      state.loggedIn = false;
      state.id = 0;
      state.username = '';
      state.email = '';
      state.roles = [];
      state.token = '';
    },
  }
})

export const { logout, login } = authSlice.actions;
export const authReducer = authSlice.reducer;
