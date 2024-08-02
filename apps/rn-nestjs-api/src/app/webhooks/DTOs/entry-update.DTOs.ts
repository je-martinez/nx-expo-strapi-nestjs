export enum EntryEvents {
  entryCreate = 'entry.create',
  entryUpdate = 'entry.update',
  entryDelete = 'entry.delete',
  entryPublish = 'entry.publish',
  entryUnpublish = 'entry.unpublish',
  mediaCreate = 'media.create',
  mediaUpdate = 'media.update',
  mediaDelete = 'media.delete',
  reviewWorkflowsUpdateEntryStage = 'review-workflows.updateEntryStage',
  releasesPublish = 'releases.publish',
}

export interface EntryUpdateDTO {
  event: EntryEvents;
  createdAt: Date;
  model: string;
  entry: never;
}
