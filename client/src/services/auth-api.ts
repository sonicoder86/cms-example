import axios from 'axios';
import { config } from '../config';

interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  roles: string[];
  token: string;
}

export class AuthApi {
  public async login(username: string, password: string): Promise<LoginResponse> {
    const payload: LoginRequest = { username, password };
    const response = await axios.post<LoginResponse>(`${config.serviceUrl}/auth/login`, payload);
    return response.data;
  }

  public async logout(token: string): Promise<void> {
    await axios.post(
      `${config.serviceUrl}/auth/logout`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  }
}
