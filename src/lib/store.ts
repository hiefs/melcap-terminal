import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user-reducer";
import appReducer from "./features/app-reducer";

const reducers = combineReducers({
  app: appReducer,
  user: userReducer,
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
