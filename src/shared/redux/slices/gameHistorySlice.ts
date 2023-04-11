import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CurrentGameState } from "./currentGameSlice";

export interface GameHistoryState {
  history: CurrentGameState[];
}

const initialState: GameHistoryState = {
  history: [
    {
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
      moves: [],
    },
  ],
};

export const appGameHistorySlice = createSlice({
  name: "appGamesHistorySlice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CurrentGameState>) => {
      state.history.push(action.payload);
    },
    pop: (state) => {
      state.history.pop();
    },
    clear: (state) => {
      state.history = [];
    },
  },
});

export const { add, pop, clear } = appGameHistorySlice.actions;

export default appGameHistorySlice.reducer;
