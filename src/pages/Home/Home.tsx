import React, { useRef, useCallback } from "react";
import { useScrollButtons } from "../../hooks";

import InternalNavigation from "../../components/InternalNavigation/InternalNavigation";
import About from "../../components/About/About";
import GameCreator from "../../components/GameCreator/GameCreator";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AccountDashboard from "../../components/AccountDashboard/AccountDashboard";

export default function Home() {
  const scrollButtons = useScrollButtons();

  const {
    setRefsTopLeft,
    setRefsTopRight,
    setRefsBottomLeft,
    setRefsBottomRight,
  } = scrollButtons;

  return (
    <div className="home">
      <InternalNavigation scrollButtons={scrollButtons} />
      <header>
        <div ref={setRefsTopLeft} className="home__banner">
          <HomeBanner />
        </div>
        <div ref={setRefsTopRight} className="home__account-dashboard">
          <AccountDashboard />
        </div>
      </header>
      <main>
        <div ref={setRefsBottomLeft} className="home__game-creator">
          <GameCreator />
        </div>
        <div ref={setRefsBottomRight} className="home__about">
          <About />
        </div>
      </main>
    </div>
  );
}
