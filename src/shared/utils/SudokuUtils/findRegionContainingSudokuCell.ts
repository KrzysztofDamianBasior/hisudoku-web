import type { SudokuCellPosition } from "../../redux/slices/currentGameSlice";

export const findRegionContainingSudokuCell = (
  sudokuCellPosition: SudokuCellPosition
): number => {
  const rowIndex = sudokuCellPosition[0];
  const colIndex = sudokuCellPosition[1];

  return Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);
};
