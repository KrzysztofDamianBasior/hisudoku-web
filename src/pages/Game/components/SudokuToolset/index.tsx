import React, { useState } from "react";
import classNames from "classnames";
import {
  AiOutlineClear,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsUiChecksGrid, BsShare } from "react-icons/bs";
import { ImSortNumbericDesc } from "react-icons/im"; //solve
import { BiReset, BiStopwatch } from "react-icons/bi";
import Tippy from "@tippyjs/react";
import "./index.scss";

type Props = {};

const SudokuToolset = (props: Props) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="sudoku-toolset">
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

      <Tippy arrow={false} delay={500} content="validate">
        <button>
          <div
            className={classNames("sudoku-toolset__item", {
              "sudoku-toolset__item--closed": !opened,
              deg0: opened,
            })}
          >
            <BsUiChecksGrid className="icon-border" />
          </div>
        </button>
      </Tippy>

      <Tippy arrow={false} delay={500} content="share">
        <button>
          <div
            className={classNames("sudoku-toolset__item", {
              "sudoku-toolset__item--closed": !opened,
              deg60: opened,
            })}
          >
            <BsShare className="icon-border" />
          </div>
        </button>
      </Tippy>

      <Tippy arrow={false} delay={500} content="solve">
        <button>
          <div
            className={classNames("sudoku-toolset__item", {
              "sudoku-toolset__item--closed": !opened,
              deg120: opened,
            })}
          >
            <ImSortNumbericDesc className="icon-border" />
          </div>
        </button>
      </Tippy>

      <Tippy arrow={false} delay={500} content="clear">
        <button>
          <div
            className={classNames("sudoku-toolset__item", {
              "sudoku-toolset__item--closed": !opened,
              deg180: opened,
            })}
          >
            <AiOutlineClear className="icon-border" />
          </div>
        </button>
      </Tippy>

      <Tippy arrow={false} delay={500} content="reset timer">
        <button>
          <div
            className={classNames("sudoku-toolset__item", {
              "sudoku-toolset__item--closed": !opened,
              deg240: opened,
            })}
          >
            <BiReset className="icon-border" />
          </div>
        </button>
      </Tippy>

      <Tippy arrow={false} delay={500} content="stop timer">
        <button>
          <div
            className={classNames("sudoku-toolset__item", {
              "sudoku-toolset__item--closed": !opened,
              deg300: opened,
            })}
          >
            <BiStopwatch className="icon-border" />
          </div>
        </button>
      </Tippy>
    </div>
  );
};
export default SudokuToolset;
