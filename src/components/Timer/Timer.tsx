import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Timer = (props: Props) => {
  const [time, setTime] = useState<{
    seconds: number;
    minutes: number;
    counter: number;
  }>({ seconds: 0, minutes: 0, counter: 0 });
  const interval = useRef<NodeJS.Timer>();

  useEffect(() => {
    interval.current = setInterval(function () {
      setTime((prev) => {
        let { seconds, minutes, counter } = prev;
        counter = counter + 1;
        seconds = counter % 60;
        minutes = Math.floor(counter / 60);

        return {
          counter,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="countdown-wrapper">
      {time.minutes && (
        <div className="countdown-item">
          <SVGCircle radius={mapNumber(time.minutes, 60, 0, 0, 360)} />
          {time.minutes}
          <span>minutes</span>
        </div>
      )}
      {time.seconds && (
        <div className="countdown-item">
          <SVGCircle radius={mapNumber(time.seconds, 60, 0, 0, 360)} />
          {time.seconds}
          <span>seconds</span>
        </div>
      )}
    </div>
  );
};
export default Timer;

//https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/
const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#333"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

//https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/
function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}
