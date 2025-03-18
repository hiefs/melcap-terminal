import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../interfaces";

interface newsState {
  news: News[];
}

const initialState: newsState = {
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
