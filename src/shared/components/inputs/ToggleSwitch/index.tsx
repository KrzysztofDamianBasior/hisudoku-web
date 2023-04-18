import React, { useState } from "react";
import "./index.scss";

type Props = {
  isChecked: boolean;
  callback: (isChecked: boolean) => void;
};

const ToggleSwitch = (props: Props) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => {
          props.callback(!props.isChecked);
        }}
      />
      <div>
        <span className="toggle-switch__slide"></span>
      </div>
    </div>
  );
};
export default ToggleSwitch;
