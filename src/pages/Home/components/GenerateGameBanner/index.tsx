import React from "react";
import ActionButton from "../../../../shared/components/inputs/ActionButton";
import "./index.scss";

type Props = {};

const GameCreator = (props: Props) => {
  return (
    <div className="game-creator">
      <h2 className="title">
        <span className="title-word title-word-1">LET'S </span>
        <span className="title-word title-word-2">PLAY </span>
        <span className="title-word title-word-3">A </span>
        <span className="title-word title-word-4">GAME</span>
      </h2>

      <ActionButton content="Generate New Sudoku" />
      <ActionButton content="Find A Ready Sudoku" />
    </div>
  );
};

export default GameCreator;
