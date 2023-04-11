import { createSlice } from "@reduxjs/toolkit";

export interface DialogState {
  isGameSettingsDialogOpened: boolean;
  isLogInDialogOpened: boolean;
}

const initialState: DialogState = {
  isGameSettingsDialogOpened: false,
  isLogInDialogOpened: false,
};

export const appDialogsSlice = createSlice({
  name: "appDialogs",
  initialState,
  reducers: {
    openGameSettingsDialog: (state) => {
      state.isGameSettingsDialogOpened = true;
    },
    closeGameSettingsDialog: (state) => {
      state.isGameSettingsDialogOpened = false;
    },
    openLogInDialog: (state) => {
      state.isLogInDialogOpened = true;
    },
    closeLogInDialog: (state) => {
      state.isLogInDialogOpened = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeGameSettingsDialog, openGameSettingsDialog } =
  appDialogsSlice.actions;

export default appDialogsSlice.reducer;
