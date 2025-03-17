import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface appState {
  isStartupActive: boolean;
  isTrashOpen: boolean;
  isInfoOpen: boolean;
  isTasksOpen: boolean;
  isFilesOpen: boolean;
  isInboxOpen: boolean;
  isSearchOpen: boolean;
  isNewsOpen: boolean;
}

const initialState: appState = {
  isStartupActive: true,
  isTrashOpen: false,
  isInfoOpen: true,
  isTasksOpen: false,
  isFilesOpen: false,
  isInboxOpen: false,
  isSearchOpen: false,
  isNewsOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setStartup: (state, action: PayloadAction<boolean>) => {
      state.isStartupActive = action.payload;
    },
    setIsTrashOpen: (state, action: PayloadAction<boolean>) => {
      state.isTrashOpen = action.payload;
    },
    setIsInfoOpen: (state, action: PayloadAction<boolean>) => {
      state.isInfoOpen = action.payload;
    },
    setIsTasksOpen: (state, action: PayloadAction<boolean>) => {
      state.isTasksOpen = action.payload;
    },
    setIsFilesOpen: (state, action: PayloadAction<boolean>) => {
      state.isFilesOpen = action.payload;
    },
    setIsInboxOpen: (state, action: PayloadAction<boolean>) => {
      state.isInboxOpen = action.payload;
    },
    setIsSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchOpen = action.payload;
    },
    setIsNewsOpen: (state, action: PayloadAction<boolean>) => {
      state.isNewsOpen = action.payload;
    },
  },
});

export const {
  setStartup,
  setIsTrashOpen,
  setIsInfoOpen,
  setIsTasksOpen,
  setIsFilesOpen,
  setIsInboxOpen,
  setIsSearchOpen,
  setIsNewsOpen,
} = appSlice.actions;

export default appSlice.reducer;
