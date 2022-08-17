import React from "react";
import "./fallingStars.scss";

type Props = {
  howMany: number;
};

export default function FallingStars({ howMany }: Props) {
  return (
    <div className="container">
      <div className="bubbles">
        {Array(howMany)
          .fill(0)
          .map((x, idx) => (
            <span
              key={idx}
              style={{ "--speeed": 10, "--color": 190 } as React.CSSProperties}
            ></span>
          ))}
      </div>
    </div>
  );
}
