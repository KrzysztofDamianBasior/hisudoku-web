import React from "react";
import Logo from "../../../../shared/assets/icon.png";
import ToggleThemeSwitch from "../../../../shared/components/ToggleThemeSwitch/ToggleThemeSwitch";
import "./index.scss";
import HomeBlockquoteGroup from "../HomeBlockquoteGroup";

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner__content-bearer">
        <h1 className="home-banner__title">HiSudoku</h1>
        {/* <img src={Logo} alt="logo" className="home-banner__logo" /> */}
        <HomeBlockquoteGroup />
        scroll the page to reveal more
      </div>
      <div className="home-banner__toggle-switch">
        <ToggleThemeSwitch id="home-banner__toggle-theme-switch-name" />
      </div>
    </div>
  );
};
export default HomeBanner;
