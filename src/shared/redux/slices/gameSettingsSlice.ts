import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameSettingsState {
  isTimerVisible: boolean;
  isRegionHighlightingVisible: boolean;
  isRowColumnHighlightingVisible: boolean;
  autoPreventMistakes: boolean;
  autoRemoveNotes: boolean;
}

const initialState: GameSettingsState = {
  isTimerVisible: true,
  isRegionHighlightingVisible: true,
  isRowColumnHighlightingVisible: true,
  autoPreventMistakes: true,
  autoRemoveNotes: true,
};

export const appGameSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setTimerVisiblity: (state, action: PayloadAction<boolean>) => {
      state.isTimerVisible = action.payload;
    },
    setRegionHighlightingVisiblity: (state, action: PayloadAction<boolean>) => {
      state.isRegionHighlightingVisible = action.payload;
    },
    setRowColumnHighlightingVisiblity: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isRowColumnHighlightingVisible = action.payload;
    },
    setAutoPreventMistakes: (state, action: PayloadAction<boolean>) => {
      state.autoPreventMistakes = action.payload;
    },
    setAutoRemoveNotes: (state, action: PayloadAction<boolean>) => {
      state.autoRemoveNotes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAutoPreventMistakes,
  setRegionHighlightingVisiblity,
  setRowColumnHighlightingVisiblity,
  setTimerVisiblity,
  setAutoRemoveNotes,
} = appGameSettingsSlice.actions;

export default appGameSettingsSlice.reducer;
