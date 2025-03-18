import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user-reducer";
import appReducer from "./features/app-reducer";
import mailReducer from "./features/mail-reducer";
import fileReducer from "./features/file-reducer";

const reducers = combineReducers({
  app: appReducer,
  user: userReducer,
  mail: mailReducer,
  file: fileReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: reducers,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
