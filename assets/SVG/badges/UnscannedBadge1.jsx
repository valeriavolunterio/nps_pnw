import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const UnscannedBadge1 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={98}
    height={142}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8D969A"
      strokeDasharray="5 5"
      strokeLinecap="round"
      strokeWidth={2}
      d="M96.146 52.284v30.83c0 8.408-2.157 15.522-6.688 21.99-9.709 13.582-21.575 24.362-34.304 33.632-4.315 3.019-8.415 3.019-12.73 0-13.16-9.701-25.89-20.265-34.951-34.925C4.02 98.205 1.647 90.659 1.43 83.976.784 62.633 1 41.074 1.216 19.514c0-9.701 2.373-13.15 10.787-14.875 24.38-4.743 48.976-4.959 73.572 0 8.63 1.724 10.571 4.958 10.571 14.875v32.77Z"
    />
  </Svg>
)
export default UnscannedBadge1
