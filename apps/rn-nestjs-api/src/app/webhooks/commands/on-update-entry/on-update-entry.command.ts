import { EntryUpdateDTO } from '../../DTOs/entry-update.DTOs';

export class OnUpdateEntryCommand {
  constructor(public readonly entry: EntryUpdateDTO) {}
}
