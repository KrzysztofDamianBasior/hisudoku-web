import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<StaticComponent />} />
      <Route path="/auth" element={<StaticComponent />} />
      <Route path="/game" element={<StaticComponent />} />
      <Route path="/profile" element={<StaticComponent />} />
      <Route path="/sudokus" element={<StaticComponent />} />
      {/* <Route path="*" element={<StaticComponent />} /> */}
    </Routes>
  );
}

export default App;

const StaticComponent = () => {
  return (
    <div className="App">
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
