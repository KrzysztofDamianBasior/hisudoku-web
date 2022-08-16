import React from "react";
import { useScrollButtons } from "../../hooks";

import InternalNavigation from "../../components/InternalNavigation/InternalNavigation";
import About from "../../components/About/About";
import GameCreator from "../../components/GameCreator/GameCreator";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AccountDashboard from "../../components/AccountDashboard/AccountDashboard";

export default function Home() {
  const scrollButtons = useScrollButtons();
  const { topLeft, topRight, bottomLeft, bottomRight } = scrollButtons;

  return (
    <div className="home">
      {/* <InternalNavigation scrollButtons={scrollButtons} /> */}
      <header>
        <div ref={topLeft} className="home__banner">
          <HomeBanner />
        </div>
        <div ref={topRight} className="home__account-dashboard">
          <AccountDashboard />
        </div>
      </header>
      <main>
        <div ref={bottomLeft} className="home__game-creator">
          <GameCreator />
        </div>
        <div ref={bottomRight} className="home__about">
          <About />
        </div>
      </main>
    </div>
  );
}
