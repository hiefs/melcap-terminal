import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface taskState {
  taskDay: number;
  taskStep: number;
}

const initialState: taskState = {
  taskDay: 1,
  taskStep: 0,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTaskDay: (state, action: PayloadAction<number>) => {
      state.taskDay = action.payload;
    },
    setTaskStep: (state, action: PayloadAction<number>) => {
      state.taskStep = action.payload;
    },
  },
});

export const { setTaskDay, setTaskStep } = taskSlice.actions;

export default taskSlice.reducer;
