import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SudokuValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type NoteValue = null | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type SudokuInfo = { author: string; creationDate: string };
export type SudokuBoard = SudokuValue[][];
export type SudokuCellPosition = [number, number];

export interface CurrentGameState {
  board: SudokuBoard | null;
  focusedCellPosition: SudokuCellPosition | null;
  moves: SudokuBoard[];
  sudokuInfo: SudokuInfo;
  cellsNotes: [
    NoteValue,
    NoteValue,
    NoteValue,
    NoteValue,
    NoteValue,
    NoteValue,
    NoteValue,
    NoteValue,
    NoteValue
  ][][];
}

const initialState: CurrentGameState = {
  sudokuInfo: { author: "initial", creationDate: "initial" },
  board: [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ],
  focusedCellPosition: null,
  moves: [
    [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ],
  ],
  // cellsNotes: new Array(9).fill(new Array(9).fill(new Array(9).fill(null))),
  cellsNotes: [
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    [
      [1, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [2, 3, 4, 5, 6, 2, 3, 5, 7],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [2, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
    ],
    [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
    ],
    [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
    ],
    [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
    ],
    [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
    ],
    [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
    ],
    [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
    ],
    [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
    ],
  ],
};

export const appCurrentGameSlice = createSlice({
  name: "appCurrentGameSlice",
  initialState,
  reducers: {
    focusCell: (
      state: CurrentGameState,
      action: PayloadAction<SudokuCellPosition>
    ) => {
      state.focusedCellPosition = action.payload;
    },
    blurCell: (state: CurrentGameState) => {
      state.focusedCellPosition = null;
    },
    addValue: (state: CurrentGameState, action: PayloadAction<SudokuValue>) => {
      if (state.focusedCellPosition !== null) {
        const lastMove: SudokuBoard = JSON.parse(
          JSON.stringify(state.moves[state.moves.length - 1])
        );
        lastMove[state.focusedCellPosition[0]][state.focusedCellPosition[1]] =
          action.payload;
        state.moves.push(lastMove);
      }
    },
    addNote: (state: CurrentGameState, action: PayloadAction<NoteValue>) => {
      if (state.focusedCellPosition !== null) {
        for (let i = 0; i < 9; i++) {
          if (
            state.cellsNotes[state.focusedCellPosition[0]][
              state.focusedCellPosition[1]
            ][i] === null
          ) {
            state.cellsNotes[state.focusedCellPosition[0]][
              state.focusedCellPosition[1]
            ][i] = action.payload;
          }
        }
      }
    },
    removeNote: (state: CurrentGameState) => {
      if (state.focusedCellPosition !== null) {
        for (let i = 1; i < 9; i++) {
          if (
            state.cellsNotes[state.focusedCellPosition[0]][
              state.focusedCellPosition[1]
            ][i] === null
          ) {
            state.cellsNotes[state.focusedCellPosition[0]][
              state.focusedCellPosition[1]
            ][i - 1] = null;
          }
        }
      }
    },
    undoMove: (state: CurrentGameState) => {
      if (state.moves.length > 1) {
        state.moves.pop();
      }
    },
    newGame: (state: CurrentGameState, action: PayloadAction<SudokuBoard>) => {
      state.board = action.payload;
      state.moves = [action.payload];
    },
  },
});

export const {
  undoMove,
  newGame,
  blurCell,
  focusCell,
  addNote,
  addValue,
  removeNote,
} = appCurrentGameSlice.actions;

export default appCurrentGameSlice.reducer;
