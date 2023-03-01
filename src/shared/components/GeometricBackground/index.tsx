import React from "react";

type Props = {
  children: React.ReactNode;
};

const GeometricBackground = ({ children }: Props) => {
  return (
    <div className="geometric-background">
      <div className="geometric-background__cube"></div>
      <div className="geometric-background__cube"></div>
      <div className="geometric-background__cube"></div>
      <div className="geometric-background__cube"></div>
      <div className="geometric-background__cube"></div>
      <div className="geometric-background__cube"></div>
      {children}
    </div>
  );
};

export default GeometricBackground;
