import { ResourceSectionId } from '../types';
import BlogIcon from './BlogIcon';
import CourseIcon from './CourseIcon';
import DocIcon from './DocIcon';
import PointerClickIcon from './PointerClickIcon';
import YoutubeIcon from './YoutubeIcon';

export default function ResourceIcon({ icon }: { icon: ResourceSectionId }) {
  return (
    <>
      {icon === ResourceSectionId.Documentation && <DocIcon />}
      {icon === ResourceSectionId.Blog && <BlogIcon />}
      {icon === ResourceSectionId.Youtube && <YoutubeIcon />}
      {icon === ResourceSectionId.InteractiveTutorials && <PointerClickIcon />}
      {icon === ResourceSectionId.VideoCourses && <CourseIcon />}
    </>
  );
}
