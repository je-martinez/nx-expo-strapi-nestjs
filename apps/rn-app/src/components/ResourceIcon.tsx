import Svg, { Path } from 'react-native-svg';
import { ResourceSectionId } from '../types';

export default function ResourceIcon({ icon }: { icon: ResourceSectionId }) {
  return (
    <>
      {icon === ResourceSectionId.Documentation && (
        <Svg
          width={24}
          height={24}
          stroke="#000000"
          fill="none"
          viewBox="0 0 24 24"
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </Svg>
      )}
      {icon === ResourceSectionId.Blog && (
        <Svg
          width={24}
          height={24}
          stroke="#000000"
          fill="none"
          viewBox="0 0 24 24"
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </Svg>
      )}
      {icon === ResourceSectionId.Youtube && (
        <Svg
          width={24}
          height={24}
          stroke="#000000"
          fill="none"
          viewBox="0 0 24 24"
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </Svg>
      )}
      {icon === ResourceSectionId.InteractiveTutorials && (
        <Svg
          width={24}
          height={24}
          stroke="#000000"
          fill="none"
          viewBox="0 0 24 24"
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </Svg>
      )}
      {icon === ResourceSectionId.VideoCourses && (
        <Svg
          width={24}
          height={24}
          stroke="#000000"
          fill="none"
          viewBox="0 0 24 24"
        >
          <Path d="M12 14l9-5-9-5-9 5 9 5z"></Path>
          <Path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></Path>
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          ></Path>
        </Svg>
      )}
    </>
  );
}
