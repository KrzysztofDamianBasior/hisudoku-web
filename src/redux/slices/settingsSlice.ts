import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
    timer: boolean;
    regionHighlighting: boolean;
    rowColumnHighlighting: boolean;
    preventMistakes: boolean;
    autoRemoveNotes: boolean;
}

const initialState: SettingsState = {
    timer: true,
    regionHighlighting: true,
    rowColumnHighlighting: true,
    preventMistakes: true,
    autoRemoveNotes: true
}

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<boolean>) => {
        state.timer = action.payload
    },
    setRegionHighlighting: (state, action: PayloadAction<boolean>) => {
        state.regionHighlighting = action.payload
    },
    setRowColumnHighlighting: (state, action: PayloadAction<boolean>) => {
        state.rowColumnHighlighting = action.payload
    },
    setPreventMistakes: (state, action: PayloadAction<boolean>) => {
        state.preventMistakes = action.payload
    },
    setAutoRemoveNotes: (state, action: PayloadAction<boolean>) => {
        state.autoRemoveNotes = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTimer, setRegionHighlighting, setRowColumnHighlighting, setPreventMistakes, setAutoRemoveNotes } = appSettingsSlice.actions

export default appSettingsSlice.reducer
