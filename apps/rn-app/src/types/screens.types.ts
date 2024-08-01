export enum ResourseSectionId {
  Documentation = 'doc',
  Blog = 'blog',
  Youtube = 'youtube',
  InteractiveTutorials = 'it-tutorials',
  VideoCourses = 'courses',
}

export interface HomeScreenMetadata {
  title: string;
  resources_section: ResourcesSection;
  first_line_message: string;
  whats_next_section: WhatsNextSection;
}

export interface ResourcesSection {
  items: ResourcesSectionItem[];
  title: string;
}

export interface ResourcesSectionItem {
  id: ResourseSectionId | string;
  link: string;
  title: string;
  subtitle: string;
}

export interface WhatsNextSection {
  title: string;
  button_label: string;
}
