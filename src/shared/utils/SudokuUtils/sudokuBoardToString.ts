import { SudokuBoard } from "../../redux/slices/currentGameSlice";

export const sudokuBoardToString = ({
  sudokuBoard,
}: {
  sudokuBoard: SudokuBoard;
}): string => {
  const sudokuFragments: string[] = [];

  sudokuBoard.forEach((row, rowIndex) => {
    let firstFragment = row.slice(0, 3).join("");
    let secondFragment = row.slice(3, 6).join("");
    let thirdFragment = row.slice(6, 9).join("");

    sudokuFragments.push(
      [firstFragment, secondFragment, thirdFragment].join(".")
    );
  });

  return sudokuFragments.join(";") + ";";
};
