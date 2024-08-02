import axios from 'axios';
import { ScreenResponse } from './types';
import { HomeScreenMetadata } from '../types';
import config from '../config';

class RestApiService {
  private _instance: axios.AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: `${config().apiURL}/api`,
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
