import { Board } from "../redux/slices/currentGameSlice";

export const extractColumnFromTheBoard = (board: Board, columnNum: number) => {
  return board.reduce((total, row) => [...total, row[columnNum]], []);
};
