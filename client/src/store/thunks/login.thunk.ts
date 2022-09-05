import { ThunkAction } from 'redux-thunk';
import { AppDispatch, RootState } from '../store';
import { AnyAction } from '@reduxjs/toolkit';
import { AuthApiService } from '../../services/auth-api.service';
import { failedLogin, login } from '../reducers/auth.reducer';
import { useNavigate } from 'react-router-dom';

export const useLoginThunk = (username: string, password: string) => {
  const authApi = new AuthApiService();
  const navigate = useNavigate();

  const ThunkFunction: ThunkAction<void, RootState, unknown, AnyAction> = async (dispatch: AppDispatch, getState) => {
    try {
      const response = await authApi.login(username, password);
      dispatch(login(response))
      navigate('/home');
    } catch (e) {
      dispatch(failedLogin())
      window.alert('Failed to login');
    }
  };
  return ThunkFunction;
};
