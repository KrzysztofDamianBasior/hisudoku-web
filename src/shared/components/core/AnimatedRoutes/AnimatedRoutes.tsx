import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../../../../pages/Home";
import Auth from "../../../../pages/Auth";
import Game from "../../../../pages/Game";

import { AnimatePresence } from "framer-motion";

type Props = {};

const AnimatedRoutes = (props: Props) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/game" element={<Game />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/sudokus" element={<SudokusList />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
