import { ThunkAction } from 'redux-thunk';
import { AppDispatch, RootState } from '../store';
import { AnyAction } from '@reduxjs/toolkit';
import { setContents } from '../reducers/content.reducer';
import { ContentApiService } from '../../services/content-api.service';

export const useContentThunk = () => {
  const contentApi = new ContentApiService();

  const ThunkFunction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (dispatch: AppDispatch, getState) => {
    const state = getState();
    const contents = await contentApi.getContents(state.auth.token);
    dispatch(setContents(contents));
  };
  return ThunkFunction;
};
