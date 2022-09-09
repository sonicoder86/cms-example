import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Content } from '../../services/content-api.service';

export interface ContentState {
  contents: Content[];
}

const initialState: ContentState = {
  contents: [],
};

export const contentSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setContents: (state, action: PayloadAction<Content[]>) => {
      state.contents = action.payload;
    },
  },
});

export const { setContents } = contentSlice.actions;
export const contentReducer = contentSlice.reducer;
