export enum EntryEvents {
  EntryCreate = 'entry.create',
  EntryUpdate = 'entry.update',
  EntryDelete = 'entry.delete',
  EntryPublish = 'entry.publish',
  EntryUnpublish = 'entry.unpublish',
  MediaCreate = 'media.create',
  MediaUpdate = 'media.update',
  MediaDelete = 'media.delete',
  ReviewWorkflowsUpdateEntryStage = 'review-workflows.updateEntryStage',
  ReleasesPublish = 'releases.publish',
}

export interface EntryUpdateDTO<T> {
  event: EntryEvents;
  createdAt: Date;
  model: string;
  entry: T;
}
