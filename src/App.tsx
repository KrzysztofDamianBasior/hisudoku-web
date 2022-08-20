import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/Home/Home";
import Sign from "././pages/Sign/Sign";
import Game from "./pages/Game/Game";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import { useAppSelector } from "./hooks";
import { RootState } from "./redux/store";

const App = () => {
  const location = useLocation();
  const theme = useAppSelector((state: RootState) => state.appTheme.theme);

  const transitionClasses = {
    enter: "animate__animated",
    enterActive: "animate__slideInDown",
    exit: "animate__animated",
    exitActive: "animate__fadeOut",
  };

  return (
    <div className="App" data-theme={theme}>
      <ErrorBoundary>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames={transitionClasses}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="/game" element={<Game />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </ErrorBoundary>
    </div>
  );
};

export default App;
