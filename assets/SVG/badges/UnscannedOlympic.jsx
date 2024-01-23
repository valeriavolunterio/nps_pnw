import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const UnscannedOlympic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={109}
    height={142}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8D969A"
      strokeDasharray="5 5"
      strokeLinecap="round"
      strokeWidth={2}
      d="M107.944 82.685V95.03a6.542 6.542 0 0 1-6.538 6.546h-3.882a38.272 38.272 0 0 1-2.195 3.523c-9.704 13.586-21.563 24.364-34.281 33.634-4.308 3.021-8.41 3.021-12.718 0-13.153-9.704-25.871-20.268-34.928-34.928-.44-.715-.86-1.459-1.26-2.229H7.538A6.542 6.542 0 0 1 1 95.031V82.685a6.548 6.548 0 0 1 6.167-6.538c-.393-18.782-.207-37.709-.014-56.635C7.153 9.815 9.52 6.36 17.93 4.64c24.364-4.741 48.94-4.962 73.517 0 8.624 1.721 10.564 4.956 10.564 14.873v56.655a6.546 6.546 0 0 1 5.933 6.518Z"
    />
  </Svg>
)
export default UnscannedOlympic