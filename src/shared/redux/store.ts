import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import settingsReducer from "./slices/settingsSlice";
import gameHistoryReducer from "./slices/gameHistorySlice";
import currentGameReducer from "./slices/currentGameSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  appTheme: themeReducer,
  appSettings: settingsReducer,
  appHistory: gameHistoryReducer,
  appCurrentGame: currentGameReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["appTheme"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
