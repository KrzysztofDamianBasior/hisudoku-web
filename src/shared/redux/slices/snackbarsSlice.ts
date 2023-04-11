import { createSlice } from "@reduxjs/toolkit";

export interface SnackbarsState {
  isSudokuPublishedSnackbarOpened: boolean;
  isLoggedInSnackbarOpened: boolean;
  isLoggedOutSnackbarOpened: boolean;
  isGameSettingsChangedSnackbarOpened: boolean;
  isThemeChangedSnackbarOpened: boolean;
}

const initialState: SnackbarsState = {
  isGameSettingsChangedSnackbarOpened: false,
  isLoggedInSnackbarOpened: false,
  isLoggedOutSnackbarOpened: false,
  isSudokuPublishedSnackbarOpened: false,
  isThemeChangedSnackbarOpened: false,
};

export const appDialogsSlice = createSlice({
  name: "appDialogs",
  initialState,
  reducers: {
    openGameSettingsChangedSnackbar: (state) => {
      state.isGameSettingsChangedSnackbarOpened = true;
    },
    closeGameSettingsChangedSnackbar: (state) => {
      state.isGameSettingsChangedSnackbarOpened = false;
    },
    openLoggedInSnackbar: (state) => {
      state.isLoggedInSnackbarOpened = true;
    },
    closeLoggedInSnackbar: (state) => {
      state.isLoggedInSnackbarOpened = false;
    },
    openLoggedOutSnackbar: (state) => {
      state.isLoggedOutSnackbarOpened = true;
    },
    closeLoggedOutSnackbar: (state) => {
      state.isLoggedOutSnackbarOpened = false;
    },
    openSudokuPublishedSnackbar: (state) => {
      state.isSudokuPublishedSnackbarOpened = true;
    },
    closeSudokuPublishedSnackbar: (state) => {
      state.isSudokuPublishedSnackbarOpened = false;
    },
    openThemeChangedSnackbar: (state) => {
      state.isThemeChangedSnackbarOpened = true;
    },
    closeThemeChangedSnackbar: (state) => {
      state.isThemeChangedSnackbarOpened = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  closeGameSettingsChangedSnackbar,
  closeLoggedInSnackbar,
  closeLoggedOutSnackbar,
  closeSudokuPublishedSnackbar,
  closeThemeChangedSnackbar,
  openGameSettingsChangedSnackbar,
  openLoggedInSnackbar,
  openLoggedOutSnackbar,
  openSudokuPublishedSnackbar,
  openThemeChangedSnackbar,
} = appDialogsSlice.actions;

export default appDialogsSlice.reducer;
