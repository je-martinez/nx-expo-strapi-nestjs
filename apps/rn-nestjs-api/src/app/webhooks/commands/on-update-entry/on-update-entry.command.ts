import { EntryUpdateDTO } from '@h4vnt3r/shared-types';

export class OnUpdateEntryCommand {
  constructor(public readonly entry: EntryUpdateDTO<unknown>) {}
}
