import React from "react";
import {
  setDarkTheme,
  setLightTheme,
  toggleTheme,
} from "../../redux/slices/themeSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useScrollButtons } from "../../hooks";
import InternalNavigation from "../../components/InternalNavigation/InternalNavigation";
import Waves from "../../components/Waves/Waves";
import "./home.scss";

export default function Home() {
  const scrollButtons = useScrollButtons();
  const { topLeft, topRight, bottomLeft, bottomRight } = scrollButtons;
  //const dispatch = useDispatch();
  //dispatch(setDarkTheme())

  return (
    <div className="home">
      {/* <InternalNavigation scrollButtons={scrollButtons} /> */}
      {/* <Waves /> */}
      <header>
        <div ref={topLeft} className="home__banner">
          Banner
        </div>
        <div ref={topRight} className="home__account-dashboard">
          Account Dashboard
        </div>
      </header>
      <main>
        <div ref={bottomLeft} className="home__game-dashboard">
          Game Creator
        </div>
        <div ref={bottomRight} className="home__about">
          About
        </div>
      </main>
    </div>
  );
}
