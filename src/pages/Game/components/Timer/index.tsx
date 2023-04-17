import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";

const Timer = () => {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {time.minutes !== 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            width: "100px",
            height: "100px",
            fontSize: "40px",
            lineHeight: "30px",
            margin: "10px",
            paddingTop: "10px",
          }}
        >
          <SVGCircle
            radius={mapNumber({
              num: time.minutes,
              in_min: 0,
              in_max: 60,
              out_min: 0,
              out_max: 360,
            })}
          />
          {time.minutes}
          <Box
            sx={{
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            minutes
          </Box>
        </Box>
      ) : null}
      {time.seconds !== 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            width: "100px",
            height: "100px",
            fontSize: "40px",
            lineHeight: "30px",
            margin: "10px",
            paddingTop: "10px",
          }}
        >
          <SVGCircle
            radius={mapNumber({
              num: time.seconds,
              in_min: 0,
              in_max: 60,
              out_min: 0,
              out_max: 360,
            })}
          />
          {time.seconds}
          <Box
            sx={{
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            seconds
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
export default Timer;

//https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/
const SVGCircle = ({ radius }: { radius: number }) => (
  <svg
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100px",
      height: "100px",
    }}
  >
    <path
      fill="none"
      stroke="#333"
      strokeWidth="4"
      d={describeArc({
        x: 50,
        y: 50,
        radius: 48,
        startAngle: 0,
        endAngle: radius,
      })}
    />
  </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian({
  centerX,
  centerY,
  radius,
  angleInDegrees,
}: {
  centerX: number;
  centerY: number;
  radius: number;
  angleInDegrees: number;
}) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

//https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/
function describeArc({
  x,
  y,
  radius,
  startAngle,
  endAngle,
}: {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
}) {
  const start = polarToCartesian({
    centerX: x,
    centerY: y,
    radius,
    angleInDegrees: endAngle,
  });
  const end = polarToCartesian({
    centerX: x,
    centerY: y,
    radius,
    angleInDegrees: startAngle,
  });

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
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

function mapNumber({
  num,
  in_min,
  in_max,
  out_min,
  out_max,
}: {
  num: number;
  in_min: number;
  in_max: number;
  out_min: number;
  out_max: number;
}) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
