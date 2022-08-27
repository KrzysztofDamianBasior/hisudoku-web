import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SudokuBoard from "../../components/SudokuBoard/SudokuBoard";
import SudokuToolset from "../../components/SudokuToolset/SudokuToolset";
import Timer from "../../components/Timer/Timer";
import SudokuKeyboard from "../../components/SudokuKeyboard/SudokuKeyboard";

import {
  nextMove,
  undoMove,
  newGame,
} from "../../redux/slices/currentGameSlice";
import { add, pop, clear } from "../../redux/slices/gamesHistorySlice";

type Props = {};

const Game = (props: Props) => {
  return (
    <div className="game">
      <SideBar />
      <SudokuToolset />
      <div className="game__board">
        <Timer />
        <SudokuBoard />
      </div>
    </div>
  );
};
export default Game;
