import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface appState {
  isStartupActive: boolean;
}

const initialState: appState = {
  isStartupActive: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setStartup: (state, action: PayloadAction<boolean>) => {
      state.isStartupActive = action.payload;
    },
  },
});

export const { setStartup } = appSlice.actions;

export default appSlice.reducer;
