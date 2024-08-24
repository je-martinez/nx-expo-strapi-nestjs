import axios from 'axios';
import config from '../config';
import { HomeScreenMetadata, ScreenResponse } from '@h4vnt3r/shared-types';

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
