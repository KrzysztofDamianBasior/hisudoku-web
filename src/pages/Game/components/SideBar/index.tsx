import React, { useState } from "react";
import classNames from "classnames";
import Logo from "../../../../shared/assets/icon.png";
import ToggleThemeSwitch from "../../../../shared/components/ToggleThemeSwitch/ToggleThemeSwitch";
// import SettingsModal from "../../../../shared/components/SettingsModal";
import {
  BsArrowRightCircle,
  BsSearch,
  BsDoorOpen,
  BsTools,
} from "react-icons/bs";
import { BiHome, BiHistory, BiPencil, BiUser } from "react-icons/bi";
import { AiOutlineRobot, AiOutlineUnorderedList } from "react-icons/ai";
import {
  closeGameSettingsDialog,
  openGameSettingsDialog,
} from "../../../../shared/redux/slices/dialogsSlice";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks";
import { Link } from "react-router-dom";
import "./index.scss";
import { Typography, makeStyles } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme, styled } from "@mui/material/styles";

const SideBar = () => {
  const [close, setClose] = useState(true);
  const dispatch = useAppDispatch();

  // const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  return (
    <nav className={classNames("sidebar", { close: close })}>
      {/* {settingsModalOpen && <SettingsModal />} */}

      <div className="sidebar__header">
        <div className="sidebar__banner">
          <span className="sidebar__image">
            <img src={Logo} alt="logo" />
          </span>

          <div className="text">HiSudoku</div>
        </div>

        <button className="toggle" onClick={() => setClose((prev) => !prev)}>
          <BsArrowRightCircle />
        </button>
      </div>

      <div className="sidebar__menu-bar">
        <ul>
          <li className="nav-link">
            <Link className="sidebar__link" to="/">
              <span className="icon">
                <BiHome />
              </span>
              <span className="text">Home</span>
            </Link>
          </li>

          <li className="nav-link">
            <Link className="sidebar__link" to="/">
              <span className="icon">
                <BiPencil />
              </span>
              <span className="text">Create Sudoku</span>
            </Link>
          </li>

          <li className="nav-link">
            <Link className="sidebar__link" to="/">
              <span className="icon">
                <AiOutlineRobot />
              </span>
              <span className="text">Generate Sudoku</span>
            </Link>
          </li>

          <li className="nav-link">
            <Link className="sidebar__link" to="/">
              <span className="icon">
                <AiOutlineUnorderedList />
              </span>
              <span className="text">Find Sudoku</span>
            </Link>
          </li>
          <li
            className="nav-link"
            onClick={() => {
              // setSettingsModalOpen(true);
              dispatch(openGameSettingsDialog());
            }}
          >
            <div className="sidebar__link">
              <span className="icon">
                <BsTools />
              </span>
              <span className="text">Settings</span>
            </div>
          </li>
        </ul>
        <ul>
          <li className="nav-link">
            <Link className="sidebar__link" to="/">
              <span className="icon">
                <BiHistory />
              </span>
              <span className="text">Games History</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link className="sidebar__link" to="/">
              <span className="icon">
                {/* <BiUser /> */}
                <BsDoorOpen />
              </span>
              <span className="text">Logout</span>
            </Link>
          </li>
          <li className="toogle-theme-switch">
            <ToggleThemeSwitch id="sideBarToggleThemeSwitch" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;

// <Box
// sx={{
//   color: "success.dark",
//   color: "text.primary",
//   color: "text.secondary",
//   bgcolor: 'background.paper',
//   bgcolor: "background.paper",
//   borderColor: 'primary.main',
//   boxShadow: 1,
//   borderRadius: 2,
//   mx: 0.5,
//   margin: 2,
//   p: 2,
//   minWidth: 300,
//   width: 1/2,
//   display: "inline",
//   fontSize: 14,
//   fontWeight: "bold",
//   fontWeight: "medium",
//   fontWeight: 'fontWeightLight',
//   typography: 'body1',
//   height: (theme) => theme.spacing(10),
//   '&:hover': {
//     color: 'red',
//     backgroundColor: 'white',
//   },
//   "& > :not(style)": {
//     m: 1,
//     width: 128,
//     height: 128,
//   },
// }}
// ></Box>
