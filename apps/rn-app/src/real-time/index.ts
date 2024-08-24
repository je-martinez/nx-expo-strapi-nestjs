import React from 'react';
import { SocketService } from './SocketService';

export const SocketContext = React.createContext<SocketService | undefined>(
  undefined
);
