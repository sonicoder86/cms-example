import axios from 'axios';
import { config } from '../config';

export interface Content {
  id: string;
  title: string;
  description: string;
}

export class ContentApi {
  public async getContents(token: string): Promise<Content[]> {
    const response = await axios.get<Content[]>(
      `${config.serviceUrl}/contents`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

    return response.data;
  }
}
