import React from "react";

type Props = {
  children: React.ReactNode;
};

const WavyBackground = ({ children }: Props) => {
  return (
    <div className="wavy-background">
      <div className="wavy-background__wave"></div>
      <div className="wavy-background__wave"></div>
      <div className="wavy-background__wave"></div>
      {children}
    </div>
  );
};

export default WavyBackground;
