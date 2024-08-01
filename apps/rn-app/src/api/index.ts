import { AxiosInstance, create } from 'axios';
import { ScreenResponse } from './types';
import { HomeScreenMetadata } from '../types';

class RestApiService {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = create({
      baseURL: 'http://localhost:3000/api',
    });
  }

  getScreenByPath(path: string) {
    return this._instance.get<ScreenResponse<HomeScreenMetadata>>(`/screens`, {
      params: {
        'filters[path][eq]': path,
      },
    });
  }
}

export const api = new RestApiService();
