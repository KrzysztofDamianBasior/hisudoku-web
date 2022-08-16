import React, { useState } from "react";

// Image by <a href="https://pixabay.com/users/felixmittermeier-4397258/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2695569">Felix-Mittermeier.de</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2695569">Pixabay</a>
// Image by <a href="https://pixabay.com/users/dimitrisvetsikas1969-1857980/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2329680">Dimitris Vetsikas</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2329680">Pixabay</a>
import clouds from "../../assets/clouds.jpg";
import stars from "../../assets/stars.jpg";

import { RiSunFill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  setDarkTheme,
  setLightTheme,
  toggleTheme,
} from "../../redux/slices/themeSlice";
import { useDispatch } from "react-redux";

type Props = {
  name: string;
  // checked: boolean;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ToggleThemeSwitch = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  // e.target.checked
  // const dispatch = useDispatch();
  // dispatch(setDarkTheme());

  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    setChecked(!checked);
  }
  const optionLabels = ["yes", "no"];

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

ToggleThemeSwitch.defaultProps = {
  optionLabels: ["Yes", "No"],
};

export default ToggleThemeSwitch;

//filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff) drop-shadow(0 0 15px #fff);
{
  /* <div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})` 
}}></div> */
}
