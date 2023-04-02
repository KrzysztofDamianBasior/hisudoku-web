import { SudokuBoard } from "../redux/slices/currentGameSlice";

export const extractColumnFromTheBoard = ({
  sudokuBoard,
  columnNumber,
}: {
  sudokuBoard: SudokuBoard;
  columnNumber: number;
}) => {
  return sudokuBoard.reduce((total, row) => [...total, row[columnNumber]], []);
};
