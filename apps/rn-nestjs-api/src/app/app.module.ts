import { SocketsModule } from './sockets/sockets.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [SocketsModule],
})
export class AppModule {}
