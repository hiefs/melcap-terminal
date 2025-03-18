import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { File } from "../interfaces";

interface fileState {
  files: File[];
}

const initialState: fileState = {
  files: [],
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<File[]>) => {
      state.files = action.payload;
    },
  },
});

export const { setFiles } = filesSlice.actions;

export default filesSlice.reducer;
