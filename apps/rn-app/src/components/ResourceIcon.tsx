import Svg, { Path } from 'react-native-svg';
import { ResourceSectionId } from '../types';
import DocIcon from './DocIcon';
import BlogIcon from './BlogIcon';
import YoutubeIcon from './YoutubeIcon';
import PointerClickIcon from './PointerClickIcon';
import CourseIcon from './CourseIcon';

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
