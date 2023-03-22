import "./index.scss";

type Props = { row: number; col: number };

const SudokuCell = ({ row, col }: Props) => {
  return (
    <input
      // value={sudokuArr[row][col] === -1 ? "" : sudokuArr[row][col]}
      // onChange={(e) => onInputChange(e, row, col)}
      className="sudoku-cell"
      // disabled={initial[row][col] !== -1}
    />
  );
};
export default SudokuCell;
