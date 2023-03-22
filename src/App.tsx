import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Game from "./pages/Game";

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
          <Route path="/game" element={<Game />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/sudokus" element={<SudokusList />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
