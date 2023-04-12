import React, { useState, useEffect, KeyboardEvent } from "react";
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

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import "./index.scss";

type Props = {
  id?: string;
  optionLabels?: ["light" | "dark", "light" | "dark"];
  disabled?: boolean;
};

const ToggleThemeSwitch = ({
  id = "toggle-theme-switch",
  optionLabels = ["light", "dark"],
  disabled = false,
}: Props) => {
  const theme = useAppSelector((state: RootState) => state.appTheme.theme);
  const [checked, setChecked] = useState<boolean>(
    theme === "light" ? true : false
  );
  //   const [disabled, setDisabled] = useState<boolean>(isDisabled);

  const dispatch = useDispatch();
  useEffect(() => {
    if (checked === true) {
      dispatch(setLightTheme());
    } else {
      dispatch(setDarkTheme());
    }
  }, [checked, dispatch]);

  function handleKeyPress(e: KeyboardEvent) {
    //KeyboardEvent Value
    if (e.keyCode !== 32) return;

    e.preventDefault();
    setChecked(!checked);
  }

  return (
    <div className="toggle-theme-switch">
      <input
        type="checkbox"
        className="toggle-theme-switch-checkbox"
        checked={checked}
        onChange={(e) => setChecked((prev) => !prev)}
        name={id}
        id={id}
        disabled={disabled}
      />
      <label
        className="toggle-theme-switch-label"
        htmlFor={id}
        tabIndex={disabled ? -1 : 1}
        onKeyDown={(e) => handleKeyPress(e)}
      >
        <span
          className={
            disabled
              ? "toggle-theme-switch-inner toggle-theme-switch-disabled"
              : "toggle-theme-switch-inner"
          }
          data-yes={optionLabels[0]}
          data-no={optionLabels[1]}
          tabIndex={-1}
        />
        <span
          className={
            disabled
              ? "toggle-theme-switch-switch toggle-theme-switch-disabled"
              : "toggle-theme-switch-switch"
          }
          tabIndex={-1}
        >
          {/* {checked ? <RiSunFill /> : <BsFillMoonStarsFill />} */}
          {checked ? <LightModeIcon /> : <DarkModeIcon />}
        </span>
      </label>
    </div>
  );
};

export default ToggleThemeSwitch;
