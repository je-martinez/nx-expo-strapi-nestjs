import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { EntryEvents, EntryUpdateDTO } from '@h4vnt3r/shared-types';
import { OnUpdateEntryCommand } from './commands/on-update-entry';

@Controller('webhooks')
export class WebhooksController {
  constructor(private command: CommandBus) {}

  @Post('strapi-event')
  async onStrapiEvent(@Body() entry: EntryUpdateDTO<unknown>) {
    if (entry.event === EntryEvents.EntryUpdate) {
      return await this.command.execute(new OnUpdateEntryCommand(entry));
    }
    throw new NotFoundException('Event not found');
  }
}
