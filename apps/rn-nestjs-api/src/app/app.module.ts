import { QueuesModule } from './queues/queues.module';
import { CachingModule } from './caching/caching.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { SocketsModule } from './sockets/sockets.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config';

@Module({
  imports: [
    QueuesModule,
    CachingModule,
    WebhooksModule,
    SocketsModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
