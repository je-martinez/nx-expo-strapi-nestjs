/*
https://docs.nestjs.com/websockets/gateways#gateways
*/

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { SocketEvents } from '@h4vnt3r/shared-types';

@WebSocketGateway()
export class SocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  private readonly server: Server;

  emitScreenUpdate(screenPath: string) {
    this.server.emit(SocketEvents.ON_SCREEN_UPDATE, { screenPath });
  }

  handleConnection() {
    Logger.log('User connected');
  }

  handleDisconnect() {
    Logger.log('User disconnected');
  }

  afterInit() {
    Logger.log('Socket is live');
  }
}
