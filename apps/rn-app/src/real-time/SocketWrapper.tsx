import { useEffect, useState } from 'react';
import { SocketContext } from '.';
import { SocketService } from './types';

interface Props {
  children: React.ReactNode;
}

export default function SocketWrapper({ children }: Props) {
  const [socket, setSocket] = useState<SocketService | undefined>(undefined);

  useEffect(() => {
    const socket = new SocketService();
    setSocket(socket);

    return () => {
      socket.instance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
