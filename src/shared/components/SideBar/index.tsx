import React, { useState } from "react";
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
import {
  closeGameSettingsDialog,
  openGameSettingsDialog,
} from "../../redux/slices/dialogsSlice";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { Link } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import CachedIcon from "@mui/icons-material/Cached";

const SideBar = () => {
  const [close, setClose] = useState(true);
  const theme = useTheme();
  const dispatch = useAppDispatch();

  return (
    <SideBarContainer close={close}>
      <SideBarHeader>
        <SideBarImage>
          <img src={Logo} alt="logo" />
        </SideBarImage>
        <SideBarText close={close}>HiSudoku</SideBarText>
        <SideBarToggle close={close} onClick={() => setClose((prev) => !prev)}>
          <BsArrowRightCircle />
        </SideBarToggle>
      </SideBarHeader>

      <SideBarMenuBar>
        <SideBarSection>
          <SideBarLink to="/">
            <SideBarIcon>
              <BiHome />
            </SideBarIcon>
            <SideBarText close={close}>Home</SideBarText>
          </SideBarLink>
          <SideBarLink to="/">
            <SideBarIcon>
              <BiUser />
            </SideBarIcon>
            <SideBarText close={close}>Account</SideBarText>
          </SideBarLink>
          <SideBarLink to="/">
            <SideBarIcon>
              <AiOutlineUnorderedList />
            </SideBarIcon>
            <SideBarText close={close}>Find Sudoku</SideBarText>
          </SideBarLink>
          <SideBarLink to="/">
            <SideBarIcon>
              <BiHistory />
            </SideBarIcon>
            <SideBarText close={close}>Games History</SideBarText>
          </SideBarLink>
        </SideBarSection>
        <SideBarSection>
          <SideBarLink to="/">
            <SideBarIcon>
              <CachedIcon />
            </SideBarIcon>
            <SideBarText close={close}>Continue Sudoku</SideBarText>
          </SideBarLink>
          <SideBarLink to="/">
            <SideBarIcon>
              <BiPencil />
            </SideBarIcon>
            <SideBarText close={close}>Create Sudoku</SideBarText>
          </SideBarLink>
          <SideBarLink className="sidebar__link" to="/">
            <SideBarIcon>
              <AiOutlineRobot />
            </SideBarIcon>
            <SideBarText close={close}>Generate Sudoku</SideBarText>
          </SideBarLink>
          <SideBarElement
            onClick={() => {
              dispatch(openGameSettingsDialog());
            }}
          >
            <SideBarIcon>
              <BsTools />
            </SideBarIcon>
            <SideBarText close={close}>Game Settings</SideBarText>
          </SideBarElement>
        </SideBarSection>
        <SideBarSection>
          <SideBarLink to="/">
            <SideBarIcon>
              <BsDoorOpen />
            </SideBarIcon>
            <SideBarText close={close}>Logout</SideBarText>
          </SideBarLink>
          <SideBarThemeSwitch close={close}>
            <ToggleThemeSwitch />
          </SideBarThemeSwitch>
        </SideBarSection>
      </SideBarMenuBar>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarThemeSwitch = styled("div")<{ close: boolean }>`
  opacity: ${(props) => (props.close ? 0 : 1)};
  width: 100%;
  margin: 5px;
  display: "flex";
  align-items: "center";
  justify-content: "center";
  text-align: center;
`;

const SideBarElement = styled("div")`
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  border-radius: 6px;
  margin-top: 10px;
  min-height: 6vh;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3a3b3c;
  }
`;

const SideBarLink = styled(Link)`
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  border-radius: 6px;
  margin-top: 10px;
  min-height: 6vh;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3a3b3c;
  }
`;

const SideBarContainer = styled("nav")<{ close: boolean }>`
  background: #242526;
  width: ${(props) => (props.close ? "70px" : "250px")};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  padding: 10px 5px;
  transition: all 0.3s ease;
  z-index: 1000;
`;

const SideBarToggle = styled("button")<{ close: boolean }>`
  transform: ${(props) =>
    props.close
      ? "translateY(-50%) rotate(0deg)"
      : " translateY(-50%) rotate(180deg)"};
  position: absolute;
  top: 50%;
  right: -25px;
  height: 25px;
  width: 25px;
  background-color: #3a3b3c;
  color: var(#242526);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const SideBarHeader = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SideBarImage = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 60px;
  border-radius: 10px;
  height: 100%;
  font-size: 20px;
  img {
    width: 40px;
    border-radius: 6px;
  }
`;

const SideBarText = styled("div")<{ close: boolean }>`
  opacity: ${(props) => (props.close ? 0 : 1)};
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  color: #ccc;
`;

const SideBarIcon = styled("span")`
  color: #ccc;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 60px;
  height: 100%;
  border-radius: 10px;
  font-size: 20px;
  transition: all 0.3s ease;
`;

const SideBarMenuBar = styled("div")`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-between;
  margin-top: 20px;
`;

const SideBarSection = styled("div")``;
