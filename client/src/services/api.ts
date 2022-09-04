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
  token: string;
}

export class Api {
  public async login(username: string, password: string): Promise<LoginResponse> {
    const payload: LoginRequest = { username, password };
    const response = await axios.post<LoginResponse>(`${config.serviceUrl}/login`, payload);
    return response.data;
  }
}
