import React from "react";
import {
  setDarkTheme,
  setLightTheme,
  toggleTheme,
} from "../redux/slices/themeSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  //const dispatch = useDispatch();
  //dispatch(setDarkTheme())

  return <Link to="/signin">SignIn</Link>;
}
