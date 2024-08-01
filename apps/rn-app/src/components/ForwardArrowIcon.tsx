import Svg, { Path } from 'react-native-svg';

export default function ForwardArrowIcon() {
  return (
    <Svg
      width={18}
      height={18}
      stroke="#000000"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </Svg>
  );
}
