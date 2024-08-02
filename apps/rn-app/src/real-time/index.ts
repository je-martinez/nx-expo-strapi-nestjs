import React from 'react';
import { SocketService } from './types';

export const SocketContext = React.createContext<SocketService | undefined>(
  undefined
);
