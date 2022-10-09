import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface wishlistItem {
  id: number;
  brand: string;
  name: string;
  img: string;
  color: null | {
    hex: string;
    name: string;
  };
}

interface wishlistState {
  value: [] | wishlistItem[];
}

const initialState: wishlistState = {
  value: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<wishlistItem>) => {
      state.value = [action.payload, ...state.value];
    },
    remove: (state, action: PayloadAction<wishlistItem>) => {
      state.value = [...state.value.filter((e) => e !== action.payload)];
    },
  },
});

export const { add, remove } = wishlistSlice.actions;

export const selectWishlist = (state: RootState) => state.wishlist.value;

export default wishlistSlice.reducer;
