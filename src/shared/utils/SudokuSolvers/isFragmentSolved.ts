import { SudokuValue } from "../../redux/slices/currentGameSlice";

export const isFragmentSolved = ({
  sudokuValuesArray,
}: {
  sudokuValuesArray: SudokuValue[];
}) => {
  const fragment = sudokuValuesArray.slice(0).sort().join(""),
    passingFragment = [1, 2, 3, 4, 5, 6, 7, 8, 9].join("");
  return fragment === passingFragment;
};
