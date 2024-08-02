import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { EntryEvents, EntryUpdateDTO } from './DTOs/entry-update.DTOs';
import { OnUpdateEntryCommand } from './commands/on-update-entry/on-update-entry.command';

@Controller('webhooks')
export class WebhooksController {
  constructor(private command: CommandBus) {}

  @Post('entry-update')
  async onEntityUpdate(@Body() entry: EntryUpdateDTO) {
    if (entry.event === EntryEvents.entryUpdate) {
      return await this.command.execute(new OnUpdateEntryCommand(entry));
    }
    throw new NotFoundException('Event not found');
  }
}
