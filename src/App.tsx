import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, useLocation, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();

  const transitionClasses = {
    enter: "animate__animated",
    enterActive: "animate__fadeIn",
    exit: "animate__animated",
    exitActive: "animate__fadeOut",
  };

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={50000}
        classNames={transitionClasses}
      >
        <Routes location={location}>
          <Route path="/" element={<StaticComponent />} />
          <Route path="/auth" element={<StaticComponent />} />
          <Route path="/game" element={<StaticComponent />} />
          <Route path="/profile" element={<StaticComponent />} />
          <Route path="/sudokus" element={<StaticComponent />} />
          {/* <Route path="*" element={<StaticComponent />} /> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;

const StaticComponent = () => {
  return (
    <div className="App">
      <Link to={"/"}>Home</Link>
      <Link to={"/auth"}>Auth</Link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
