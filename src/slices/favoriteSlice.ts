import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    value: "none",
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
