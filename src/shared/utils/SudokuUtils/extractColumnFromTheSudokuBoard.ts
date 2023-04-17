import { SudokuBoard } from "../../redux/slices/currentGameSlice";

export const extractColumnFromTheSudokuBoard = ({
  sudokuBoard,
  columnNumber,
}: {
  sudokuBoard: SudokuBoard;
  columnNumber: number;
}) => {
  return sudokuBoard.reduce((total, row) => [...total, row[columnNumber]], []);
};
