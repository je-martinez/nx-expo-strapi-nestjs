import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OnUpdateEntryCommand } from './on-update-entry.command';
import { SocketsGateway } from '../../../sockets/sockets.gateway';
import { Logger } from '@nestjs/common';

@CommandHandler(OnUpdateEntryCommand)
export class OnUpdateEntryHandler
  implements ICommandHandler<OnUpdateEntryCommand>
{
  constructor(private gateWay: SocketsGateway) {}

  async execute(command: OnUpdateEntryCommand): Promise<{ success: boolean }> {
    const { entry: data } = command;
    const { entry } = data;
    if (entry) {
      const typedEntry = entry as { path: string };
      this.gateWay.emitScreenUpdate(typedEntry.path);
      Logger.log(`Executed entry update for model ${data.model}`);
      return { success: true };
    }
    return { success: false };
  }
}
