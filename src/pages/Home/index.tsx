import {
  ScrollButtonsControls,
  useScrollButtons,
} from "./hooks/useScrollButtons";

import InternalNavigation from "./components/InternalNavigation";
// import About from "./components/";
import GameCreator from "./components/GenerateGameBanner";
import HomeBanner from "./components/HomeBanner";
import AccountDashboard from "./components/AuthBanner";
import GeometricBackground from "../../shared/components/backgrounds/GeometricBackground";

import "./index.scss";
import AnimatedPage from "../../shared/components/core/AnimatedPage";
import CheckMoreBanner from "./components/CheckMoreBanner";

export default function Home() {
  const scrollButtons: ScrollButtonsControls = useScrollButtons();

  const {
    setRefsTopLeft,
    setRefsTopRight,
    setRefsBottomLeft,
    setRefsBottomRight,
  } = scrollButtons;

  return (
    <AnimatedPage>
      <GeometricBackground>
        <div className="home">
          <InternalNavigation scrollButtons={scrollButtons} />
          <div className="home__wrapper">
            <div className="home__top">
              <div ref={setRefsTopLeft} className="home__banner">
                <HomeBanner />
              </div>
              <div ref={setRefsTopRight} className="home__account-dashboard">
                <AccountDashboard />
              </div>
            </div>
            <div className="home__bottom">
              <div ref={setRefsBottomLeft} className="home__game-creator">
                <GameCreator />
              </div>
              <div ref={setRefsBottomRight} className="home__about">
                <CheckMoreBanner />
              </div>
            </div>
          </div>
        </div>
      </GeometricBackground>
    </AnimatedPage>
  );
}
