import { ValidSudokuValue } from "../redux/slices/currentGameSlice";

export const isFragmentSolved = (arr: ValidSudokuValue[]) => {
  const fragment = arr.slice(0).sort().join(""),
    passingFragment = [1, 2, 3, 4, 5, 6, 7, 8, 9].join("");
  return fragment === passingFragment;
};
