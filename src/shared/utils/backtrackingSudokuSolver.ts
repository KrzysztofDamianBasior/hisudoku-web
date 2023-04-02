import { SudokuBoard, SudokuValue } from "../redux/slices/currentGameSlice";

function isSudokuValueValid({
  sudokuBoard,
  row,
  column,
  sudokuValue,
}: {
  sudokuBoard: SudokuBoard;
  row: number;
  column: number;
  sudokuValue: SudokuValue;
}): boolean {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(column / 3) + (i % 3);
    if (
      sudokuBoard[row][i] === sudokuValue ||
      sudokuBoard[i][column] === sudokuValue ||
      sudokuBoard[m][n] === sudokuValue
    ) {
      return false;
    }
  }
  return true;
}

function getDeepSudokuBoardCopy({
  sudokuBoard,
}: {
  sudokuBoard: SudokuBoard;
}): SudokuBoard {
  return JSON.parse(JSON.stringify(sudokuBoard));
}

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
            isSudokuValueValid({
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
