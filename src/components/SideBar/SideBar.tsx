import React, { useState } from "react";
import classNames from "classnames";
import Logo from "../../assets/icon.png";
import ToggleThemeSwitch from "../ToggleThemeSwitch/ToggleThemeSwitch";
import {
  BsArrowRightCircle,
  BsSearch,
  BsDoorOpen,
  BsTools,
} from "react-icons/bs";
import { BiHome, BiHistory, BiPencil, BiUser } from "react-icons/bi";
import { AiOutlineRobot, AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [close, setClose] = useState(true);

  return (
    <nav className={classNames("sidebar", { close: close })}>
      <header>
        <div className="sidebar__banner">
          <span className="sidebar__image">
            <img src={Logo} alt="logo" />
          </span>

          <div className="text logo-text">HiSudoku</div>
        </div>

        <button className="toggle" onClick={() => setClose((prev) => !prev)}>
          <BsArrowRightCircle />
        </button>
      </header>

      <div className="menu-bar">
        <div className="top-content">
          <li className="search-box" onClick={() => setClose(false)}>
            <span className="icon">
              <BsSearch />
            </span>
            <input type="text" placeholder="Search for users" />
          </li>

          <ul className="menu-links">
            <li className="nav-link">
              <Link className="sidebar__link" to="/">
                <span className="icon">
                  <BiHome />
                </span>
                <span className="text nav-text">Home</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link className="sidebar__link" to="/">
                <span className="icon">
                  <BiUser />
                </span>
                <span className="text nav-text">User Profile</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link className="sidebar__link" to="/">
                <span className="icon">
                  <BiHistory />
                </span>
                <span className="text nav-text">Games History</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link className="sidebar__link" to="/">
                <span className="icon">
                  <BsTools />
                </span>
                <span className="text nav-text">Settings</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link className="sidebar__link" to="/">
                <span className="icon">
                  <BiPencil />
                </span>
                <span className="text nav-text">Create Sudoku</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link className="sidebar__link" to="/">
                <span className="icon">
                  <AiOutlineRobot />
                </span>
                <span className="text nav-text">Generate Sudoku</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link className="sidebar__link" to="/">
                <span className="icon">
                  <AiOutlineUnorderedList />
                </span>
                <span className="text nav-text">Find Sudoku</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="nav-link">
            <Link className="sidebar__link" to="/">
              <span className="icon">
                <BsDoorOpen />
              </span>
              <span className="text nav-text">Logout</span>
            </Link>
          </li>
          <li className="toogle-theme-switch">
            <ToggleThemeSwitch name="sideBarToggleThemeSwitch" />
          </li>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
