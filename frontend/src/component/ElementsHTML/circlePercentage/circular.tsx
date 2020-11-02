import { easeQuadInOut } from "d3-ease";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedCircular/AnimatedProgressProvider";
// Animation
import "./circle.css";
type Props = {
  values: number;
  color: string;
  visibility: boolean;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CirclePercent: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line react/prop-types
  const { values, color, visibility } = props;
  const displayValue = () => {
    if (visibility) {
      return values;
    } else {
      return 0;
    }
  };
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={displayValue()}
      duration={2}
      easingFunction={easeQuadInOut}
      repeat={false}
    >
      {(values: number) => {
        const roundedValue = Math.round(values);
        return (
          <CircularProgressbar
            value={values}
            text={`${roundedValue}%`}
            /* This is important to include, because if you're fully managing the
    animation yourself, you'll want to disable the CSS animation. */
            //styles={buildStyles({ pathTransition: "none" })}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "16px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: color,
              textColor: "white",
              trailColor: "black",
              backgroundColor: "#3e98c7",
            })}
          />
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default CirclePercent;
