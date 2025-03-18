import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mail } from "../interfaces";

interface mailState {
  mail: Mail[];
}

const initialState: mailState = {
  mail: [],
};

const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setMail: (state, action: PayloadAction<Mail[]>) => {
      state.mail = action.payload;
    },
  },
});

export const { setMail } = mailSlice.actions;

export default mailSlice.reducer;
