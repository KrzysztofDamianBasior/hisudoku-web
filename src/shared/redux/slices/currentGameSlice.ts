import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SudokuValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Move = {
  sudokuValue: SudokuValue;
  notes: SudokuValue[];
}[][];
export type SudokuBoard = SudokuValue[][];

export interface CurrentGameState {
  board: SudokuBoard;
  moves: Move[];
  info: { author: string; creationDate: string };
}

const initialState: CurrentGameState = {
  info: { author: "initial", creationDate: "initial" },
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
  moves: [
    [
      [
        { sudokuValue: 5, notes: [] },
        { sudokuValue: 3, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 7, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
      ],
      [
        { sudokuValue: 6, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 1, notes: [] },
        { sudokuValue: 9, notes: [] },
        { sudokuValue: 5, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
      ],
      [
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 9, notes: [] },
        { sudokuValue: 8, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 6, notes: [] },
        { sudokuValue: 0, notes: [] },
      ],
      [
        { sudokuValue: 8, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 6, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 3, notes: [] },
      ],
      [
        { sudokuValue: 4, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 8, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 3, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 1, notes: [] },
      ],
      [
        { sudokuValue: 7, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 2, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 6, notes: [] },
      ],
      [
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 6, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 2, notes: [] },
        { sudokuValue: 8, notes: [] },
        { sudokuValue: 0, notes: [] },
      ],
      [
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 4, notes: [] },
        { sudokuValue: 1, notes: [] },
        { sudokuValue: 9, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 5, notes: [] },
      ],
      [
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 8, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 0, notes: [] },
        { sudokuValue: 7, notes: [] },
        { sudokuValue: 9, notes: [] },
      ],
    ],
  ],
};

export const appCurrentGameSlice = createSlice({
  name: "appCurrentGameSlice",
  initialState,
  reducers: {
    nextMove: (state, action: PayloadAction<Move>) => {
      state.moves.push(action.payload);
    },
    undoMove: (state) => {
      state.moves.pop();
    },
    newGame: (state, action: PayloadAction<SudokuBoard>) => {
      const board: SudokuBoard = action.payload;
      const firstMove: Move = [[], [], [], [], [], [], [], [], []];

      board.forEach((row, rowIndex) => {
        row.forEach((val, valIndex) => {
          firstMove[rowIndex].push({
            sudokuValue: val,
            notes: [],
          });
        });
      });
      state.moves = [firstMove];
    },
  },
});

export const { nextMove, undoMove, newGame } = appCurrentGameSlice.actions;

export default appCurrentGameSlice.reducer;
