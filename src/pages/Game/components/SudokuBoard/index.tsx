import React, { useState } from "react";
import {
  setTimer,
  setRegionHighlighting,
  setRowColumnHighlighting,
  setPreventMistakes,
  setAutoRemoveNotes,
} from "../../../../shared/redux/slices/settingsSlice";
import { RootState } from "../../../../shared/redux/store";
import { useAppSelector, useAppDispatch } from "../../../../shared/hooks";
import SudokuCell from "../SudokuCell";

type Props = {};

const initial = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, 2, 8, -1, -1, 9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, -1, -1, -1, -1, -1],
  [-1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, -1, 2, -1, 9],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1],
];

const SudokuBoard = (props: Props) => {
  const [sudokuArr, setSudokuArr] = useState(initial);

  const timer = useAppSelector((state: RootState) => state.appSettings.timer);
  const preventMistakes = useAppSelector(
    (state: RootState) => state.appSettings.preventMistakes
  );
  const autoRemoveNotes = useAppSelector(
    (state: RootState) => state.appSettings.autoRemoveNotes
  );
  const rowColumnHighlighting = useAppSelector(
    (state: RootState) => state.appSettings.rowColumnHighlighting
  );
  const regionHighlighting = useAppSelector(
    (state: RootState) => state.appSettings.regionHighlighting
  );

  return (
    <table className="sudoku-board">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rindex) => {
        return (
          <tr key={rindex} className={(row + 1) % 3 === 0 ? "bBorder" : ""}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cindex) => {
              return (
                <td
                  key={cindex}
                  className={(col + 1) % 3 === 0 ? "rBorder" : ""}
                >
                  <SudokuCell row={row} col={col} />
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
};
export default SudokuBoard;
