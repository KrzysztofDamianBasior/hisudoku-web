import React from "react";
import Logo from "../../../../shared/assets/icon.png";
import ToggleThemeSwitch from "../../../../shared/components/ToggleThemeSwitch/ToggleThemeSwitch";
import "./index.scss";
import HomeBlockquoteGroup from "../HomeBlockquoteGroup";

import { Typography } from "@mui/material";

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <h1 className="home-banner__title">HiSudoku</h1>
      <HomeBlockquoteGroup />

      <Typography variant="h4" sx={{ my: "50px" }}>
        scroll the page to reveal more
      </Typography>
      <div className="home-banner__toggle-switch">
        <ToggleThemeSwitch id="home-banner__toggle-theme-switch-name" />
      </div>
    </div>
  );
};
export default HomeBanner;
