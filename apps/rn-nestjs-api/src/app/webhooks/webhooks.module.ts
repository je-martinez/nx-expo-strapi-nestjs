import { WebhooksController } from './webhooks.controller';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SocketsModule } from '../sockets/sockets.module';
import { CommandHandlers } from './commands';

@Module({
  imports: [CqrsModule, SocketsModule],
  controllers: [WebhooksController],
  providers: [...CommandHandlers],
})
export class WebhooksModule {}
