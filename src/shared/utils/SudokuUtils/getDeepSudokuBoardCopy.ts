import { SudokuBoard } from "../../redux/slices/currentGameSlice";

export const getDeepSudokuBoardCopy = ({
  sudokuBoard,
}: {
  sudokuBoard: SudokuBoard;
}): SudokuBoard => {
  return JSON.parse(JSON.stringify(sudokuBoard));
};
