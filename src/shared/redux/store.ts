import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import gameSettingsReducer from "./slices/gameSettingsSlice";
import gameHistoryReducer from "./slices/gameHistorySlice";
import currentGameReducer from "./slices/currentGameSlice";
import dialogsReducer from "./slices/dialogsSlice";
import snackbarsReducer from "./slices/snackbarsSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  appTheme: themeReducer,
  appGameSettings: gameSettingsReducer,
  appHistory: gameHistoryReducer,
  appCurrentGame: currentGameReducer,
  appDialogs: dialogsReducer,
  appSnackbars: snackbarsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["appDialogs", "appSnackbars", "appCurrentGame"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
