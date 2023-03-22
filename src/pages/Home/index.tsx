import {
  ScrollButtonsControls,
  useScrollButtons,
} from "./hooks/useScrollButtons";

import InternalNavigation from "./components/InternalNavigation";
// import About from "./components/";
import GameCreator from "./components/GenerateGameBanner";
import HomeBanner from "./components/HomeBanner";
import AccountDashboard from "./components/AuthBanner";
import GeometricBackground from "../../shared/components/GeometricBackground";

import "./index.scss";

export default function Home() {
  const scrollButtons: ScrollButtonsControls = useScrollButtons();

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
          <GeometricBackground>
            <HomeBanner />
          </GeometricBackground>
        </div>
        <div ref={setRefsTopRight} className="home__account-dashboard">
          <GeometricBackground>
            <AccountDashboard />
          </GeometricBackground>
        </div>
      </header>
      <main>
        <div ref={setRefsBottomLeft} className="home__game-creator">
          <GeometricBackground>
            <GameCreator />
          </GeometricBackground>
        </div>
        <div ref={setRefsBottomRight} className="home__about">
          <GeometricBackground>{/* <About /> */}</GeometricBackground>
        </div>
      </main>
    </div>
  );
}
