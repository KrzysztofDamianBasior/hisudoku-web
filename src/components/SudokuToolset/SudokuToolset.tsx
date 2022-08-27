import React, { useState } from "react";
import classNames from "classnames";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineClear,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsUiChecksGrid, BsShare } from "react-icons/bs";
import { ImSortNumbericDesc } from "react-icons/im"; //solve

type Props = {};

const SudokuToolset = (props: Props) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="sudoku-toolset">
      <div className="sudoku-toolset__container">
        <div
          className="sudoku-toolset__center"
          onClick={() => {
            setOpened((prev) => !prev);
          }}
        >
          {opened ? (
            <AiOutlineMinusCircle className="icon-center" />
          ) : (
            <AiOutlinePlusCircle className="icon-center" />
          )}
        </div>

        <div
          className={classNames("sudoku-toolset__border", {
            "sudoku-toolset__closed": !opened,
            deg0: opened,
          })}
        >
          <BsUiChecksGrid className="icon-border" />
          {/* validate */}
        </div>

        <div
          className={classNames("sudoku-toolset__border", {
            "sudoku-toolset__closed": !opened,
            deg225: opened,
          })}
        >
          <BsShare className="icon-border" />
          {/* share */}
        </div>
        <div
          className={classNames("sudoku-toolset__border", {
            "sudoku-toolset__closed": !opened,
            deg315: opened,
          })}
        >
          <ImSortNumbericDesc className="icon-border" />
          {/* solve */}
        </div>
        <div
          className={classNames("sudoku-toolset__border", {
            "sudoku-toolset__closed": !opened,
            deg180: opened,
          })}
        >
          <AiOutlineClear className="icon-border" />
          {/* clear */}
        </div>

        <div
          className={classNames("sudoku-toolset__border", {
            "sudoku-toolset__closed": !opened,
            deg90: opened,
          })}
        >
          <AiOutlineLike className="icon-border" />5
        </div>
      </div>
    </div>
  );
};
export default SudokuToolset;
