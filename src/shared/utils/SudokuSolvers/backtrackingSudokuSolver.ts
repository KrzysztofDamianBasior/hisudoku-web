import { SudokuBoard, SudokuValue } from "../../redux/slices/currentGameSlice";
import { whetherSudokuValueCollidesWithOthers } from "../SudokuUtils/whetherSudokuValueCollidesWithOthers";
import { getDeepSudokuBoardCopy } from "../SudokuUtils/getDeepSudokuBoardCopy";

export function backtrackingSudokuSolver({
  sudokuBoard,
}: {
  sudokuBoard: SudokuBoard;
}) {
  let copiedSudokuBoard = getDeepSudokuBoardCopy({ sudokuBoard });

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      if (copiedSudokuBoard[row][column] === 0) {
        for (
          let sudokuValue: SudokuValue = 1;
          sudokuValue <= 9;
          sudokuValue++
        ) {
          if (
            whetherSudokuValueCollidesWithOthers({
              sudokuBoard: copiedSudokuBoard,
              row,
              column,
              sudokuValue: sudokuValue as SudokuValue,
            })
          ) {
            copiedSudokuBoard[row][column] = sudokuValue as SudokuValue;
            if (backtrackingSudokuSolver({ sudokuBoard: copiedSudokuBoard })) {
              return true;
            } else {
              copiedSudokuBoard[row][column] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
