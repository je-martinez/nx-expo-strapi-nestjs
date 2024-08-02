import { io, Socket } from 'socket.io-client';
import config from '../config';
import { store } from '../store';
import { fetchScreenByPath } from '../store/slices/screens.thunks';

export enum SocketEvents {
  ON_SCREEN_UPDATE = 'on-screen-update',
}

export class SocketService {
  private _client: Socket;

  constructor() {
    this._client = io(config().wsURL);
    this._client.on('connect', () => this._onConnect());
  }

  get instance() {
    return this._client;
  }

  private _onConnect() {
    console.log('Connected to Socket');
    this._registerListeners();
  }

  private _registerListeners() {
    console.log(`Listening Event: ${SocketEvents.ON_SCREEN_UPDATE}`);
    this._client.on(
      SocketEvents.ON_SCREEN_UPDATE,
      ({ screenPath }: { screenPath: string }) =>
        this._onScreenUpdate({ screenPath })
    );
  }

  private _onScreenUpdate({ screenPath }: { screenPath: string }) {
    store.dispatch(fetchScreenByPath(screenPath));
  }
}
