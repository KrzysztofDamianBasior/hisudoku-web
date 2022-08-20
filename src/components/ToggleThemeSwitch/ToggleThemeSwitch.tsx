import React, { useState, useEffect } from "react";
import { RiSunFill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  setDarkTheme,
  setLightTheme,
  toggleTheme,
} from "../../redux/slices/themeSlice";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";

type Props = {
  name: string;
};

const ToggleThemeSwitch = (props: Props) => {
  const theme = useAppSelector((state: RootState) => state.appTheme.theme);
  const [checked, setChecked] = useState<boolean>(
    theme === "light" ? true : false
  );
  const [disabled, setDisabled] = useState<boolean>(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (checked === true) {
      dispatch(setLightTheme());
    } else {
      dispatch(setDarkTheme());
    }
  }, [checked]);

  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    setChecked(!checked);
  }
  const optionLabels = ["light", "dark"];

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        checked={checked}
        onChange={(e) => setChecked((prev) => !prev)}
        name={props.name}
        id={props.name}
        disabled={disabled}
      />
      <label
        className="toggle-switch-label"
        htmlFor={props.name}
        tabIndex={disabled ? -1 : 1}
        onKeyDown={(e) => handleKeyPress(e)}
      >
        <span
          className={
            disabled
              ? "toggle-switch-inner toggle-switch-disabled"
              : "toggle-switch-inner"
          }
          data-yes={optionLabels[0]}
          data-no={optionLabels[1]}
          tabIndex={-1}
        />
        <span
          className={
            disabled
              ? "toggle-switch-switch toggle-switch-disabled"
              : "toggle-switch-switch"
          }
          tabIndex={-1}
        >
          {checked ? <RiSunFill /> : <BsFillMoonStarsFill />}
        </span>
      </label>
    </div>
  );
};

export default ToggleThemeSwitch;
