import React from "react";
import Svg, { Defs, Ellipse, G, RadialGradient, Stop, SvgProps } from "react-native-svg";

function ListItemBlob(props: SvgProps) {
  return (
    <Svg width={80} height={80} fill="none" {...props}>
      <G>
        <Ellipse cx={37.928} cy={27} rx={17.524} ry={16.736} fill="#B699FF" />
      </G>
      <G>
        <Ellipse
          cx={37.928}
          cy={27}
          rx={19.928}
          ry={19}
          stroke="url(#prefix__paint0_angular_227:3408)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 20 8 1 10 8"
        />
      </G>
      <Defs>
        <RadialGradient
          id="prefix__paint0_angular_227:3408"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(108.936 9.323 27.043) scale(19.4487 20.4063)"
        >
          <Stop offset={0.087} stopColor="#844FFC" />
          <Stop offset={0.692} stopColor="#E1467C" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default ListItemBlob;
