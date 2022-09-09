import { ThunkAction } from 'redux-thunk';
import { AppDispatch, RootState } from '../store';
import { AnyAction } from '@reduxjs/toolkit';
import { AuthApiService } from '../../services/auth-api.service';
import { logout } from '../reducers/auth.reducer';
import { useNavigate } from 'react-router-dom';

export const useLogoutThunk = () => {
  const authApi = new AuthApiService();
  const navigate = useNavigate();

  const ThunkFunction: ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
  > = async (dispatch: AppDispatch, getState) => {
    const state = getState();
    await authApi.logout(state.auth.token);
    dispatch(logout());
    navigate('/');
  };
  return ThunkFunction;
};
