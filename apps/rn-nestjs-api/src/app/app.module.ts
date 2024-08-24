import { Module } from '@nestjs/common';
import { CachingModule } from './caching/caching.module';
import { QueuesModule } from './queues/queues.module';
import { SocketsModule } from './sockets/sockets.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    QueuesModule,
    CachingModule,
    WebhooksModule,
    SocketsModule,
  ],
})
export class AppModule {}
