import React, { useEffect, useState } from "react";

import {
  addValue,
  blurCell,
  focusCell,
} from "../../../../shared/redux/slices/currentGameSlice";
import { RootState } from "../../../../shared/redux/store";
import type {
  NoteValue,
  SudokuValue,
} from "../../../../shared/redux/slices/currentGameSlice";

import { useAppSelector, useAppDispatch } from "../../../../shared/hooks";
import { validateSudokuValue } from "../../../../shared/utils/SudokuUtils/validateSudokuValue";
import { findRegionContainingSudokuCell } from "../../../../shared/utils/SudokuUtils/findRegionContainingSudokuCell";

import Box from "@mui/material/Box";

type Props = {
  row: number;
  col: number;
};

const SudokuCell = ({ row, col }: Props) => {
  const [rowBacklight, setRowBacklight] = useState<boolean>(false);
  const [columnBacklight, setColumnBacklight] = useState<boolean>(false);
  const [regionBacklight, setRegionBacklight] = useState<boolean>(false);

  const initialSudokuBoard = useAppSelector(
    (state: RootState) => state.appCurrentGame.board
  );

  const focusedCellPosition = useAppSelector(
    (state: RootState) => state.appCurrentGame.focusedCellPosition
  );

  const moves = useAppSelector(
    (state: RootState) => state.appCurrentGame.moves
  );

  const cellsNotes = useAppSelector(
    (state: RootState) => state.appCurrentGame.cellsNotes
  );

  const cellValue: SudokuValue = moves[moves.length - 1][row][col];

  const cellNotes: NoteValue[] = cellsNotes[row][col];

  useEffect(() => {
    if (focusedCellPosition !== null) {
      if (row === focusedCellPosition[0]) {
        setRowBacklight(true);
      } else {
        setRowBacklight(false);
      }
      if (col === focusedCellPosition[1]) {
        setColumnBacklight(true);
      } else {
        setColumnBacklight(false);
      }
      if (
        findRegionContainingSudokuCell(focusedCellPosition) ===
        findRegionContainingSudokuCell([row, col])
      ) {
        setRegionBacklight(true);
      } else {
        setRegionBacklight(false);
      }
    } else {
      setRowBacklight(false);
      setColumnBacklight(false);
      setRegionBacklight(false);
    }
  }, [focusedCellPosition, col, row]);

  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        width: "60px",
        height: "60px",
        border: "1px solid black",
        position: "relative",
        transition: "background-color 1s",
        bgcolor: (theme) => {
          if (
            focusedCellPosition &&
            focusedCellPosition[0] === row &&
            focusedCellPosition[1] === col
          ) {
            return theme.palette.mode === "light"
              ? theme.palette.secondary.light
              : theme.palette.secondary.dark;
          }
          if (regionBacklight) {
            return theme.palette.primary.main;
          }
          if (rowBacklight || columnBacklight) {
            return theme.palette.mode === "light"
              ? theme.palette.primary.light
              : theme.palette.primary.dark;
          }
          return theme.palette.mode === "light"
            ? theme.palette.grey[300]
            : theme.palette.grey[900];
        },
      }}
    >
      <Box
        sx={{
          color: "text.disabled",
          fontSize: "15px",
          lineHeight: 1,
          position: "absolute",
          top: 0,
          left: 0,
          padding: "2px",
          width: 1,
          height: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            lineHeight: 1,
          }}
        >
          <Box>{cellNotes[0]}</Box>
          <div className="sudoku-note">{cellNotes[1]}</div>
          <div className="sudoku-note">{cellNotes[2]}</div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            lineHeight: 1,
          }}
        >
          <div className="sudoku-note">{cellNotes[3]}</div>
          <div className="sudoku-note">{cellNotes[4]}</div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            lineHeight: 1,
          }}
        >
          <div className="sudoku-note">{cellNotes[5]}</div>
          <div className="sudoku-note">{cellNotes[6]}</div>
          <div className="sudoku-note">{cellNotes[7]}</div>
          <div className="sudoku-note">{cellNotes[8]}</div>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "transparent",
          width: 1,
          height: 1,
          "& > input": {
            fontSize: "30px",
            bgcolor: "transparent",
            textAlign: "center",
            width: 1,
            height: 1,
            outline: 0,
            border: 0,
            color: "text.primary",
            "&:disabled": {
              bgcolor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[500]
                  : theme.palette.grey[800],
              color: "text.secondary",
            },
          },
        }}
      >
        <input
          value={cellValue === 0 ? "" : cellValue}
          onFocus={() => {
            dispatch(focusCell([row, col]));
          }}
          // onBlur={() => {
          //   dispatch(blurCell());
          // }}
          disabled={initialSudokuBoard![row][col] !== 0}
          onChange={(event) => {
            const sudokuValue = parseInt(event.target.value.slice(-1));
            if (validateSudokuValue(sudokuValue)) {
              dispatch(addValue(sudokuValue));
            }
          }}
        />
      </Box>
    </Box>
  );
};
export default SudokuCell;
