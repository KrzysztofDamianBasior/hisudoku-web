import React from "react";

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
      <div className="game-creator__glass">
        <button className="game-creator__button b1">Generate</button>
        <button className="game-creator__button b2">Create</button>
        <button className="game-creator__button b3">Find</button>
        <button className="game-creator__button b4">History</button>
      </div>
    </div>
  );
};

export default GameCreator;
