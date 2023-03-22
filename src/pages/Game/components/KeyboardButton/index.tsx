import React from "react";

type Props = {
  children: React.ReactNode;
};

const KeyboardButton = ({ children }: Props) => {
  return (
    <button className="keyboard-button">
      <span className="keyboard-button__edge"></span>
      <span className="keyboard-button__front">{children}</span>
    </button>
  );
};

export default KeyboardButton;
