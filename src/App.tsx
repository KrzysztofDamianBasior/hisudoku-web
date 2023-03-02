import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home";
import Auth from "./pages/Auth";

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
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/game" element={<StaticComponent />} />
          <Route path="/profile" element={<StaticComponent />} />
          <Route path="/sudokus" element={<StaticComponent />} />
          <Route path="*" element={<StaticComponent />} /> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
