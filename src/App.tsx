import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./pages/Home";
import "animate.css";

function App() {
  const location = useLocation();

  const transitionClasses = {
    enter: "animate__animated",
    enterActive: "animate__fadeInTopLeft",
    exit: "animate__animated",
    exitActive: "animate__fadeOutRight",
  };

  return (
    <div className="App">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          timeout={400}
          classNames={transitionClasses}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
