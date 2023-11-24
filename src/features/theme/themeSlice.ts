import { createSlice } from "@reduxjs/toolkit";

type ThemeState = boolean;

const initialState:ThemeState = true;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
        return (state = !state);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
