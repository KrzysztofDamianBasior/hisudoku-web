import React from "react";
import Logo from "../../assets/icon.png";
import ToggleThemeSwitch from "../ToggleThemeSwitch/ToggleThemeSwitch";

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner__toggle-switch">
        <ToggleThemeSwitch name="home-banner__toggle-theme-switch-name" />
      </div>
      <div className="home-banner__content-bearer">
        <img src={Logo} alt="logo" className="home-banner__logo" />
        <div className="home-banner__title">HiSudoku</div>
      </div>
    </div>
  );
};
export default HomeBanner;
