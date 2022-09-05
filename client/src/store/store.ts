import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import { contentReducer } from './reducers/content.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
  },
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
