import { WebhooksModule } from './webhooks/webhooks.module';
import { SocketsModule } from './sockets/sockets.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [WebhooksModule, SocketsModule],
})
export class AppModule {}
